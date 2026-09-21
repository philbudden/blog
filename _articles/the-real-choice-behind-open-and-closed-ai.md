---
title: "The Real Choice Behind Open and Closed AI"
date: 2026-09-21
summary: "An essay arguing that open and closed AI labels are not enough: responsible decisions depend on how control, scrutiny, responsibility, and dependency are distributed across a release."
tags:
  - ai
  - open-source
  - governance
  - ai-strategy
  - responsible-ai
draft: false
layout: article
---

# The Real Choice Behind Open and Closed AI

Arguments about AI models often settle into a familiar choice. Open models distribute capability and allow independent scrutiny; closed models make it easier to enforce safeguards and hold a provider responsible. Both claims contain some truth, but the choice is too blunt to guide a real decision.

An AI system can expose its weights while keeping its training data, evaluation results, tools, and operating instructions private. Another can keep the model closed but provide documented evaluations, stable interfaces, detailed logs, and a clear route for challenging harmful outputs. Calling the first system open and the second closed may not be enough.

## A release is a bundle of decisions

In [The Gradient of Generative AI Release](https://arxiv.org/abs/2302.04844), Irene Solaiman describes six broad release patterns, from fully closed systems through staged, hosted, API, downloadable, and fully open access. The framework also separates access to the model from the components needed to analyse risk or reproduce the system.

A developer may allow people to query a model without inspecting it, or publish evaluation results without releasing the underlying data. Downloadable weights can arrive without the inference code or any account of the training and safety work. Even where researchers can adapt the model, continued access may remain at the developer's discretion.

Each choice changes what different groups can do. Researchers may gain the ability to audit a system, while smaller organisations can adapt it. The original developer, however, may lose visibility of downstream use. Users gain an alternative to a single hosted provider, but take on more of the security and deployment burden themselves. Across those decisions, control hasn't disappeared; it has moved between the parties.

## Restricted access leaves more decisions with the provider

The strongest case for restricted access is easy to understand when a system has capabilities that could cause serious harm. A hosted service can limit and monitor use. It can also suspend accounts or change filters. A provider can respond to a newly discovered problem without relying on every downstream operator to update its own deployment.

Enforcing those controls requires the provider to retain authority over the service. The same provider can change prices or withdraw a model. It decides which researchers get access and sets the moderation rules, even when other organisations have become dependent on the service. External scrutiny is shaped by what the provider chooses to reveal. An organisation buying access may have a contractual relationship and a support route, but it's also accepting the provider's continued control over important parts of the system.

Good intentions don't resolve that concentration of authority: a company can sincerely want to reduce harm and still keep too many important decisions beyond external scrutiny.

The open-versus-closed debate is therefore partly about legitimacy, it asks who gets to make decisions about access and whose evidence counts. It also asks whether anyone outside the developer can challenge the result.

## Open access doesn't guarantee practical independence

The strongest case for openness is also wider than access to a useful model. Openness can support independent research and local adaptation. It may also increase competition by enabling uses the original developer didn't anticipate. That makes it less likely that one organisation controls how everybody else accesses and uses the technology.

Bill Gurley's essay on [open source strategy](https://p3institute.substack.com/p/from-open-source-software-to-open) makes the competitive logic explicit: an open layer can be used to reduce an incumbent's control and give an ecosystem a shared base on which to build. In AI, that can mean more options for local deployment and specialist models, with inference systems or services built outside the largest platforms.

Yet downloadable weights don't give everyone the same practical control. Running a capable model may still require expensive hardware and scarce expertise. Many organisations may be able to download the model, but far fewer will be able to run it reliably. Control can also settle with an inference platform or cloud provider. In practice, whoever maintains the interface through which users encounter the model may still control how most people use it.

Nathan Lambert makes a related argument in [What comes next with open models](https://www.interconnects.ai/p/the-next-phase-of-open-models). The useful unit is increasingly the system around the weights: tools, inference, prompts, and the harness that lets the model search or act. An open model inside a closed operating stack may give less practical independence than its licence suggests.

Openness therefore needs its own scrutiny. Nominal access matters less if only a few organisations can run the system or understand its behaviour. Infrastructure still has to be paid for, and some parts may remain beyond modification. Once the original developer can no longer revoke access or ship a universal fix, someone else has to own what happens when things go wrong.

## The control has to fit the release

The mistake is to treat one end of the gradient as responsible by definition. Responsibility depends on whether the controls still work after the chosen release.

Monitoring and account sanctions may be credible controls for a hosted service, although they also create surveillance and exclusion risks. A downloadable model weakens those controls: documentation and licences can travel with it, but ongoing monitoring or revocation may not. Both release patterns need enough access for independent evaluation, even though broader access may also make some harmful uses easier to scale.

The decision should also be revisited. A staged release can widen as evidence improves, while a credible harm may require a provider to restrict a capability. When support ends or a surrounding service changes, a once-open component can become practically closed. A closed system, meanwhile, can become more accountable by exposing better evidence and accepting stronger independent oversight. Release governance therefore continues after launch as the evidence and surrounding services change.

## Follow the dependency through a decision

The open-or-closed label is most limiting when it reaches a procurement decision. Consider a team choosing an AI system to help staff draft correspondence to customers. A hosted product keeps model updates and misuse monitoring with the supplier. Useful, but the supplier also controls continued access and decides what evidence the team can inspect. If its moderation blocks legitimate work, the team needs a credible route to challenge the decision.

A downloadable model changes the arrangement. The team gains more control over deployment and can adapt the model to its context, but someone inside the organisation now has to maintain it. Moving away from one supplier may also create a new dependence on the cloud provider or the software used to serve the model.

To judge either option, the organisation needs enough evidence to understand the system and enough authority to adapt it or challenge a harmful decision. The contract matters because the supplier may change the price or withdraw access, while the operating model determines where recovery work lands when the system fails.

Different work will justify different choices. A low-risk specialist tool and a highly capable general system shouldn't need the same controls. An organisation may reasonably use a managed service in one context and an open model in another. The choice becomes more defensible when those dependencies are visible.

Labels still matter, but they don't settle the decision. “Open” can conceal infrastructure concentration and weak support, while “closed” can hide private rule-making and deep dependency. Even “safe” may describe a meaningful control or provide cover for keeping evidence inside one institution. A responsible decision makes those dependencies visible before the organisation commits to them, including who will be able to act when the system fails.

---

_Generative AI is a powerful tool. I openly use it to conduct research, challenge my thinking, generate drafts, and review my work. AI never owns what I think, or my personal judgement. Everything I publish is a reflection of my own thoughts and opinions._
