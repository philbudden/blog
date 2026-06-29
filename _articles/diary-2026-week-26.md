---
title: "Diary: Week 26, 2026"
date: 2026-06-28
summary: "A weekly diary entry on a large SQL Server cut-over, the operational detail around it, and what the week clarified."
tags:
  - diary
  - sql-server
  - data-engineering
  - operations
series: diary
draft: false
layout: article
---

I’m starting these diary posts with a week that felt less like neat progress and more like landing a large piece of work without dropping anything important on the way down.

Most of the week revolved around a Data Warehouse cut-over to a new SQL Server instance, that had been hanging over things for a while. By the end of the week, the important outcome was in place: reporting was back up, analysts had repointed their dashboards, the schedules were running again, and the whole thing had moved from “active migration” into “follow-up and mop-up”. That is the tidy version, anyway. The lived version was messier, more instructive, and probably more representative of how this kind of work usually goes.

The part that stands out most is how rarely the hard bit is just the headline task. In theory, the challenge was moving data from one place to another. In practice, the real job was managing everything around that: partial failures, refresh sequencing, manual schema fixes, odd edge cases, user access, alerting, and the judgement calls about what really needed to be perfect before the business could carry on.

## The migration was the centre of gravity

Early in the week the cut-over still felt like a live operation. We got the current records across, took a proper progress backup, and then pushed into the historical load. That overnight stage was interrupted because the laptop orchestrating it went to sleep, which is exactly the sort of failure that feels embarrassing and useful at the same time. Annoying in the moment, but a very clear reminder that business-critical orchestration should live somewhere more durable than a machine that can quietly decide it is bedtime. This one is completely on me, I would usually orchestrate long-running processes using Python from an Ubuntu VM we have setup specifically for this. I can reattach to the session in the morning, but for this task we were using stored procedures running on the SQL Server box, for reasons, and the fact that the machine which called the procedure losing connection to the server would kill the execution never even occurred to me.

Even so, the week ended in a much better place than that interruption might suggest. The bulk historical run mostly completed, the important schemas were cut over, the data refresh sequence ran, and the analysts were able to switch dashboards over to the new warehouse. There were still loose ends, but they had been reduced to the right kind of loose ends: known issues with known owners rather than a general sense of fragility.

That distinction matters. A system does not need to be cosmetically perfect to be operationally usable. It does need its risks to be understood, contained, and made visible. One of the more useful decisions this week was to stop chasing every remaining historical wrinkle before letting the refresh run and the reporting handover happen. That was the point where the work shifted from “finish everything” to “do the next thing that most improves reality”.

## The interesting work was in the edges

The detail I keep coming back to is how many of the important discoveries came from the edges of the system rather than its centre.

One table failed because it contained a transaction dated about six thousand years into the future, which is a strong contender for the least subtle data-quality problem of the week. A business-critical schema had been missed because its parameters did not fit the pattern used to seed the cut-over control set. The warehouse failure alerting Logic App looked repointed until it turned out the new connection was timing out. A missing snapshot turned out not to be a broken snapshot at all, but the downstream effect of blank source parameters, upstream.

None of those issues were the “main event”, but collectively they are the work. They are the bits that tell you whether a migration is actually robust or whether it only looked successful from far enough away.

## Ending the week by stepping away

By Thursday afternoon, the migration had settled down enough that the sensible thing was not to keep fussing with it. Reporting was back to normal, the remaining issues had either been handed into backlog ownership or reduced to a specific follow-up, and I got to start my planned 4-day weekend without that uncomfortable feeling that everything was one wobble away from breaking.

That left me with a slightly odd but useful end to the week. After several days of fairly intense operational work, the best move was to stop. Not to invent a heroic final push, not to keep polishing for the sake of it, but to recognise that the work had crossed the line from urgent to manageable. There is a kind of discipline in that too.

Next week will probably be less dramatic. I expect it to be more about finishing the bits that now have clear shapes: mop up the remaining historical recovery, review the plan for our new "Silver Layer" and start turning it into something actionable, and keep improving the scaffolding around how I work rather than only reacting to whatever is loudest. After this week, that feels like the right direction.
