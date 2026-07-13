---
title: "Diary: Week 28, 2026"
date: 2026-07-13
summary: "A weekly diary entry on turning SecondBrain outputs into public-facing frameworks, with the Practical Delegation Test growing into a white paper and a broader responsible-AI argument."
tags:
  - diary
  - ai
  - secondbrain
  - responsible-ai
series: diary
draft: false
layout: article
---

This week felt like a shift from proving that the system could produce useful outputs to asking what those outputs might become.

Last week I wrote about my SecondBrain starting to behave like more than a store of notes. It surfaced an open question, helped me work through it, and turned it into reusable thinking. This week took that a step further. The same machinery started producing something closer to a body of work: a white paper, a distribution plan, a possible sequence of follow-on papers, and a clearer sense of the argument I keep circling around: responsible AI adoption.

That does not mean the week was detached from normal work. There was still platform governance, data migration follow-up, deployment work, review behaviour, SQL authentication issues, and the continuing saga of waiting for infrastructure access to become real rather than theoretically fixed. But the most interesting thread was not the task list. It was watching several ideas that had been living in notes, drafts, and operational examples start to join together into something more deliberate.

## A week of turning working notes into public assets

The biggest piece of the week was a white paper called *Delegating Work to AI*. It grew out of the Practical Delegation Test, which began as a relatively simple question: how do you decide what work can sensibly be handed to AI, what needs checkpoints, and what should remain human-led?

The first version could have stayed as a useful internal heuristic. It asked four questions that still feel like the right core:

- Can I describe the outcome clearly?
- Can I verify the result cheaply enough?
- What judgment must remain human?
- Where does the uncertainty go?

Those questions sound simple, but the more I worked with them, the more they exposed a much wider problem. A lot of AI adoption conversation still treats generation as the main event. If a model can draft, code, summarise, compare, or plan quickly, then the assumption is that useful work has become cheaper. Sometimes it has. But often the cost has not disappeared; it has moved into specification, checking, integration, and accountability.

That is the part I kept coming back to. Cheap generation can still be expensive delegation. A long pull request may be easy for an AI system to produce and hard for a human to review well. A polished summary may hide omissions. A confident draft may push the real judgment problem onto the next person in the chain. If nobody has made the uncertainty visible, the work has not been completed so much as passed downstream in a more convincing shape.

The white paper forced me to make that argument properly rather than leaving it as a recurring note-to-self. It went through a fairly serious development loop: drafting, red-team review, scope tightening, citation work, example stress-testing, tone cleanup, and PDF generation. That sounds quite formal for a personal white paper, but it was useful because it made the difference between a good idea and a shareable artefact visible. A framework that is persuasive in my own notes still needs to survive someone else reading it without the surrounding context in my head.

By the end of the week the paper had moved from private drafting into peer review. That felt like a meaningful threshold. Not because the paper is finished forever, but because the next useful input is no longer more internal polishing. It is whether other people who care about AI adoption, governance, data, engineering, or organisational work recognise the problem and find the framework useful.

## The broader argument is starting to show itself

The other thing that happened this week is that the white paper stopped looking like a standalone object.

By the weekend, I had started to map it into a broader responsible-agentic-work toolkit. That sounds more grand than it currently is, but the underlying shape is practical. Delegation is one part of the problem. Handoff is another. So is judgment formation. So is capability development. So is deciding where an agent should act directly, where it should stop at a checkpoint, and where it should only recommend a human action.

Those are not separate interests. They are different views of the same operating problem: as AI systems become more capable, the hard work moves toward boundaries. Boundaries between human judgment and machine execution. Boundaries between personal knowledge systems and enterprise systems. Boundaries between drafting and approval, between exploration and action, between useful autonomy and irresponsible overreach.

That showed up in my own tooling as well. I clarified a multi-model operating pattern where Codex remains the main SecondBrain and planning layer, Claude is mainly used for reviews, GitHub Copilot is useful for implementation-heavy work, and M365 Copilot belongs inside my employers governed enterprise boundary. The interesting part is not that I am using several tools. Lots of people are doing that now. The interesting part is that the system only works if the handoffs are explicit and the boundaries are respected.

That also connects back to the governance work I did during the week. I updated our Governance and Lineage Strategy after a meeting, tightened the boundary between Databricks-native governance and wider enterprise discovery, and clarified how Silver-layer ownership, KPI definitions, documentation standards, and lineage should work in practice. Different domain, same pattern. Good systems need clear ownership, visible boundaries, and enough structure that responsibility does not get lost as work moves between layers.

## Looking ahead

Next week, the immediate job is probably less glamorous than the thinking. The white paper needs a proper home. Peer feedback needs to be read without either overreacting to it or defending the current draft too quickly. The housing migration infrastructure blocker still needs to turn into a usable access path. The governance and AI-tooling threads also need follow-through, especially around sanctioned AI execution lanes inside Codi.

Even so, this felt like one of the more coherent weeks since I started rebuilding the system. The useful output was not just a document, or a PDF, or a set of notes. It was a clearer sense of what kind of work I am trying to produce: practical frameworks for using AI in ways that preserve judgment, make accountability visible, and treat automation as an operating-design problem rather than a shortcut around it.

That is still a developing argument, but this week made it feel less like a scattered set of thoughts and more like a direction.
