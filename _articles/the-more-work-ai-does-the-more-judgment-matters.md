---
title: "The More Work AI Does, the More Judgment Matters"
date: 2026-07-07
summary: "A practical argument that as AI makes execution cheaper, human judgment around specification, evaluation, and accountability becomes the scarcer determinant of real productivity."
tags:
  - ai
  - working-with-ai
  - delegation
  - judgment
  - productivity
series: working-with-ai
draft: false
layout: article
---

# The More Work AI Does, the More Judgment Matters

AI can now produce more work than I can sensibly review. That sounds like a productivity breakthrough. Sometimes it is but It can also be a trap.

The obvious measure of AI-assisted work is how quickly something appears: code, research, a project plan, a strategy, or a polished document. The less obvious measure is how much human effort remains before that output can be understood, trusted, and used. Once prompting, checking, correction, integration, and accountability are included, faster production does not always mean less work, in some cases, it creates more.

I think this explains a tension many people are starting to feel. AI tools are visibly more capable, yet using them well can still be surprisingly demanding. The models have not necessarily failed, rather the bottleneck has moved. Execution is becoming cheaper, judgment is not.

## Generation is only the middle of the job

One of the most useful models I have encountered recently is Arvind Narayanan and Sayash Kapoor's [decide–execute–deliver sandwich](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers).

Their argument is about software engineering, but it applies much more broadly. Most meaningful work has at least three parts:

1. Decide what should be done.
2. Execute the work.
3. Deliver something that operates reliably in the real world.

AI is compressing the middle layer much faster than the other two. It can generate code, prose, analysis, diagrams, and possible solutions at remarkable speed. But deciding which problem is worth solving, recognising when the proposed solution is wrong, fitting it into a wider system, and accepting responsibility for the result remain expensive.

This is why counting generated output tells us so little. A thousand lines of code may represent a useful feature, an unnecessary abstraction, or a large review burden disguised as progress. A polished strategy document may contain a good argument, or it may simply make weak assumptions harder to notice.

That distinction matters because cheap execution changes the economics of bad ideas. When implementation was slow, some weak ideas died naturally because nobody could justify the effort. When a plausible implementation can be generated in minutes, the cost of starting falls dramatically, but the cost of understanding, evaluating, and maintaining the result does not disappear. We can now create review debt faster than we used to create technical debt.

## Delegation has a real cost

Ethan Mollick describes this as a management problem in [*Management as AI Superpower*](https://www.oneusefulthing.org/p/management-as-ai-superpower). The practical question is not simply whether an AI can perform a task. It is whether delegating the task is cheaper than doing it yourself once the full process is counted.

That process includes:

- explaining what you want;
- supplying the right context;
- waiting for the result;
- checking whether it is correct;
- correcting misunderstandings;
- retrying failed attempts; and
- taking responsibility for the final outcome.

For a bounded, repeatable task with an objective test, that equation can be very favourable. If I can describe the result clearly and verify it quickly, delegation works well. For an ambiguous task where success depends on unstated context or subtle judgment, the review can cost more than the execution saved.

I have found this in my own AI projects. My earlier CortXAI work began with an apparently straightforward goal: make local models more useful by routing difficult work through stronger frontier models. The orchestration was interesting, but reliable memory became the harder problem. A system could store information and still retrieve the wrong thing, preserve trivia, miss something important, or confidently invent context that was never there. Producing an answer was easy, but deciding whether the system knew what it claimed to know was not.

That experience changed how I think about AI capability. A better model helps, but dependable work also needs boundaries, context, verification, and a clear definition of done. These are not administrative extras around the intelligence. They are part of the system that makes the intelligence useful.

## The productivity paradox

The more capable the tool becomes, the easier it is to delegate badly. With a weak tool, failure is obvious. With a strong one, the result is often fluent, plausible, and almost right. That is a more difficult failure mode because it transfers effort from creation into evaluation while making the transfer easy to miss.

This produces what I think of as an AI productivity paradox:

> The faster AI produces candidate work, the more disciplined humans must become about deciding which work deserves attention.

Without that discipline, organisations do not remove work. They multiply drafts, code changes, analyses, plans, and proposals, then push the verification cost onto whoever receives them. The individual generating the material feels faster; the team becomes slower.

This is especially visible in software, where an enormous AI-generated pull request can take far longer to review than it took to create. But the same pattern appears in ordinary knowledge work. A ten-page document generated in minutes still asks someone to check its evidence, reasoning, implications, and fit with reality. If the author has not done that work, the burden has not vanished. It has merely moved downstream. That is not delegation, it is uncertainty transfer.

## Better can be slower

Nolan Lawson makes the deliberately unfashionable case for [using AI to write better code more slowly](https://nolanlawson.com/2026/05/25/using-ai-to-write-better-code-more-slowly/). His workflow uses agents to find bugs and explore failure modes, followed by human validation and prioritisation.

The immediate effect is not necessarily greater throughput. It may involve more investigation, more questions, and more time spent understanding the system. The value comes from improving the code and the developer's knowledge of it.

I think this points toward a better definition of AI productivity. The goal should not be to minimise the time between request and output. It should be to improve the relationship between human attention and the quality of the delivered result.

Sometimes that means producing the same work faster. Sometimes it means using the same amount of time to produce better work. Sometimes it means discovering quickly that the work should not be done at all. All three can be productivity gains.

This also protects against a deeper risk: using AI to avoid the thinking that gives us the ability to judge its output. If I routinely delegate the parts of a task through which I learn the domain, I may become faster in the short term while weakening the expertise I need to supervise the tool later.

## A practical delegation test

Before handing work to AI, I now find it useful to ask four questions.

### 1. Can I describe the outcome clearly?

If I cannot explain what good looks like, the AI is being asked to resolve ambiguity on my behalf. That may be acceptable during exploration, but it should not be confused with reliable execution.

### 2. Can I verify the result cheaply?

Tests, schemas, reconciliations, checklists, citations, and comparison against a known example all reduce evaluation cost. A task that takes ten minutes to generate and two hours to validate may still be worthwhile, but the two hours belong in the calculation.

### 3. What judgment must remain mine?

AI can surface options, challenge assumptions, and expose missing information. It should not silently decide what I believe, which risk I am willing to accept, or what I am prepared to put my name against.

### 4. Where does the uncertainty go?

If I send the output to a colleague, customer, or reader without properly reviewing it, I have not saved the verification effort. I have imposed it on them. Good AI use should reduce the total burden, not merely move it away from the person using the tool.

These questions are simple, but they change the focus from capability to responsibility. “Can the AI do this?” becomes “Can this human-and-AI system deliver this well?”, that is a much higher standard.

## Spend the saved time on judgment

I do not think this is an argument for using AI less. It is an argument for being more deliberate about what we expect it to improve.

As execution becomes cheaper, we should invest the saved time in the parts of work that remain scarce: understanding the problem, checking evidence, exploring failure modes, talking to the people affected, and deciding whether the result is genuinely useful.

The best outcome is not that AI lets us stop thinking, it is that AI gives us more capacity to think where thought matters most.

That may look slower than generating as much as possible. It may involve fewer documents, smaller code changes, and more time spent reviewing assumptions. But if the result is better understood, more dependable, and easier for other people to trust, then it is not a failure of productivity, it is the point.
