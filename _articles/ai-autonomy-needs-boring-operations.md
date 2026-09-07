---
title: "AI Autonomy Needs Boring Operations"
date: 2026-09-07
summary: "A practical essay on why dependable AI autonomy needs explicit operating controls for authority, release, evidence, recovery, identity, and ownership."
tags:
  - ai
  - working-with-ai
  - governance
  - accountability
  - operations
series: working-with-ai
draft: false
layout: article
social_image: /assets/social/ai-autonomy-needs-boring-operations.png
social_image_alt: "AI Autonomy Needs Boring Operations, about making AI autonomy dependable through practical operating controls."
---

# AI Autonomy Needs Boring Operations

In a demo, an AI agent can take a task, work through it, and come back with something finished. A production system, however, needs to know who is allowed to approve a live change and what evidence has to be kept.

Instead of asking: "can my agent do this?", ask yourself: "what is the consequence if my agent does the wrong thing, and how easily can it be detected and reversed?" Those operational questions are important. Autonomy becomes safer when the boring parts are designed into the system rather than treated as paperwork around it.

## The agent isn't the operating model

A model can be clever, yet the system around it can be badly designed. It might have too much access and too little context, or no clear stopping rule. Even something as basic as deciding whether the work is finished can be unreliable. If nobody can explain what happened without replaying the whole chat, capability can make the problem worse: the agent can act quickly and the mistake may only become visible later.

If a person is allowed to make changes to a live service, we usually care about their role and permissions. We also put controls around approval, audit and rollback. Those concerns don't disappear because an AI agent is acting on the system or preparing the release.

## Autonomy has a blast radius

For low-consequence knowledge work, a lightweight workflow may be enough. An agent can read a set of notes, produce a draft, and put the result in front of a human. Review before publication provides the main control, while the draft and its sources provide evidence of the work. If the output is poor, the cost is mostly wasted time and editorial cleanup.

That's very different from an agent that can change infrastructure or update a system of record. It might even be able to send messages to residents or merge code into production. At that point, the operating model has to change with the blast radius. A higher-risk agent needs somewhere safe to work and a specific approval point before live change. If the change is wrong, there also needs to be a way back.

As I wrote about recently in [A Human in the Loop Needs a Job](https://philipbudden.co.uk/posts/a-human-in-the-loop-needs-a-job/), it isn't enough to say there's a human somewhere in the loop if the human doesn't have a real decision, usable evidence, and authority to stop the change.

## Identity is part of the design

In [I let an AI run my systems](https://livewiresolutions.com/how-we-run-on-ai.html), Bryan White gives a first-person account of his experience with AI running systems he's responsible for. The agent can work in a sandbox and prepare changes, but live release requires the human to approve the exact artefact with a signing key the agent doesn't hold. The signing key in White's setup is an identity decision: the agent can prepare the release, but it can't become the person who approves it.

If an agent calls a tool, which identity is acting? It could be using a person's standing credentials, a shared service account or a short-lived scoped token. More worryingly, it could be using something no one has inventoried properly. Whatever the mechanism, someone needs to own that identity and understand the authority it carries. That includes what the agent can read or change, but also whether it can trigger other processes, publish, delete, spend or exfiltrate. The identity needs an end as well as a beginning.

These questions become sharper when agents are assembled from connectors and MCP servers alongside local configuration, shell commands and browser sessions. Long-running background jobs add another route through which authority can persist. A useful starting point is simply to establish what exists and who owns it, then understand what each identity can reach. You should also know when it ought to die. That's not an advanced maturity model, it's a minimum operating requirement when useful work is increasingly done by things that aren't people, but still act with real authority.

## Factories still need gates

In software work, "AI writes code" can now widen to "AI participates in the delivery loop". In Paul Iusztin's article [Inside a Software Factory](https://www.oreilly.com/radar/inside-a-software-factory/), he writes about his experience building his own software factory. He tried to make the workflow too end-to-end. When it went off-script, the result was hard to halt and even harder to debug or redirect. The fix was a more granular system where the team could run each stage as a separate command before trusting the chain as a whole.

This suggests a useful test: can the system pause at the boundary where the next action has a different consequence? A planning agent can be wrong in one way; a release agent can be wrong in another. Treating those stages as one smooth run may feel more autonomous, but it also makes the failure harder to locate.

Engineering systems become dependable by letting smaller stages prove themselves before the whole chain is treated as a single autonomous route. That means understanding how each stage fails and how it recovers, with enough evidence to know whether it worked.

## Boring controls are how trust becomes usable

There's a temptation to make AI trust sound like a property of the model. Does it hallucinate less? Perhaps it reasons better or follows instructions more reliably. Those things matter for delegated work, but they don't tell us what authority the agent should have or what happens when something goes wrong.

Usable trust is partly an operating condition. You need to know what authority the agent has and be able to see enough evidence to check its work. Its blast radius should reflect the risk of the task. Ultimately, a person or team still needs to answer for the result. A better model may reduce the number of mistakes, but it doesn't remove the need to decide what happens when mistakes remain.

I'm wary of measuring agent progress by how much human involvement has been removed. In many workflows, the better question is whether it's moved to the right place. A person checking every token of an AI draft is probably a poor use of attention. Approving the exact release artefact could be a much better one. In another system, human judgement might belong in the review of an exception report or at the point where a resident-impacting workflow is allowed to proceed.

The point of operations isn't to slow everything down, it's to make faster work governable. Low-risk work should be able to pass with less ceremony, higher-risk work needs stronger evidence, while failures need to be visible enough that the system can improve.

Before giving an agent more autonomy, ask a few plain questions:

- What can it read, change, trigger, publish, or spend?
- Which identity is it using, and who owns that identity?
- What happens in a sandbox, and what can reach production?
- What exact evidence does a human see before approval?
- How do we reverse the change if the agent is wrong?
- Which near misses are captured and turned into better controls?

AI autonomy becomes dependable when the surrounding system assumes the agent can be useful and still wrong. The job of the operating model is to make sure its authority is understood, the evidence is available and mistakes can be recovered from. Someone must also remain clearly responsible for the outcome.

---

_Generative AI is a powerful tool. I openly use it to conduct research, challenge my thinking, generate drafts, and review my work. AI never owns what I think, or my personal judgement. Everything I publish is a reflection of my own thoughts and opinions._
