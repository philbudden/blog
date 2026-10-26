---
title: "The Practical Delegation Test in Social Housing"
date: 2026-10-26
summary: "A practical test for deciding what AI can do in a social-housing repair case, and what remains accountable human work."
tags:
  - ai
  - delegation
  - social-housing
  - responsible-ai
  - judgment
draft: false
layout: article
social_image: /assets/social/the-practical-delegation-test-in-social-housing.png
social_image_alt: "The Practical Delegation Test in Social Housing, about deciding what AI can do in repair casework and what remains accountable human work."
---

# The Practical Delegation Test in Social Housing

A contractor marks a leaking roof repair complete. After the next heavy rain, the resident reports water still coming into a bedroom. The completion record tells the landlord that the assigned job was done; the resident's new report says the problem in the home hasn't ended.

Now imagine a housing provider asks an AI agent to prepare a case summary from the incoming report and repair history, with a proposed next step for an adviser. It can produce a tidy account in seconds, but if it treats “complete” as proof that the leak was resolved, the adviser starts from the wrong picture. The resident may have to report the leak again after being told the earlier repair is complete. The landlord is responsible for arranging the response, while the resident lives with the water coming in.

This is an example of the kind of decision my [Practical Delegation Test](https://philipbudden.co.uk/practical-delegation-test/) is designed to examine. I recently explored the four questions I ask before handing meaningful work to AI in my **One Concept, One Example, One Question** newsletter series:
- [Can I describe the outcome clearly?](https://buttondown.com/philipbudden/archive/can-i-describe-the-outcome-clearly/)
- [Can I verify the result cheaply enough?](https://buttondown.com/philipbudden/archive/can-i-verify-the-result-cheaply-enough/)
- [What judgment must remain human?](https://buttondown.com/philipbudden/archive/what-judgment-must-remain-human/)
- [Where does the uncertainty go?](https://buttondown.com/philipbudden/archive/where-does-the-uncertainty-go/)

Together these questions help decide whether AI should do the work directly, work behind checkpoints, support a person doing it, or stay out of that task. You can subscribe to my newsletter [here](https://buttondown.com/philipbudden).

AI hasn't invented the gap between a job record and a resident's experience. A hurried colleague can misread the same status. An agent can turn many records into confident summaries in a short time. If it reads “complete” as “resolved” in each repeat-repair case, several advisers can receive the same wrong account without reopening the underlying reports. The test asks whether the whole route from report to response improves, including the work of checking the agent and the consequences of a mistake.

## Decide what the record needs to say

“Handle repeat repairs” is too loose a brief, a better one is: prepare a case summary with a suggested next step for an adviser. The adviser checks the proposal and decides what action the landlord should take and what it can say to the resident. Drawing that boundary is part of the first question, **Can I describe the outcome clearly?**

I'd want the summary to put the contractor's record beside the resident's new report, with a link to each. It should identify the original roof job and date both accounts. If the cause of the continuing leak is unknown, the summary needs to say so. “The roof repair is complete” describes a job; “the leak is resolved” makes a claim about the home. If the intended output doesn't preserve that difference, the adviser has no reliable basis for the proposed next step.

A more detailed prompt can't settle what the status field doesn't say. An adviser may discover that the earlier repair dealt with one defect and the new report points to another. If the landlord hasn't decided whether the adviser needs a chronology or a proposed resident reply, AI can sketch both as working options; a person chooses the purpose before either enters the case workflow. For known appointment details, a template with validation checks is easier to inspect; an agent has a stronger case for reading the contractor's note alongside the resident's report.

## Make the check reach the underlying reports

The second question, **Can I verify the result cheaply enough?**, asks whether a meaningful check fits the actual work. “Cheaply enough” doesn't mean a glance at the draft. It means the time and expertise needed to catch important errors are proportionate to the benefit of delegation and to the cost of a missed error.

In the leaking-roof case, the adviser needs to compare the proposed summary with the resident's latest report and the earlier job record. Source links beside the agent's claims make that possible. The adviser should be able to see whether “completed” has been attached to the contractor's work or to the resident's problem, and whether the proposed next step follows from the evidence.

If the landlord later asks the same agent to decide which reports deserve attention, the check changes. A missed recurrence won't appear in the exception queue, so checking only flagged cases leaves the routing decision largely invisible. Before expanding the role, the landlord needs to examine unflagged cases as well as flagged ones and establish which errors a reviewer can realistically detect, otherwise the apparent saving in advisers' time rests on an untested assumption about what the system has screened out.

If a person has to reconstruct every case from scratch to approve an AI summary, the proposed delegation has added a step. A smaller task can still be worthwhile: the agent assembles a referenced chronology, while the adviser checks the material claims and interprets the case. Compare that combined effort with the existing way of doing the work, including its delays and mistakes, before claiming a gain.

## Leave the decision with someone who can change it

Even a verified chronology doesn't settle how urgently the landlord should respond. The third question, **What judgment must remain human?**, identifies the choice that the agent's recommendation might otherwise make quietly.

Suppose the agent suggests a routine follow-up because the previous roof job is marked complete. The resident's new report calls that priority into question, while the cause of the leak remains uncertain. The adviser needs to weigh the report against what is known and be able to request a roof inspection instead of accepting the routine follow-up, or escalate to someone who can. If an inspection is chosen, the landlord must be able to explain what it's intended to establish. The agent can organise the evidence and show options, but its recommendation shouldn't be mistaken for a decision the service has already made.

Human judgement can be inconsistent too, and AI can bring an earlier report into view that an adviser might have missed. The person responsible still needs to be able to change the proposed priority and stop an unsupported commitment to the resident. A review screen that permits only approval would leave the consequential choice with the agent, whatever the workflow calls the person at the end. I have written more generally about giving [a human reviewer a real job](https://philipbudden.co.uk/posts/a-human-in-the-loop-needs-a-job/); in a repair case, that job includes deciding how the landlord responds when its record and the resident's account disagree.

## Where the uncertainty goes

The adviser may check the records and still be unable to tell why water is entering the bedroom. **Where does the uncertainty go?** asks what happens to that unfinished question when the case moves to the next person or the resident.

If the adviser sends the case to a contractor, the instruction needs to say that water returned after the roof work; otherwise the next visit can start from the wrong problem. A reply that implies the leak is fixed would leave the resident correcting an assurance the landlord had no basis to give. A useful handoff would say that the earlier roof work is recorded as complete, the resident reports continuing water ingress, and the cause remains to be established. It would also name who will arrange the next check and who will update the resident. The adviser may need to hold the proposed reply until those responsibilities are clear.

There's a cost to being open about what the landlord doesn't yet know. The resident may want a firm answer immediately, and a colleague has to own the follow-up. Concealing the gap doesn't remove that work; it leaves somebody else to discover it later, often after another visit or another call. If cases described as resolved repeatedly return with the same problem, that's evidence that the service has been passing uncertainty forward. The response should be to revisit what the summaries and closure decisions mean, not simply to produce them faster.

## Widen the agent's role on evidence

I'd start the proposed agent with a source-linked chronology that marks any conflict. It could suggest a next step, which an adviser remains free to reject. The adviser decides the priority and any promise to the resident. The landlord can measure time saved against the checking burden and record what the summaries miss. I'd require that evidence before giving the agent more of the route to run.

The Practical Delegation Test is a qualitative decision aid, and formal controls over information and safety still apply, as do approval requirements. If the landlord can't see the resident's new report alongside the completed job, the summary isn't ready to guide the next action, however quickly the agent produced it.

Responding sooner would help a resident with water entering a bedroom; an agent earns a place in that response when it helps the landlord understand and act on the new report. The resident shouldn't become the final quality check for a decision that looked complete inside the organisation.

---

_Generative AI is a powerful tool. I openly use it to conduct research, challenge my thinking, generate drafts, and review my work. AI never owns what I think, or my personal judgement. Everything I publish is a reflection of my own thoughts and opinions._
