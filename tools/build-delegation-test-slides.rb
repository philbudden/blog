#!/usr/bin/env ruby
# frozen_string_literal: true

require "fileutils"
require "open3"
require "pathname"
require "tempfile"
require "cgi"

ROOT = Pathname.new(__dir__).join("..").realpath
PUBLIC_HTML = ROOT.join("practical-delegation-test/slides/index.html")
PUBLIC_PDF = ROOT.join("assets/practical-delegation-test/delegating-work-to-ai-conference-talk.pdf")
PUBLIC_ASSET_PREFIX = "../../assets/practical-delegation-test/delegating-work-to-ai/"
SOURCE_ASSET_PREFIX = "../../deliverables/practical-delegation-test-guide/diagram-options/"
PUBLIC_DESCRIPTION = "A visual introduction to the Practical Delegation Test, a framework for deciding what to delegate to AI and where human judgement should lead."

def fail!(message)
  warn "ERROR: #{message}"
  exit 1
end

def run!(*command)
  puts "$ #{command.join(" ")}"
  stdout, stderr, status = Open3.capture3({ "LANG" => "en_GB.UTF-8" }, *command)
  $stdout.print(stdout)
  $stderr.print(stderr)
  fail!("command failed: #{command.first}") unless status.success?
end

def speaker_notes(markdown)
  markdown.scan(/<!--\s*Speaker note:\s*(.*?)-->/m).flatten
end

def public_markdown(markdown)
  markdown
    # Marp treats every ordinary HTML comment as a presenter note. Keep only
    # Marp directives such as <!-- _class: visual -->, and remove both the
    # speaker notes and the source-only deck contract before rendering.
    .gsub(/<!--(?!\s*_[^>]*-->).*?-->\s*/m, "")
    .gsub(SOURCE_ASSET_PREFIX, PUBLIC_ASSET_PREFIX)
end

def normalise_text(text)
  CGI.unescapeHTML(text.gsub(/<[^>]+>/, " "))
     .gsub(/\s+/, " ")
     .strip
end

def note_fragments(notes)
  notes.flat_map do |note|
    # Make source Markdown comparable to the visible text emitted by Marp.
    plain_note = note
      .gsub(/!\[([^\]]*)\]\([^)]*\)/, '\\1')
      .gsub(/\[([^\]]+)\]\([^)]*\)/, '\\1')
      .gsub(/[`*_~#>]/, "")
    normalised_note = normalise_text(plain_note)
    sentences = normalised_note.split(/(?<=[.!?])\s+/)
    candidates = sentences.empty? ? [normalised_note] : sentences
    candidates.select { |fragment| fragment.length >= 20 }
  end.uniq
end

def add_return_link(html)
  navigation = <<~HTML
    <style>
      .delegation-test-return { background: rgba(0, 0, 0, 0.72); border: 1px solid rgba(255, 255, 255, 0.7); border-radius: 0.35rem; color: #fff; font: 600 14px/1.2 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; left: 1rem; padding: 0.7rem 0.85rem; position: fixed; text-decoration: none; top: 1rem; z-index: 20; }
      .delegation-test-return:focus, .delegation-test-return:hover { background: #2451d1; color: #fff; outline: 3px solid #fff; outline-offset: 2px; }
      @media (max-width: 640px) { .delegation-test-return { font-size: 12px; left: 0.65rem; padding: 0.6rem 0.7rem; top: 0.65rem; } }
    </style>
    <a class="delegation-test-return" href="../">Return to the Delegation Test</a>
  HTML
  html.sub("</body>", "#{navigation}</body>")
end

if ARGV.length != 2
  fail!("usage: ruby tools/build-delegation-test-slides.rb SOURCE.marp.md THEME.css")
end

source = Pathname.new(ARGV[0]).expand_path
theme = Pathname.new(ARGV[1]).expand_path
fail!("source not found: #{source}") unless source.file?
fail!("theme not found: #{theme}") unless theme.file?

original = source.read
notes = speaker_notes(original)
fail!("no speaker-note blocks found in #{source}") if notes.empty?
clean = public_markdown(original)
fail!("speaker-note blocks remain after sanitising") if clean.match?(/<!--\s*Speaker note:/i)

FileUtils.mkdir_p(PUBLIC_HTML.dirname)
FileUtils.mkdir_p(PUBLIC_PDF.dirname)

Tempfile.create(["delegation-test-public", ".marp.md"], PUBLIC_HTML.dirname.to_s) do |prepared|
  prepared.write(clean)
  prepared.flush

  run!("marp", prepared.path, "--html", "--description", PUBLIC_DESCRIPTION, "--theme-set", theme.to_s, "--output", PUBLIC_HTML.to_s)
  run!("marp", prepared.path, "--html", "--description", PUBLIC_DESCRIPTION, "--allow-local-files", "--theme-set", theme.to_s, "--pdf", "--output", PUBLIC_PDF.to_s)
end

html = PUBLIC_HTML.read
html = add_return_link(html)
PUBLIC_HTML.write(html)
fail!("public HTML retains a rendered note element") if html.include?("<div class=\"bespoke-marp-note\"")

pdf_text, pdf_status = Open3.capture2("pdftotext", PUBLIC_PDF.to_s, "-")
fail!("could not extract PDF text for note validation") unless pdf_status.success?

public_html_text = normalise_text(html)
public_pdf_text = normalise_text(pdf_text)
public_slide_text = normalise_text(clean)

note_fragments(notes).each do |fragment|
  # A note occasionally repeats on-slide copy to cue the presenter. It is not
  # evidence of a note leak when that exact phrase belongs on the public slide.
  next if public_slide_text.include?(fragment)

  fail!("public HTML contains speaker-note text") if public_html_text.include?(fragment)
  fail!("public PDF contains speaker-note text") if public_pdf_text.include?(fragment)
end

puts "Generated #{PUBLIC_HTML.relative_path_from(ROOT)} and #{PUBLIC_PDF.relative_path_from(ROOT)}"
puts "Verified #{notes.length} speaker-note blocks are absent from public outputs."
