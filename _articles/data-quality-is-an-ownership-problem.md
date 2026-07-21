---
title: "Data Quality is an Ownership Problem"
date: 2026-07-21
summary: "A systems essay arguing that data quality only improves when visible defects have a route to ownership, decision authority, and operational follow-through."
tags:
  - data
  - data-quality
  - governance
  - analytics
  - data-strategy
draft: false
layout: article
---

# Data Quality is an Ownership Problem

Most organisations do not have a data quality problem because nobody can see the defects. They have a data quality problem because seeing the defects does not automatically make anyone responsible for fixing them.

A data quality dashboard can tell you which fields are incomplete, which records fail validation, which source system is drifting, or which business process is producing bad inputs. All of that is useful, and in many organisations it would be a real step forward, but the dashboard is still only the point at which the organisation has made the problem visible. After that, the work becomes much less about measurement and much more about ownership.

## The dashboard is only the beginning

I have become increasingly convinced that the most useful data quality work sits between two easy but incomplete positions.

The first position is the technical one: build validation rules, measure completeness, expose failures, and track quality over time. This is necessary. Without it, the organisation is mostly guessing. It only discovers bad data when a report looks wrong, a migration breaks, a customer receives the wrong communication, or an analyst spends half a day explaining why two numbers do not match.

The second position is the optimistic governance one: once quality is visible, the business will fix it. That is where the argument usually becomes too tidy. Visibility helps, but it does not create capacity, authority, priority, or accountability by itself. Someone still has to be able to look at the issue, understand why it matters, decide whether it is worth fixing, and do the work needed to stop it coming back.

If a field is consistently wrong in an operational system, who owns the correction? Is it the team that enters the data, the system owner, the process owner, the data team, the supplier, or the person who found the problem downstream? Who decides whether the issue is important enough to fix now rather than tolerate? Who changes the process so the same defect does not reappear next month?

If those answers are vague, the dashboard has not created a quality improvement system. It has created a more accurate description of organisational ambiguity.

## Quality at source and quality for use are not the same problem

One of the more useful distinctions in my current work is between source-facing quality and platform-facing trust.

Source-facing quality is about the data where it is created and maintained. If an operational system stores missing contact preferences, inconsistent property identifiers, badly formatted dates, or unclear status values, the ideal answer is usually to improve the data at source. That is where a Data Accuracy style framework is valuable: it can make operational quality visible in a structured way, show which systems or fields are failing, and give the business a way to talk about the health of the data it actually owns.

Platform-facing trust is different. A data platform still has to protect downstream users from the messy reality of source systems. A governed [Silver layer](https://www.databricks.com/blog/what-is-medallion-architecture), for example, should standardise, validate, deduplicate, integrate, and preserve lineage so analysts and decision-makers are not forced to rediscover the same problems in every report. That layer is not pretending the source is perfect. It is creating a trusted organisational view despite the fact that source quality will always be uneven.

The trap is treating either layer as the whole answer. If the organisation only improves the platform layer, the data team becomes a permanent cleanup function. Every source defect is laundered downstream into clever transformations, exception handling, and undocumented analyst knowledge. That can produce useful reporting for a while, but it quietly teaches the organisation that bad inputs are someone else's problem.

If the organisation only focuses on source correction, advanced analytics can be blocked by every unresolved operational imperfection. In the real world, source systems are old, busy, constrained, and embedded in actual work. Some quality problems will take time to fix. Some will have to be corrected or standardised downstream for legitimate reasons.

The better model is less neat, but more realistic: improve quality at source where the organisation can, and build platform trust where downstream work needs reliable, reusable data now.

## Trust needs a route back to responsibility

One useful test is whether a quality issue has a route back to responsibility. This is where I find the language of directly responsible ownership useful. GitLab uses the term DRI, or Directly Responsible Individual, for a named person responsible for moving a workstream forward. I do not think the exact handbook pattern needs to be copied everywhere, and I do not think every higher-impact decision can honestly be reduced to one heroic owner. Some work needs a clearly bounded group. But the underlying question is still useful for data quality work: who is expected to drive this to a defensible outcome?

For a critical dataset, someone should be responsible for its meaning, not just its pipeline. Someone should know what the key fields mean, which failures are tolerable, which failures are urgent, who can approve changes, what downstream products depend on it, and when a quality issue needs escalation. The data team may own the platform mechanics, but it cannot be the sole owner of every business definition, process failure, and operational consequence.

That becomes more important when data supports intervention rather than reporting. If a dashboard shows that arrears increased last month, poor data may create embarrassment, confusion, or a long meeting about whose number is right. In that case, the damage is real, but the conversation is still mostly about explaining the past.

If an analytical model or prioritisation process is used to decide where support should go next, the stakes change. The organisation is no longer just describing what happened. It is making choices about what to do, which means a bad field, an unclear definition, or an out-of-date flag can become part of how the organisation allocates attention and support.

## The real test is intervention

I think this is where "moving beyond operational reporting" is often misunderstood. The goal is not simply to produce more advanced dashboards or add AI to the reporting estate. The goal is to help the organisation act earlier, more fairly, and with better evidence.

In a housing, care, or community-service context, that might mean identifying damp and mould risk before a situation worsens, spotting patterns in contact that suggest a household needs support, understanding where digital exclusion affects service access, or combining asset, service, and place-based data to prioritise limited resources. These are not abstract analytics use cases. They are attempts to change what happens next.

The difficulty is that a signal only matters if the organisation can respond to it. That response requires more than a clean dataset. It requires someone with authority to decide what the signal means, someone able to commit operational action, someone responsible for checking whether the intervention helped, and someone accountable for stopping or redesigning the process if it creates unfairness or false confidence.

This is the part that can get missed when data quality is treated as a technical hygiene exercise. Quality is not only about whether the data passes validation. It is about whether the data is good enough for the decision being made, and whether the organisation has accepted the responsibility that comes with using it.

A postcode field that is 90 percent complete may be good enough for broad regional reporting. It may not be good enough for targeting a high-impact service intervention. A vulnerability flag may be useful context for professional review. It may be dangerous if treated as a complete and current representation of a person's situation. A property identifier may look like a dull modelling detail until it becomes the join key that connects repairs, complaints, asset condition, energy performance, and resident contact into one view of risk.

That is why I would rather ask "good enough for what, and owned by whom?" than talk about data quality as though it has one universal threshold.

## Data quality work should create loops, not artefacts

The practical model I keep coming back to is that data quality work should create loops, not artefacts. A dashboard, a data quality mart, or a set of validation rules is useful only if it becomes part of an operating rhythm where issues are understood, owned, corrected, accepted, or escalated.

A useful loop might look like this:

- a quality rule detects a defect;
- the defect is visible to the people who can understand its operational cause;
- the issue has a named owner or owning group;
- there is a route to fix the source, correct the platform, or formally accept the limitation;
- downstream users can see whether the issue affects their product or decision;
- repeated defects trigger process improvement rather than permanent manual cleanup.

None of those steps is especially glamorous, which is partly why they matter. Data quality improves through ordinary operating discipline more than through grand declarations about becoming data driven.

The same logic applies to metric definitions. If two reports disagree, the answer is not always that one analyst has made a mistake. The real issue may be that the organisation has allowed multiple definitions to evolve without ownership, version control, or change governance. When that happens, every meeting becomes a negotiation about reality. Better tooling can expose the inconsistency, but someone still has to decide which definition is authoritative, how it changes, and how historical comparisons are protected from quiet reinterpretation.

That is why I am wary of treating governance as a separate layer of paperwork around data work. If people are expected to use a dataset to make decisions, then its meaning, quality expectations, owner, change path, and known limits are part of what makes that dataset usable in the first place.

## What to ask before building another dashboard

If I were trying to improve data quality in an organisation, I would still build the dashboards. I would still want validation rules, history, lineage, quality marts, and visible trends, because measurement gives people something concrete to work from.

But I would ask a few ownership questions before assuming measurement was the hard part:

- Who owns the source process that creates this data?
- Who owns the platform dataset that makes it reusable?
- Who owns the metric or analytical product that depends on it?
- Who can decide whether a defect must be fixed, tolerated, or escalated?
- Who is responsible for changing the process if the same defect keeps recurring?
- Who carries the risk if this data is used for an intervention rather than a report?

Those questions are uncomfortable because they move data quality out of the safe world of dashboards and into the messier world of operating model, authority, and judgement. They also make the work more useful, because they connect a detected defect to the people and decisions that can actually change it.

An organisation does not become data driven when it knows more precisely how bad its data is. It becomes data driven when that knowledge changes behaviour: source processes improve, platform contracts become trusted, definitions stop drifting, and decisions are made with a clearer understanding of both evidence and uncertainty.

Data quality is not just a technical property of a dataset. It is also a chain of responsibility around how that dataset is created, interpreted, governed, and used. If that chain is broken, better measurement will help you see the break more clearly, but the useful work is still making sure someone can do something about it.
