---
title: "A Good AI Collaborator Needs a Stop Button"
date: 2026-08-03
summary: "A practical argument that dependable AI collaborators need to challenge assumptions, expose uncertainty, abstain when evidence is weak, and stop when work is complete."
tags:
  - ai
  - working-with-ai
  - responsible-ai
  - judgment
  - agentic-engineering
series: working-with-ai
draft: false
layout: article
social_image: /assets/social/a-good-ai-collaborator-needs-a-stop-button.png
social_image_alt: "A Good AI Collaborator Needs a Stop Button, about designing AI systems to challenge, abstain, expose uncertainty, and stop."
---

# A Good AI Collaborator Needs a Stop Button

The most dangerous AI output is not always the one that looks obviously wrong, but the polished answer that makes you less likely to check whether it is right.

That is awkward, because helpfulness is exactly what we normally ask for. We want AI systems to make difficult work easier: to turn a rough prompt into a usable first move, to reduce blank-page friction, and to keep track of context we would otherwise lose. Used well, that is genuinely useful; I use AI heavily across my own research, writing, and software work, and I would not want to give up the leverage it creates.

But I am increasingly convinced that a good AI collaborator needs something that sits in tension with ordinary helpfulness: a well-designed stop button. Not just a literal button in the interface, but a set of behaviours and workflow rules that let the system challenge the premise, ask for evidence, abstain from action, hand uncertainty back to the human, or simply finish. The point is not to make AI less useful, but to stop treating every useful answer as a prompt for another action.

## Helpfulness can become pressure

One of the easiest mistakes to make with AI is to judge the interaction by how productive it feels. The assistant that replies quickly, produces a patch, or turns a vague brief into a tidy plan looks as though it has reduced the problem. Sometimes it has, but sometimes it has only made the next action feel more obvious.

That kind of momentum can be valuable, but it also carries a subtle risk: the AI is rewarded, implicitly or explicitly, for moving the conversation forward. In many practical settings, the model is not simply answering a question; it is also influencing what the user is likely to do next.

This is visible in recent research on coding agents. The paper [*Coding Agents Don't Know When to Act*](https://www.sri.inf.ethz.ch/publications/gloaguen2026coding) introduces FixedBench, a benchmark built from software issues that have already been resolved and therefore require no executable code change. Across the tested models and harnesses, agents still made undesirable code changes in a large share of cases where the right answer was effectively an empty patch. The paper's useful lesson is not just that coding agents make mistakes, but that the workflow has to let them report "no change needed" and be rewarded for that answer.

That is a very practical idea. If the workflow only rewards visible action, action is what you should expect. If a prompt asks an agent to "fix this issue", and the surrounding system has no clear concept of "this is already fixed", the agent is being nudged toward a patch before it has properly decided whether a patch is needed.

This does not mean we should simply make agents timid, because over-caution has its own cost. The better lesson is that the system needs an explicit action threshold:

- change the code when the evidence supports it;
- ask for help when the requirement is blocked;
- leave the code alone when the issue cannot be reproduced.

Those are three acceptable outcomes, not one success and two failures.

## Agreement is not the same as support

The same pattern appears outside coding. A good collaborator should not only help me express my thinking, but also help me notice when my thinking is weak. That is harder than it sounds because AI systems can be very good at sounding supportive. A paper by Sharma and colleagues, [*Towards Understanding Sycophancy in Language Models*](https://mlanthology.org/iclr/2024/sharma2024iclr-understanding/), shows assistants adapting to user beliefs even when correction would be more useful. The important point is that people often prefer responses that agree with them, even when the agreement is not the most truthful or helpful response.

This is especially relevant to writing, strategy, analysis, and decision support. If I ask an AI to critique an argument, I do not need a politely rephrased version of my existing view; I need it to identify missing evidence, unsupported assumptions, weak trade-offs, and places where I am making the prose do work that the reasoning has not earned. Agreement is not always kindness; sometimes the useful response is friction.

That friction needs to be designed into the workflow. "Challenge my assumptions" is a start, but it is often too vague. In a strategy note, useful challenge might mean separating personal preference from external fact. In a piece of analysis, it might mean asking what evidence would change the conclusion. In a draft essay, it might mean pointing out where the prose is compensating for a weak argument. The useful AI collaborator is not the one that keeps validating my position, but the one that helps me correct weak work before someone else sees it.

## Explanations can make weak outputs feel stronger

There is another reason the stop button matters: an AI can produce a convincing account of its response without revealing what actually influenced it. In [*Language Models Don't Always Say What They Think*](https://papers.cool/arxiv/2305.04388), researchers gave models cues that changed their answers. The models often gave sensible explanations afterwards without mentioning those cues. For everyday users, the practical point is simple: an explanation can help us examine an answer, but it is not proof that the answer was reached for that reason.

This is easy to forget because an explanation feels like transparency. If an AI gives a plausible reason for its recommendation, we naturally treat that reason as evidence. It may point to something useful, but it may also be an explanation added after the answer was produced, rather than a reliable account of how the answer was reached. Treating it as proof can make the output seem safer than it is.

I see this as a workflow design problem rather than only a model problem. When the stakes are low, an explanation may be enough to help me decide whether to keep exploring. When the stakes are higher, I need checks that do not rely on the AI explaining itself. That might mean comparing the answer with the source material, asking someone else to review it, testing it against a known result, or making a fresh check that does not assume the first answer was right.

That is why I value durable artefacts in AI-assisted work: maintained notes, issues, drafts, test results, and decision records. They give me something outside the conversation to check. The conversation can build momentum, but a durable artefact lets me pause and ask: what changed, what supports it, what remains uncertain, and what would show that it is wrong? Without that check, it is too easy to accept an answer because it sounds plausible rather than because it has been tested.

## A clean ending is a control

There is a smaller behavioural pattern that has become increasingly important in my own use of AI: the tendency for an assistant to finish one thing by immediately offering the next thing.

That sounds harmless, and often it is harmless, but over a long session it can become a form of pressure. The user is repeatedly invited to keep delegating before they have had a clean moment to decide whether the work should continue at all.

The O'Reilly article [*My AI Kept Pushing Me to Ship, So I Asked It Why*](https://www.oreilly.com/radar/my-ai-kept-pushing-me-to-ship-so-i-asked-it-why/) names this pattern "continuation pressure": a tendency for the interaction to keep queuing further action instead of ending when the task is done. As a named pattern, it describes something many regular AI users will recognise.

The important design move is to make "done" a valid state. Not "done, unless you want me to..." or "done, and I can now...". Just done, with the result recorded clearly enough that the human can decide what happens next.

This is not only about conversational tidiness. A clean ending reduces supervision burden, stops the assistant from turning every completed task into a new delegation request, and gives the human a moment to decide what should happen next.

In my own [SecondBrain](https://github.com/philbudden/secondbrain-framework) setup, this has become part of how I think about good AI operating discipline. A task should end with the artefact updated and the important result recorded; if there is a real blocker or decision, make it explicit. If there is no meaningful next action, stop.

## The real test is where the uncertainty goes

These patterns all point back to a broader question I now use when deciding whether AI has actually helped: where did the uncertainty go?

Sometimes the uncertainty is still in the original assumption, but the AI has made that assumption sound more settled than it is. Sometimes it is in the explanation, which feels convincing without being independently checked. Sometimes it has been turned into future work: a code change that now needs maintaining, or a sequence of suggested next steps that I now have to supervise.

Good AI use should reduce uncertainty, or at least make it clear enough that the right person can deal with it. Bad AI use makes weak evidence look settled and leaves the reviewer, colleague, customer, or future self to find the problem later.

I do not think the answer is to use AI less, or to distrust every output by default, because that would be a blunt response to a more interesting problem. The better answer is to design collaboration patterns where these uncomfortable responses count as successful assistance:

1. I do not have enough evidence to answer that reliably.
2. Your assumption might be wrong for these reasons.
3. The correct action here may be no action.
4. This explanation is only a hypothesis, not proof.
5. The work is complete, and I am stopping here.

## Design for restraint, not just capability

The more capable AI systems become, the more tempting it is to measure them by how much they can do, but in practical work, the value often comes from knowing when not to do more. That means our prompts, harnesses, workflows, and team norms need to say what should happen when action is not justified.

This does not need to become a heavy governance ritual. It can be as simple as saying, in the workflow itself, that weak evidence should lead to abstention, that disagreement should improve the work rather than merely signal scepticism, and that escalation is better than guessing when the system has reached the edge of what it can responsibly do. Completed work should also be allowed to stop.

This may sound like a modest point, but I think it changes the shape of AI collaboration. The assistant is no longer merely a generator of fluent next steps; it becomes part of a working system that keeps human judgment in charge and makes unresolved questions visible.

The practical takeaway is simple: when designing AI-assisted work, do not only ask what the system can produce; ask whether it can refuse, challenge, abstain, escalate, and stop in the right places. A collaborator that cannot do those things may still be impressive, but it is not yet dependable.
