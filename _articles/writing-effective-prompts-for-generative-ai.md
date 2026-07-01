---
title: "Writing Effective Prompts for Generative AI"
date: 2026-02-03
summary: "A practical guide to writing clearer prompts for generative AI, with an emphasis on context, constraints, and usable outputs."
tags:
  - ai
  - working-with-ai
  - prompting
  - writing
  - productivity
series: working-with-ai
draft: false
layout: article
---

*A practical guide for shared use across technical teams*
## 1. What a “prompt” is (and is not)

A **prompt** is the information you give a Generative AI system so it can produce a response. 

 AI tools can feel conversational, and are often called ‘chatbots’, however this can be misleading. They do not think or understand in the human sense, if you leave important details unstated, they will not reliably infer what you meant.

AI models use the prompt to decide what kind of answer to give, and how specific or general it should be. They generate responses based on patterns learned from large amounts of text.

A useful way to think about this is:
- The AI is very good at continuing text in a way that sounds right
- It relies entirely on what you give it, plus what it has seen before
- If important details are missing, it will try to fill the gaps on its own

## 2. Improving prompts: clarity over cleverness

If a good prompt is closer to a clear set of instructions than a casual question, then some practical principles are:
- Be specific about what you want
- Do not assume the AI will “read between the lines”
- If the output is not what you expected, try refining the prompt.

A simple habit that helps is:
- Before sending a prompt, ask yourself: “What would a good answer look like?”
- If that answer depends on information you have not stated, add it to the prompt.

For example, instead of asking:
> Give me some birthday party ideas.

Ask:
> Give me 3 birthday party ideas for a 7-year old who enjoys playing with Lego and watching Superhero movies.

In the latter example, we’ve provided the model with additional **context**.

## 3. Context: the most important ingredient

Context is the background information the model needs to give you a useful answer.

Without enough context, the model will fall back to general or average responses.

### 3.1 Why context matters

Good context helps the model:
- Understand what you are really asking for
- Avoid generic or irrelevant answers
- Stay closer to your situation or constraints
- Reduce the chance of incorrect or made-up details (called **Hallucinations**)

More **<u>relevant</u>** context leads to better results, however, beware overloading your prompt with **<u>irrelevant</u>** context, as this can have the opposite effect. If we look back at our earlier example, adding that the gift recipient has two aunties and an uncle is likely irrelevant, and may lead to a lower quality response.

### 3.2 Being specific helps more than being clever

Here is another example of comparing two prompts:

**Less helpful**
> Suggest a team-building activity that doesn’t cost much.

**More helpful**
> Suggest 3 team-building activities.
> Constraints:
> - Budget: up to £25 per person
> - Team size: 8 people
> - Setting: remote-first team, UK-based
> - Goal: encourage informal interaction rather than skills training
> - Time limit: 60 minutes

The second prompt works better because it removes guesswork.

### 3.3 Handling sensitive data: context without compromise

Providing more context improves results — but not all context is safe to share.

When sending a prompt, you may be exposing information outside your organisation’s control. This creates several risks:
- **Privacy**: Personal data (names, emails, addresses, health details) can be unintentionally disclosed.
- **Compliance**: Regulations such as GDPR place strict rules on how personal and customer data can be processed.
- **Data retention**: Some providers may store prompts (even temporarily) for logging, monitoring, or future model training.

The key idea is simple: better context should not come at the cost of data safety.

#### Safer ways to provide context

You can usually get high-quality outputs without sharing real sensitive data by using one of these approaches:

##### Use realistic placeholders

Replace real values with neutral stand-ins that preserve structure but remove identity.

- jane.doe@testcompany.co.uk
- 000-000-0000
- AB12-FAKE-ID

This keeps the task realistic without exposing real records.

##### Avoid LLMs entirely for high-risk data

Some tasks simply should not involve generative models at all — for example:

- Processing raw medical records
- Handling payroll exports
- Reviewing full customer databases

In these cases, traditional tools and audited systems are safer choices.

Good prompts give models what they need — not everything you have. Treat sensitive information as a constraint to design around, not something to casually paste into a chat box.

## 4. Incorrect or made-up answers (Hallucinations)

Even with safe, relevant context, models can still invent details when information is missing — this is called hallucination.

### 4.1 What a hallucination is

A hallucination is when the AI gives an answer that is:
- Incorrect
- Made up
- Overconfident despite missing information

This is a known and expected limitation of these systems.

### 4.2 Why hallucinations happen

They usually occur when:
- The prompt lacks key details
- The question is too broad or vague
- The AI is asked about things it cannot reliably know

Models are generally designed to always give a response, unless specifically told when it's acceptable not to.

### 4.3 Ways to reduce hallucinations

Practical steps that help are:
1. Provide the information yourself
	- If accuracy matters, include the relevant facts or documents in the prompt.
2. Limit the scope
	- Be clear about timeframes, tools, versions, or environments.
3. Allowing the AI to say it does not know can reduce guesswork (although it won't prevent it entirely) for example:
> If you don’t have enough information, say “I don’t know” rather than guessing.
4. Be cautious with web-search features
	- They can help, but results may be outdated or wrong. It’s better to provide relevant information in the prompt.

### 4.4 Example

> Write a tweet about the recent London Marathon.

This prompt provides almost no concrete information. The phrase “recent” is vague, the event details are unspecified, and no facts are supplied. As the model is still asked to produce an answer, it is forced to guess what “recent” means and to invent plausible-sounding details such as winners, times, attendance numbers, or fundraising totals. This combination of missing context and pressure to respond makes hallucination likely.

> Write a tweet with a maximum of 280 characters, about the London Marathon held on 21 April 2025 in London, where 56,000 runners participated, the men’s race was won by Eliud Kipchoge in 2:01:45, the women’s race was won by Peres Jepchirchir in 2:15:10, and the event raised £70 million for charity.

This prompt greatly reduces the risk of hallucinations by supplying the key facts directly, rather than relying on the model to recall or infer them. It clearly defines the event (London Marathon on 21 April 2025), the scale (56,000 runners), the outcomes (named winners and finishing times), and an important result (£70 million raised for charity). As the model no longer needs to infer or fabricate these details, its task is limited to rephrasing provided information into a tweet format. This shifts the task from “guessing what happened” to “summarising known inputs,” which is far less prone to hallucination.

In short, the first example invites invention by leaving gaps, while the second constrains the model with specific, verifiable information and a narrow output format, making incorrect or made-up content much less likely.
## 5. Personas: guiding the point of view

### 5.1 What a persona is

A persona is a short description of who you want the AI to act like.

It answers the question:
> “From whose perspective should this be answered?”

### 5.2 Why personas help

Without guidance, AI often responds in a very general way.

A persona helps by:
- Setting the level of detail
- Choosing appropriate language
- Focusing on what matters to a specific role or audience

### 5.3 Example

> You are a professional event planner with experience organising weddings and community celebrations.
> You value clear communication, realistic budgets, and creating enjoyable experiences for guests.

This does not create real expertise, but it helps the AI choose a more relevant style and focus.

## 6. Output format: making answers usable

### 6.1 Why format matters

If you do not say how you want the answer presented, the model will choose a format that is easy to read, not necessarily easy to use.

Clear format instructions:
- Save time
- Reduce rework
- Make outputs easier to share or reuse

### 6.2 Common format instructions

Examples include:
- “Use bullet points”
- “Respond as a table”
- “Limit the answer to one page”
- “Use clear headings”

These are especially useful when the output will be copied into documents, tickets, or reports.
## 7. Meta-prompting: improving prompts with the AI

You can ask the AI to help improve your prompt.

For example:
> Review this prompt and suggest how it could be clearer or more specific.

This works well because:
- The AI can spot missing details or unclear instructions
- It turns prompt improvement into a repeatable step

This is particularly useful when creating prompts that will be reused.

## 8. Prompt patterns and reuse

### 8.1 What prompt patterns are

A prompt pattern is a reusable prompt template with a clear structure and a space for changing inputs.

### 8.2 Why patterns are useful

They help:
- Work more consistently
- Save time
- Share what works
- Improve quality over time

### 8.3 Example

> Summarise the following article in 5 bullet points, focusing on the main ideas and key takeaways, using clear and simple language suitable for a general audience; Content to summarise:
> \<paste content here\>

The structure stays the same; only the input changes.

## 9. Advanced Techniques

The techniques covered so far are enough for most everyday uses of Generative AI. Simply being clear, providing relevant context, and setting basic constraints will already improve your results significantly.

The sections below introduce more advanced techniques that can be useful in specific situations — such as complex tasks, decision-making, or prompts that will be reused regularly.

These are not “better” by default, and they should not be applied to every prompt. Think of them as additional tools you can use when simple instructions are no longer enough.

### 9.1 Providing examples (Zero-shot vs few-shot prompting)

So far, all the examples you’ve seen are Zero-Shot Prompting. This means you describe the task and (optionally) give formatting instructions — such as “use bullet points” or “respond as a table” — but you do not provide example answers.

Zero-shot prompting works well when:

- The task is common or simple
- You mainly care about structure (as covered in the Output Format section)
- The exact wording or tone is not critical

The downside is that even with good format instructions, the AI still has to guess your preferred writing style, level of detail, and phrasing.

Few-Shot Prompting goes one step further. Instead of only telling the AI what the output should look like, you also show it a few examples of finished outputs. This is especially useful when creating content where tone, wording, and consistency matter - such as customer emails, support replies, reports, or templates used repeatedly under time pressure.

Few-shot prompting helps when you want:
- Consistent tone and wording across multiple outputs
- Reliable formatting beyond simple rules
- Faster results with less editing

The trade-off is that prompts become longer and you need to provide clear, high-quality examples.

For example:
> … 
> 
> Here are some examples, I want you to use the same tone, formatting and style:
> 
> [example 1]
>
> [example 2]

In practice:

- Use format instructions (Section 6) when you mainly care about layout and structure.
- Use few-shot prompting when you care about how something is written — not just how it is formatted.

Together, these techniques give you much tighter control over the final output.

### 9.2 Reasoning strategies (Chain-of-thought vs Tree-of-thought)

#### Thinking step-by-step (Chain-of-thought)

This involves asking the model to explain its thinking step by step. For example:
> Help me split a £68 dinner bill fairly between 3 people where one person didn’t drink alcohol (£6 of the bill), and the other two shared the alcohol; explain your reasoning step by step and show the final amount each person should pay.

Why this can help:
- Encourages more careful answers
- Makes the reasoning easier to follow
- Helps with complex or multi-step problems

Many modern tools already do some of this automatically, but it can still be useful to ask explicitly for complex tasks.

#### Multiple approaches (Tree-of-thought)

This approach asks the AI to:
- Consider several different ways of solving a problem
- Compare them
- Decide which is best

You can strengthen this by:
- Assigning different roles or perspectives to each approach
- Asking one “reviewer” perspective to evaluate the others

This is especially helpful for open-ended decisions where there is no single obvious answer. 

For example:
> I want to buy a laptop for everyday use (email, web browsing, photo storage/light editing) with a budget of up to £700.
> 
> Please do this in four parts:
> 1. Practical Penny (reliability + best value): suggest 2–3 laptop options and explain briefly why each fits.
> 2. Creative Chris (screen quality + comfort): suggest 2–3 laptop options and explain briefly why each fits.
> 3. Reviewing Riley (independent reviewer): compare Penny vs Chris’ suggestions using clear criteria (price, reliability, screen, comfort, battery, portability), then say which direction seems best for my needs and why.
> 4. Penny + Chris together: agree on one final recommendation (plus one runner-up) that incorporates Riley’s feedback and clearly states what to buy and why.
> 
> Keep it simple and jargon-free

## Closing perspective

Good prompting is not about tricks or special wording. It is about:
- Being clear about what you want
- Providing the right context
- Setting sensible boundaries

When an answer is wrong or unhelpful, treat it like a process issue rather than a failure of the tool. Adjust the prompt, make expectations clearer, and try again.
