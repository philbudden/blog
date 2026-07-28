---
title: "Interview Question: What do you believe about the future role of data engineers in an AI-assisted organisation?"
date: 2026-07-28
summary: "An interview-style essay arguing that AI makes data engineers more important by shifting the role toward trusted data foundations, orchestration, validation, architecture, and stewardship."
tags:
  - ai
  - data-engineering
  - interview-questions
  - software-engineering
  - operating-model
  - working-with-ai
series: interview-questions
draft: false
layout: article
---

# What do you believe about the future role of data engineers in an AI-assisted organisation?

*AI makes Data Engineers more important, not less.*

Over the past few weeks I’ve been asking ChatGPT to generate a series of interview-style questions designed to make me think more deeply about topics I care about. The exercise was intended as self-reflection, but I found that many of my answers naturally evolved into short essays. Rather than leave them buried in my notes, I’ve decided to publish them as well.

## The Question:

What do you believe about the future role of data engineers in an AI-assisted organisation?

## My answer:

I actually think AI makes Data Engineers more important, not less. That may sound counterintuitive given how much code generative AI can now produce, but I think it reflects a misunderstanding of what Data Engineering has always been about.

Writing code has never really been the job. It has simply been the mechanism through which the job was carried out.

At its core, Data Engineering is about creating trusted, reliable data that organisations can use to make decisions. As organisations become increasingly AI-assisted, that responsibility only grows in importance. Poor quality data does not simply produce poor dashboards. It produces poor decisions at machine speed. If AI becomes embedded across an organisation, then the pipelines responsible for cleaning, validating, deduplicating, enriching, and governing data become critical infrastructure.

In that sense, the rise of AI actually increases the strategic importance of Data Engineering rather than diminishing it.

## The underlying disciplines are not going away

It is also worth remembering that AI is not entirely new to this profession.

Data Engineers have been building platforms for machine learning and advanced analytics for years. Many of the disciplines that already mattered still matter now: data quality, feature engineering, governance, reproducibility, lineage, scalability, observability, and reliable pipelines. Generative AI changes some of the interfaces and raises the stakes, but it does not repeal the engineering fundamentals.

The technologies evolve. The underlying principles mostly do not, and that matters because a lot of current discussion treats AI-assisted software development as if it somehow dissolves the need for deep engineering understanding. I think the opposite is closer to the truth.

## Code generation changes the shape of the work

Where I do think the profession is changing dramatically is in the nature of the day-to-day work.

Generative AI has become remarkably capable at writing code. It can already generate SQL, Python, Spark notebooks, infrastructure-as-code, unit tests, integration tests, CI/CD scaffolding, and a reasonable first pass of documentation. It can review code, identify technical debt, suggest refactoring opportunities, and remove a significant amount of the manual implementation effort that used to occupy a large share of an engineer's day. I expect those capabilities to keep improving.

That does not make Data Engineering less important. It changes which parts of the role consume the most time and where the highest-value judgment sits.

Historically, a lot of engineering time has been spent translating intent into code by hand. AI increasingly compresses that implementation phase. The result is not that engineering disappears. The result is that more of the role moves upward into architecture, decomposition, review, validation, and decision-making.

## Vibe coding is not the same thing as engineering

One of the misconceptions I worry about most is the idea that because AI can generate code, software engineering knowledge is becoming optional. I do not believe that at all. There is a significant difference between what people often call vibe coding vs. agentic engineering.

Vibe coding can work surprisingly well when the stakes are low, the problem is already well understood, and failure has limited consequences. It lets people produce software they might previously never have been able to build. Professional engineering is something else.

Engineering is not primarily about writing syntax. It is about understanding systems, identifying constraints, anticipating failure modes, making architectural trade-offs, and ensuring that the resulting solution is reliable, maintainable, secure, and appropriate to the problem being solved.

That distinction becomes even more important when AI is involved, not less. I have already seen junior engineers struggle when they try to "vibe" their way through complex engineering work. The AI faithfully produces code, but the engineer lacks the experience to recognise when it is solving the wrong problem, introducing unnecessary complexity, or quietly making incorrect assumptions.

If the engineer does not understand the problem, they cannot expect the AI to solve it well. Prompt quality is ultimately a reflection of problem understanding.

The better an engineer understands the domain, the architecture, the constraints, and the desired outcome, the better they can direct AI towards something genuinely useful. AI does not eliminate the need for expertise, it amplifies it.

## Data Engineers become orchestrators, reviewers, and stewards

Because of that, I do not think the core competencies of Data Engineers change very much at all. They still need to understand distributed data processing, modelling, platform architecture, governance, testing, observability, security, performance, and operational systems. They still need to understand why a solution is correct rather than merely whether it compiles.

What changes is how those skills are applied. Increasingly, I think Data Engineers become orchestrators rather than manual implementers. Instead of writing every line of code themselves, they define system boundaries, break larger problems into well-scoped tasks, provide the right context to AI agents, review outputs, validate assumptions, challenge proposed solutions, and ensure the final implementation aligns with the wider architecture and governance model.

Prompt engineering, context engineering, and agent orchestration become genuine engineering skills in that world, not shortcuts around engineering. They only work well when grounded in technical understanding.

## Validation becomes more valuable than typing speed

I also think validation becomes significantly more important. As AI generates a larger proportion of implementation work, engineers spend less time asking, "How do I write this?" and more time asking, "Is this actually correct?"

That is not a trivial shift. Reviewing generated code, validating automated tests, checking governance requirements, understanding operational consequences, and spotting architectural weaknesses all become more valuable. The keyboard gradually becomes less important. Engineering judgment becomes more important than ever. In practice, I think this pushes Data Engineering further up the value chain.

If implementation becomes cheaper and faster, then a greater share of the role moves toward platform evolution, data product design, stakeholder engagement, architectural coherence, and understanding the organisational problems the platform is supposed to solve. That is probably a healthier use of experienced engineers anyway.

## AI raises the cost of getting data engineering wrong

Another reason I think Data Engineers become more important is that AI increases the consequences of weak foundations.

Bad data has always been a problem, but AI magnifies the problem in a very particular way. With traditional reporting, poor data may result in misleading dashboards, confused meetings, or flawed analysis. With AI-assisted workflows, poor data can drive low-quality summaries, weak recommendations, inconsistent automation, and confidently wrong outputs at much greater speed and scale.

That means the engineering disciplines that create trustworthy data become even more strategically important. Clean pipelines, good lineage, clear ownership, governed access, strong semantic layers, and reliable platform behaviour all become prerequisites for safe AI adoption.

In other words, the more an organisation wants to rely on AI, the more it needs serious data engineering.

## The future role is more strategic, not less technical

Ultimately, I think the Data Engineer of the future still needs deep technical expertise, but spends less time acting purely as a programmer and more time acting as an architect, reviewer, orchestrator, and steward of organisational data.

Ironically, the better AI becomes at writing code, the more valuable genuinely experienced engineers become. Not because they can out-type the models in Python or SQL, but because they understand the systems those models are trying to build, recognise when something is wrong, and know how to direct both humans and AI towards better solutions.

That is why I do not see AI as a threat to Data Engineering as a discipline. I see it as a force that sharpens what the profession was always really about.
