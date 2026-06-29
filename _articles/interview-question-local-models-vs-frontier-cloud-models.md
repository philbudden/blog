---
title: "Interview Question: When have you changed your mind about local AI models versus frontier cloud models?"
date: 2026-06-28
summary: "A first interview-style reflection on pushing local models, keeping control, and learning where local and frontier systems each make sense."
tags:
  - ai
  - local-models
  - frontier-models
  - systems-thinking
series: interview-questions
draft: false
layout: article
---

*What changed my mind was accepting that local and frontier models do different jobs well.*

Over the past few weeks I’ve been asking ChatGPT to generate a series of interview-style questions designed to make me think more deeply about topics I care about. The exercise was intended as self-reflection, but I found that many of my answers naturally evolved into short essays. Rather than leave them buried in my notes, I’ve decided to publish them. This is the first in a series of posts exploring those questions, along with my own thoughts, experiences, and opinions.

## The Question:

When have you changed your mind about local AI models versus frontier cloud models?

## My answer:

My thinking on local AI models has changed more than almost any other area of AI over the past couple of years. Not because the technology changed dramatically, although it certainly has, but because my understanding of where the value actually lies matured through experience.

By nature, I’m a builder of systems. My instinct when I encounter a problem is rarely to buy an off-the-shelf solution; it’s to understand how it works and see if I can build something myself. That instinct has served me well throughout my career, and it naturally carried over into AI.

When I first became seriously interested in local models, my assumption was simple: if frontier models could produce incredible results, then I should be able to reproduce those results myself by running sufficiently capable open-source models locally.

So I built exactly that.

I assembled a dedicated inference machine, installed Ollama, configured local coding assistants, and began experimenting with code generation, debugging, document writing and general knowledge work. I was effectively trying to recreate the workflows I’d seen demonstrated by people online.

The problem was that those demonstrations were almost always using the latest frontier reasoning models behind the scenes.

My experience was… different.

The local models could certainly generate code and answer questions, but they lacked the consistency, reasoning depth and instruction-following that I was expecting. My first conclusion was probably the obvious one: I simply needed bigger models and more compute.

That kicked off a familiar engineering rabbit hole. I began planning hardware upgrades, calculating VRAM requirements and convincing myself that another few billion parameters would unlock the capability I was looking for. Then I started noticing something that challenged that assumption.

On one occasion I found that a 14-billion parameter model consistently followed my instructions better than a 20-billion parameter model. That shouldn’t really have happened if parameter count alone determined usefulness. It was one of the first moments that made me realise I was optimising the wrong thing.

Rather than abandoning the idea of local AI, I doubled down on systems thinking. Instead of asking “How do I run one giant local model?” I started asking “How do I build a system that uses different models for different kinds of work?”

That eventually became CortxAI.

The central idea was a classification engine that examined every incoming prompt before deciding how it should be handled. I classified work into categories such as execution, decomposition and novel reasoning.

- Simple execution tasks could be handled by local models.
- Novel reasoning would be sent directly to a frontier model.
- The interesting category was decomposition.

For more complex requests, my idea was to ask a frontier model to break the problem into smaller, well-defined execution tasks. Those smaller tasks could then be handed back to local models to complete. In theory, this would dramatically reduce API costs while still benefiting from the superior reasoning of frontier models.

Looking back, I still think the architecture was sound.

Unfortunately, I never fully solved the practical challenges, particularly around memory management and orchestration, and before I could mature the project, the wider AI ecosystem largely caught up. The industry began moving towards multi-model routing, specialised models and agentic orchestration, effectively validating the direction while making my implementation less compelling.

Even though the project itself never reached the finish line, I don’t consider it a failure. It fundamentally changed how I think about AI and the biggest lesson wasn’t technical.

It was that I had been trying to make local models compete with frontier models, when I should have been asking where each type of model provides the greatest value.

No matter how much hardware I purchased, my workstation was never going to compete with enormous distributed clusters running frontier reasoning models. That’s not a criticism of local AI—it’s simply recognising that they’re solving different optimisation problems.

Once I accepted that, my thinking changed completely. Today I don’t think in terms of local versus cloud, I think in terms of using the right tool for the job.

Frontier models are exceptional reasoning engines. They’re where I go for strategy, architecture, deep research, complex planning and the kinds of cognitive work that genuinely benefit from state-of-the-art reasoning.

Local models excel somewhere else entirely. They’re fantastic when privacy matters, when latency matters, when the task is narrowly defined, or when the same operation needs to be repeated thousands of times. They don’t need to be the smartest models in the world if the task itself doesn’t require the smartest reasoning in the world.

Speech transcription is a perfect example. I use Parakeet to generate transcripts because it’s small, fast and extremely good at exactly that task. I don’t need frontier-level reasoning to convert speech into text. I need accuracy, speed and low cost. The same principle applies to many other narrow AI workloads.

Ironically, once I stopped trying to make local models do everything, they became significantly more useful.

The same shift happened at a systems level. Rather than building increasingly elaborate infrastructure to compensate for model limitations, I started building systems around the strengths of frontier models. My SecondBrain system is probably the best example of this. Instead of focusing on replacing cloud AI, I focused on creating rich context, strong governance, reusable knowledge and workflows that allow frontier models to perform consistently well. The system became the differentiator rather than the model itself.

That philosophical shift extended beyond AI. As I simplified my AI architecture, I found myself simplifying my entire homelab. I retired my dedicated inference machine, decommissioned my Kubernetes cluster, removed my 12U server rack and consolidated everything down to a workstation supported by a NAS for backups and a handful of local services that I genuinely enjoy maintaining.

In hindsight, I realised I had gradually become more interested in maintaining infrastructure than solving problems. Today my setup is dramatically simpler, but also considerably more productive.

I still have a genuine interest in local AI, and I suspect I always will. I think it has an important future, particularly where organisations need complete control over sensitive data, where privacy requirements prevent the use of external services, or where local automations require modest amounts of reasoning without incurring ongoing API costs.

But I no longer see local AI as a replacement for frontier models, I see it as one component within a much larger ecosystem.

Perhaps the biggest change in my thinking is this: I used to believe better outcomes would come from building bigger systems. Today I believe better outcomes come from building smarter systems—systems that understand the strengths and weaknesses of the tools available and orchestrate them accordingly.

Ultimately, I no longer think the interesting question is “Should I use local models or frontier models?”. The interesting question is “How should I design a system that gets the best from both?”
