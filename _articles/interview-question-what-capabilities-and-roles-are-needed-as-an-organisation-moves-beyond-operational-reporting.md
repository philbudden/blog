---
title: "Interview Question: What capabilities and roles are needed as an organisation moves beyond operational reporting?"
date: 2026-09-14
summary: "An interview-style essay arguing that moving beyond siloed reporting depends on governed data engineering foundations, decision-makers with authority to act, and reusable data products that enable earlier intervention."
tags:
  - data
  - analytics
  - governance
  - data-engineering
  - interview-questions
  - social-housing
series: interview-questions
draft: false
layout: article
---

# What capabilities and roles are needed as an organisation moves beyond operational reporting?

This is part of a series of interview-style questions I've been using to test and sharpen my thinking about data, AI, and organisational work.

## The Question:

What capabilities and roles are needed as an organisation moves beyond operational reporting?

## My answer:

An organisation doesn't move beyond operational reporting by upgrading its reporting tools or producing more polished dashboards. The real shift is from siloed, reactive reporting toward an organisation that can use governed data to make earlier decisions and take responsibility for service change.

## Why the old reporting model is limited

The old reporting model is limited because it's often both operational and siloed. If reporting is built only from individual source systems in isolation, it remains tied to the operational shape of those systems. It tells you what has happened inside one business process, but it doesn't help you understand a broader subject or see related signals across services early enough to change an outcome. In that sense, siloed reporting tends to keep an organisation reactive, always looking at what has already happened rather than what might need intervention next.

For me, the first visible difference in an organisation that has really moved beyond this model is the existence of a more connected view of the organisation's data: integrated, subject-specific datasets enriched with contextual information from outside the source systems themselves. At that point, analytics can begin to support earlier, more proactive decisions.

## What integrated analytics makes possible

In a social housing context, one example makes this concrete. If a provider combines smart sensor alerts for damp and mould, heat loss, and overheating with broader contextual data about health, weather, and the property itself, it can begin to identify vulnerable customers or at-risk homes before the issue becomes a reactive service event. It's a different use of data from traditional operational reporting, which records service problems after the fact but rarely helps the organisation decide where to intervene earlier.

## The first capability to build

That kind of work depends on foundations that many organisations either underestimate or fail to see at all. The first technical capability I'd build is a well-governed, well-engineered shared data layer: an integrated warehouse layer where system-specific records start to become subject-specific organisational understanding, fed through a structured pipeline with validation and lineage built in. In medallion architecture, this is usually called the Silver layer, which I wrote about in [How a data platform becomes strategically important rather than technically useful](https://philipbudden.co.uk/posts/interview-question-how-a-data-platform-becomes-strategically-important/).

If the organisation wants analytics that cut across properties, customers, repairs, health vulnerability, and weather exposure, then the shared data layer quickly becomes the constraint. Without it, each pilot has to rebuild its own joins and carry its own data-quality assumptions, with the same arguments about definitions repeated each time. This shared layer comes first in the technical sequence because it gives the wider organisation something concrete to govern and gives pilots a reusable base instead of another one-off extract.

## The data engineering gap

Building that kind of silver layer is where the missing data engineering capability often becomes visible. I may be biased, but this is what I've observed during my tenure: many organisations have staffed for business intelligence and reporting, but not for the engineering discipline required to turn messy operational data into a reliable, modelled, historised service that keeps working over time. It can be easy to see the visible report and miss the engineering work that decides whether the report can be trusted.

Data engineering is far removed from the visible point of value, so it's easier for people to see a dashboard than the incremental loads, dimensional history, and semantic modelling beneath it. I've seen organisations use the wrong test when trying to justify engineering investment. They look for direct, short-term ROI on the engineering itself, usually expressed in hours saved or manual steps removed, but the better test is whether the engineering changes what the organisation can safely decide and repeat. In the damp and mould example, the value is less about analyst time saved than about the organisation being able to identify risk earlier and explain why a household was prioritised. Reusing the model next winter, or defending the decision if challenged, depends on that same foundation.

## Why governance is part of the capability

Governance is the other core capability that tends to be misunderstood. It's often seen only as a way to constrain bad practice, but I think its more important job is making the capability usable and trusted at scale. A strong analytics capability needs clear ownership of business metrics and KPIs, backed by lineage, standardisation, and role-based access control. Without those things, organisations quickly lose trust in the products they publish.

In my experience, ownership of metrics is one of the first places where advanced analytics breaks down. Reports built for different purposes get compared directly, and one is declared "wrong" when in reality each reflects a different metric definition. Worse, metrics and KPIs can be quietly adjusted to flatter performance or conceal uncomfortable truths. In the housing example, that could mean redefining the risk threshold for damp and mould because the intervention queue is too large, without making clear whether the risk has changed or the organisation's capacity has changed.

A version-controlled governance implementation is part of the answer. If metric definitions are stored in systems, tracked through version control, and changed only through formal change control, it becomes much harder to rewrite the past casually or opaquely. In a larger organisation, I can see value in a dedicated data governance role. In a smaller one, the same responsibilities may need to sit across a smaller number of roles. Either way, I don't think one person should have unilateral authority over shared organisational metrics. The governance group needs enough authority to decide when a definition can change and what has to be restated. It also needs to recognise when operational pressure is being allowed to distort the evidence.

## The hardest gap

The hardest gap is often action. In the example of identifying vulnerable customers through integrated data, the more difficult challenge is turning a risk score or alert into a real intervention. The organisation has to trust the data enough to act on it, but it also has to define the authority to intervene and the way results will be reviewed.

That may require pilot programmes with named owners and a cross-functional group that is more than a discussion forum. If a damp and mould model identifies a set of high-risk homes, someone has to decide what kind of intervention follows. Is it an inspection, a repair priority, a welfare call, or something else? Someone also has to decide what happens when there isn't enough capacity to do everything at once. Those are operating-model questions as much as analytical ones.

## The operating model

The data team owns the shared data platform, from raw ingestion through to curated, reusable datasets for the business. It should also remain responsible for the more advanced exploratory and analytical work, at least initially. Business users and business teams consume those curated products and use them to inform action in their own domain.

This doesn't make the business passive. The move beyond operational reporting needs decision-makers with authority to act. If the data team can produce a risk list but the repairs, housing, care, or neighbourhood teams can't commit staff time or change priorities, the work remains admired reporting with a more sophisticated input. We need business users bringing operational judgement to the product and owning the intervention that follows, including the question of whether anything useful is changing rather than simply requesting dashboards from the data team.

## Data literacy and decision-making

Business data literacy is a major constraint here. Over many years I've repeatedly seen capable managers and business users fail to involve data teams early enough because they don't have a realistic model of what data work can do, where the effort actually sits, or when it becomes valuable to engage. People may not realise that a problem they are handling manually is something the data team could make easier or more reliable.

The same literacy gap shows up in leadership decisions, where the issue is less about asking for the right report and more about knowing what a signal commits the organisation to consider. Leaders don't need to become data specialists, but they do need to understand enough to ask what evidence supports the signal and who owns the outcome. They also need to know what would make them stop or change course. In the damp and mould case, leadership literacy isn't about reading a chart more fluently. It's about understanding that a risk model creates a decision obligation, especially when the organisation knows more about vulnerability than it did before.

Creating a more data-literate business is one of the more practical ways to start moving forward. The aim isn't to turn every manager into an analyst. It's to help the business engage the data team earlier and use curated products with more confidence, including knowing when a question needs better foundations rather than another bespoke report. Better relationships between the data team and the business are easier to build once both sides have a more realistic understanding of the work involved and the decisions it's meant to support.

## The practical sequence

If I had to reduce my position to a practical sequence, it would be this.

First, build the governed, engineered shared data layer around a small number of real subject areas and problems. Use it to produce a few strong data products and pilots that can lead to real intervention. Tie those pilots to business owners with authority to act, then judge them through the outcomes that matter in context. In a housing setting, that might mean customer wellbeing, service cost, risk reduction, and regulatory defensibility. If the pilots work, use them to grow business data literacy and strengthen the hub-and-spoke relationship between the data team and the wider organisation.

That's the version of "moving beyond reporting" I would trust: an organisation becoming able to build the foundations, governance, ownership, and confidence needed to make better decisions early enough to change what happens next.

---

_Generative AI is a powerful tool. I openly use it to conduct research, challenge my thinking, generate drafts, and review my work. AI never owns what I think, or my personal judgement. Everything I publish is a reflection of my own thoughts and opinions._
