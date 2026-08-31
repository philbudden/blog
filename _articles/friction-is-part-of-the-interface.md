---
title: "Friction Is Part of the Interface"
date: 2026-08-31
summary: "A practical essay on why good AI systems should remove wasteful effort while preserving the friction that keeps human attention, learning, challenge, and judgement engaged."
tags:
  - ai
  - working-with-ai
  - judgment
  - productivity
series: working-with-ai
draft: false
layout: article
social_image: /assets/social/friction-is-part-of-the-interface.png
social_image_alt: "Friction Is Part of the Interface, about preserving useful friction in AI-assisted work."
---

# Friction Is Part of the Interface

So much of our work consists of messy friction: copying between systems, rewriting the same paragraph for the fifth time, hunting for the right document, or turning scattered notes into a usable first draft. AI systems that automate that friction out of the workflow can feel very attractive: give it a messy request, watch the plan appear, accept the recommendation, move on

A lot of friction deserves to become obsolete, but some friction is not waste, it is the effort through which we notice a weak assumption, learn the shape of a problem, or challenge a recommendation. If an AI system removes that effort indiscriminately, it can make the work feel smoother, yet make the combined human-and-AI system output worse.

The question then, is not whether AI should reduce effort, it should, but what effort we are reducing, and what replaces it?

## Better AI can make people pay less attention

Fabrizio Dell'Acqua's paper, [*Falling Asleep at the Wheel*](https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838). describes a field experiment: professional recruiters evaluated resumes with different qualities of AI assistance. It found that recruiters given lower-quality AI output spent more time on review, challenged the tool more, followed it less automatically, and ended up more accurate than those given higher-quality AI output.

It would be a strange lesson to take from the study that worse AI is generally better, but we can infer that model quality and human contribution do not automatically add together. If better AI makes the human stop inspecting the work, the system can lose the judgement the human was meant to bring.

Many AI adoption plans still assume a simple direction of travel: improve the model, improve the workflow. In some tasks that will be true, especially where success is objectively checkable and the human role is mostly administrative. But in work that depends on experience, local context, ethics, taste, service judgement, or tacit knowledge, the interface has to keep the human awake in the places where their contribution changes the answer.

A confident recommendation, a neat explanation, and a green tick can all reduce the perceived need to think. The design question becomes less "how do we make this as smooth as possible?" and more "where does the person still need to engage?"

## Supervision is work

Automation often moves people from producing work into supervising and evaluating it, as the paper on the [ironies of generative AI](https://arxiv.org/abs/2402.11364) argues. That can be useful, but the human still has to reconstruct context, inspect outputs, recover from interruptions, and decide whether a plausible result is actually safe to use.

Some AI workflows feel strangely tiring even when the tool is doing more of the visible labour. You are no longer writing every line, but you are trying to keep enough of the work in your head to catch what matters. You are no longer producing the first version, but you are checking a version that arrived without the slow experience of making it yourself. This is the same review-debt problem I wrote about in [*The More Work AI Does, the More Judgment Matters*](https://philipbudden.co.uk/posts/the-more-work-ai-does-the-more-judgment-matters/): when execution gets cheaper, judgement and verification become more important, not less.

When the task is bounded and checkable, the leverage is obvious: if an agent can update a file, run the tests, report exactly what changed, and stop, that is good delegation. The pattern changes when the output is a strategy, an architectural direction, or a piece of writing that is meant to express my own view. A polished draft can be helpful, but it can also arrive too early. If the model has made the argument before I have formed the judgement, I have not saved thought; I have created the job of reverse-engineering whether the thought is mine.

That is not a reason to avoid AI-assisted writing or thinking; I openly use AI for both. In [*Writing with AI*](https://www.oreilly.com/radar/writing-with-ai/), Tim O'Reilly describes AI-assisted writing as more like pedal-assist than no-pedal work. The point is that the help is healthiest when it rewards concentrated human effort rather than replacing it. In practice, that means asking for evidence, challenge, structure, counterargument, reader simulation, and critique before asking for a finished answer.

## The right friction depends on the task

In [*Choosing to Stay Human*](https://www.oneusefulthing.org/p/choosing-to-stay-human), Ethan Mollick argues that not every cognitive task should remain human. We already outsource memory, arithmetic, routing, spelling, scheduling, and plenty of other useful work to tools. However AI can offer to take over almost any cognitive task, including the ones where the effort is part of learning, judgement, or meaning. That means we need more specific design choices than "use AI" or "do not use AI".

For example, a student learning a new concept may benefit from an AI tutor that asks questions and sequences practice, not an assistant that gives the final answer; Or a recruiter may need uncertainty cues and reasons to inspect edge cases, not a recommendation that becomes easier to rubber-stamp as it gets more accurate. The point is not to make every workflow harder, but to put difficulty in where it has value.

For routine work, good AI should remove friction aggressively, nobody becomes wiser by manually reformatting a table for the eighth time. However for learning work, it should preserve enough struggle for the human to build capability. In decision work for example, it should surface the evidence and uncertainty in a form the person can actually use, and in  high-consequence work, it should make challenge, escalation, and dissent easy.

## The next interface problem is attention

The same question is starting to appear in the technical architecture around agents. Dan McAteer's [article on agent harnesses](https://www.latent.space/p/attention-interface) argues that as models absorb more of the old harness work around tool use, memory, compaction, and environment operation, the remaining system problem becomes more human-facing: permissions, identity, trust, legibility, interruption, approval, escalation, and correction capture.

The more agents can do quietly in the background, the more important it becomes to decide when they should interrupt us, what they should bring when they do, and how much attention they are allowed to spend.

This is already visible in everyday AI work, too many approval prompts become noise; too few let risk accumulate. If escalation arrives without evidence, the human has to reconstruct the case from scratch, and if corrections are forgotten, the same attention cost comes back next time. The deeper design is the policy around human attention:

- when the system should continue alone;
- when it should stop and ask;
- what evidence it must show;
- how the human can disagree quickly;
- what happens to corrections afterwards.

## We need a better question than "is it frictionless?"

"Frictionless" may be too blunt a measure; A better workflow might deliberately slow one step down so that the whole system becomes easier to trust. Before removing a point of effort from an AI-assisted process, I would ask three questions:

1. Is this effort waste, or is it doing cognitive work? If the person is copying values between fields, remove it. If they are comparing evidence, noticing ambiguity, or forming a view they will need to defend later, be more careful.
2. What signal replaces the effort? A reviewer who no longer reads every detail may need better exception design, uncertainty cues, source links, sampled audits, or a route to inspect the underlying material quickly. Removing manual work without replacing its signal can leave the process looking efficient while making it less legible.
3. Who pays when the effort disappears? If the user saves ten minutes but a colleague, customer, resident, reader, or future maintainer has to absorb the uncertainty later, the saving is not as clean as it looks.

Take a casework tool that drafts a recommendation about whether someone should receive extra support. Auto-filling dates, addresses, and standard eligibility checks is probably removing waste, a mandatory review screen before the recommendation is sent is not. It may look like friction, but it could be doing cognitive work if the decision depends on recent contact notes, conflicting evidence, or local judgement that the model cannot own. The right replacement signal might not be a long explanation every time; it might be a short evidence panel, a clear uncertainty flag, and a requirement to inspect the source record before accepting a high-impact recommendation. If that step disappears and the next person has to work out why the decision was made, the system has made the first user's route smoother by making the later review weaker.

## Keep the effort that keeps you capable

The future of AI-assisted work should be deliberately awkward, done well, AI can remove low-value effort, widen access to useful tools, help people express ideas, prepare evidence, and let scarce human attention move toward harder problems. However, scarce human attention does not automatically move toward harder problems just because a model produced something quickly. It may disappear into review debt, relax too early, get spent reconstructing context the system should have preserved, or be pushed downstream to someone else.

Good AI design should therefore protect the effort that keeps people capable. People still need to understand the work they are judging, check the evidence they are relying on, learn from the parts of the task that build expertise, and make the decisions they will remain accountable for, everything else is a candidate for automation.

---

_Generative AI is a powerful tool. I openly use it to conduct research, challenge my thinking, generate drafts, and review my work. AI never owns what I think, or my personal judgement. Everything I publish is a reflection of my own thoughts and opinions._
