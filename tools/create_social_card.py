#!/usr/bin/env python3
"""Render a consistent 1200 by 630 Open Graph social card as a PNG."""

from __future__ import annotations

import argparse
import subprocess
import tempfile
import textwrap
from pathlib import Path
import re
from xml.sax.saxutils import escape


WIDTH = 1200
HEIGHT = 627
TITLE_MAX_LINES = 3
SUBTITLE_MAX_LINES = 2
SITE_CSS = Path(__file__).resolve().parents[1] / "assets" / "css" / "site.css"
SITE_COLOUR_TOKENS = ("bg", "ink", "ink-soft", "ink-faint", "accent")


def wrap_text(value: str, width: int, max_lines: int, field: str) -> list[str]:
    lines = textwrap.wrap(value.strip(), width=width, break_long_words=False, break_on_hyphens=False)
    if not value.strip() or len(lines) > max_lines:
        raise ValueError(f"{field} must fit within {max_lines} line(s) of the social-card template.")
    return lines


def text_nodes(lines: list[str], x: int, y: int, line_height: int, css_class: str) -> str:
    return "\n".join(
        f'  <text class="{css_class}" x="{x}" y="{y + index * line_height}">{escape(line)}</text>'
        for index, line in enumerate(lines)
    )


def site_colours() -> dict[str, str]:
    css = SITE_CSS.read_text(encoding="utf-8")
    colours: dict[str, str] = {}
    for token in SITE_COLOUR_TOKENS:
        match = re.search(rf"--{re.escape(token)}:\s*(#[0-9a-fA-F]{{6}})", css)
        if not match:
            raise RuntimeError(f"Could not find --{token} in {SITE_CSS}.")
        colours[token] = match.group(1)
    return colours


def svg_content(title: list[str], subtitle: list[str], marker: str, colours: dict[str, str]) -> str:
    title_y = 270 - (len(title) - 1) * 35
    subtitle_y = title_y + len(title) * 90 + 30
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}" role="img" aria-labelledby="title description">
  <title id="title">{escape(' '.join(title))}</title>
  <desc id="description">{escape(' '.join(subtitle))}</desc>
  <style>
    .marker {{ fill: {colours['ink-faint']}; font-family: "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 600; letter-spacing: 3px; }}
    .title {{ fill: {colours['ink']}; font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif; font-size: 78px; font-weight: 400; }}
    .subtitle {{ fill: {colours['ink-soft']}; font-family: "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif; font-size: 34px; font-weight: 400; }}
    .domain {{ fill: {colours['ink-faint']}; font-family: "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 400; }}
  </style>
  <rect width="{WIDTH}" height="{HEIGHT}" fill="{colours['bg']}"/>
  <rect width="{WIDTH}" height="16" fill="{colours['accent']}"/>
  <text class="marker" x="76" y="92">{escape(marker.upper())}</text>
{text_nodes(title, 76, title_y, 90, 'title')}
{text_nodes(subtitle, 76, subtitle_y, 47, 'subtitle')}
  <text class="domain" x="76" y="565">philipbudden.co.uk</text>
</svg>'''


def validate_png(path: Path) -> None:
    result = subprocess.run(
        ["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(path)],
        check=True,
        capture_output=True,
        text=True,
    )
    dimensions = result.stdout
    if f"pixelWidth: {WIDTH}" not in dimensions or f"pixelHeight: {HEIGHT}" not in dimensions:
        raise RuntimeError(f"Expected a {WIDTH} by {HEIGHT} PNG, got:\n{dimensions}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--title", required=True)
    parser.add_argument("--subtitle", required=True)
    parser.add_argument("--marker", required=True)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()

    marker = args.marker.strip()
    if not marker or len(marker) > 32:
        raise ValueError("marker must be between 1 and 32 characters.")

    title = wrap_text(args.title, width=25, max_lines=TITLE_MAX_LINES, field="title")
    subtitle = wrap_text(args.subtitle, width=66, max_lines=SUBTITLE_MAX_LINES, field="subtitle")
    output = args.output.resolve()
    if output.suffix.lower() != ".png":
        raise ValueError("output must have a .png extension.")

    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(mode="w", suffix=".svg", encoding="utf-8", delete=False) as temporary:
        temporary.write(svg_content(title, subtitle, marker, site_colours()))
        svg_path = Path(temporary.name)

    try:
        subprocess.run(["sips", "-s", "format", "png", str(svg_path), "--out", str(output)], check=True)
        validate_png(output)
    finally:
        svg_path.unlink(missing_ok=True)

    print(f"Created {output} ({WIDTH}x{HEIGHT}).")


if __name__ == "__main__":
    main()
