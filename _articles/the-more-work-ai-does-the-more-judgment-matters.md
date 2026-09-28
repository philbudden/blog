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

AI can now produce more work than I can sensibly review. That sounds like a productivity breakthrough. Sometimes it is, but it can also be a trap.

The obvious measure of AI-assisted work is how quickly something appears, whether that's code or a polished document. The less obvious measure is how much human effort remains before anyone can understand it well enough to trust and use it. Once you count prompting and the work of getting the result into usable shape, along with responsibility for it, faster production doesn't always mean less work. In some cases, it creates more.

I think this explains a tension many people are starting to feel. AI tools are visibly more capable, yet using them well can still be surprisingly demanding. The models haven't necessarily failed; the bottleneck has moved. Execution is becoming cheaper, judgment isn't.

## Generation is only the middle of the job

One of the most useful models I've encountered recently is Arvind Narayanan and Sayash Kapoor's [decide–execute–deliver sandwich](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers).

Their argument is about software engineering, but it applies much more broadly. Most meaningful work has at least three parts:

1. Decide what should be done.
2. Execute the work.
3. Deliver something that operates reliably in the real world.

AI is compressing the middle layer much faster than the other two. It can produce code or prose and propose solutions at remarkable speed. But someone still has to decide which problem is worth solving and recognise when the proposed solution is wrong. Fitting it into a wider system, then accepting responsibility for the result, remains expensive.

This is why counting generated output tells us so little. A thousand lines of code may deliver a useful feature, but they may also add an unnecessary abstraction that takes hours to review. A polished strategy document may contain a good argument, or it may simply make weak assumptions harder to notice.

Cheap execution changes the economics of bad ideas. When implementation was slow, some weak ideas died naturally because nobody could justify the effort. When a plausible implementation can be generated in minutes, the cost of starting falls dramatically, but we still have to understand the result and decide whether it's worth maintaining. We can now create review debt faster than we used to create technical debt.

## Delegation has a real cost

Ethan Mollick describes this as a management problem in [*Management as AI Superpower*](https://www.oneusefulthing.org/p/management-as-ai-superpower). The practical question isn't simply whether an AI can perform a task. It's whether delegating the task is cheaper than doing it yourself once the full process is counted.

That process includes:

- explaining what you want;
- supplying the right context;
- waiting for the result;
- checking whether it's correct;
- correcting misunderstandings;
- retrying failed attempts; and
- taking responsibility for the final outcome.

For a bounded, repeatable task with an objective test, that equation can be very favourable. If I can describe the result clearly and verify it quickly, delegation works well. For an ambiguous task where success depends on unstated context or subtle judgment, the review can cost more than the execution saved.

I've found this in my own AI projects. My earlier CortXAI work began with an apparently straightforward goal: make local models more useful by routing difficult work through stronger frontier models. The orchestration was interesting, but reliable memory became the harder problem. A system could store information and still retrieve the wrong thing while preserving trivia instead of what mattered. It might even confidently invent context that was never there. Producing an answer was easy, but deciding whether the system knew what it claimed to know wasn't.

That experience changed how I think about AI capability. A better model helps, but dependable work also needs clear boundaries and a way to check whether the model has used the right context. You need to know what a finished result looks like. These aren't administrative extras around the intelligence; they're part of the system that makes the intelligence useful.

## The productivity paradox

The more capable the tool becomes, the easier it is to delegate badly. With a weak tool, failure is obvious. With a strong one, the result is often fluent and almost right. That's a more difficult failure mode because it transfers effort from creation into evaluation while making the transfer easy to miss.

This produces what I think of as an AI productivity paradox:

> The faster AI produces candidate work, the more disciplined humans must become about deciding which work deserves attention.

Without that discipline, organisations don't remove work. They multiply drafts and code changes, then push the verification cost onto whoever receives them. The individual generating the material feels faster; the team becomes slower.

This is especially visible in software, where an enormous AI-generated pull request can take far longer to review than it took to create. But the same pattern appears in ordinary knowledge work. A ten-page document generated in minutes still asks someone to check its evidence and reasoning, then judge whether the conclusions fit reality. If the author hasn't done that work, the burden hasn't vanished. It's merely moved downstream. That isn't delegation; it's uncertainty transfer.

## Better can be slower

Nolan Lawson makes the deliberately unfashionable case for [using AI to write better code more slowly](https://nolanlawson.com/2026/05/25/using-ai-to-write-better-code-more-slowly/). His workflow uses agents to find bugs and explore failure modes, followed by human validation and prioritisation.

The immediate effect isn't necessarily greater throughput. It may involve more investigation and time spent understanding the system. The value comes from improving the code and the developer's knowledge of it.

I think this points toward a better definition of AI productivity. The goal shouldn't be to minimise the time between request and output. It should be to improve the relationship between human attention and the quality of the delivered result.

Sometimes that means producing the same work faster. Sometimes it means using the same amount of time to produce better work. Sometimes it means discovering quickly that the work shouldn't be done at all. All three can be productivity gains.

This also protects against a deeper risk: using AI to avoid the thinking that gives us the ability to judge its output. If I routinely delegate the parts of a task through which I learn the domain, I may become faster in the short term while weakening the expertise I need to supervise the tool later.

## A practical delegation test

Before handing work to AI, I now find it useful to ask four questions.

### 1. Can I describe the outcome clearly?

If I can't explain what good looks like, the AI is being asked to resolve ambiguity on my behalf. That may be acceptable during exploration, but it shouldn't be confused with reliable execution.

### 2. Can I verify the result cheaply?

Tests make some results easy to verify. For other work, citations or a known example can give you something to check against. A task that takes ten minutes to generate and two hours to validate may still be worthwhile, but the two hours belong in the calculation.

### 3. What judgment must remain mine?

AI can help me see options I might otherwise miss and challenge my assumptions. It shouldn't silently decide what I believe or what risk I'm willing to accept. I have to be prepared to put my name to the result.

### 4. Where does the uncertainty go?

If I send the output to someone else without properly reviewing it, I haven't saved the verification effort. I've imposed it on them. Good AI use should reduce the total burden, not merely move it away from the person using the tool.

These questions are simple, but they change the focus from capability to responsibility. “Can the AI do this?” becomes “Can this human-and-AI system deliver this well?” That's a much higher standard.

## Spend the saved time on judgment

I don't think this is an argument for using AI less. It's an argument for being more deliberate about what we expect it to improve.

As execution becomes cheaper, we should spend more time understanding the problem and checking the evidence. That includes exploring failure modes and talking to the people affected before deciding whether the result is genuinely useful.

The best outcome isn't that AI lets us stop thinking; it's that AI gives us more capacity to think where thought matters most.

That may look slower than generating as much as possible. It may involve fewer documents or smaller code changes, with more time spent reviewing assumptions. But if the result is dependable and other people can understand why they should trust it, then it isn't a failure of productivity; it's the point.
