export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Product' | 'Engineering' | 'Industry' | 'Company';
  date: string;
  readingTime: number;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'reactive-to-planned-ratio',
    title: "The One Number That Tells You If You're Winning",
    excerpt: "Most maintenance managers think they're 60/40 planned. The data says 20/80. The gap between those two numbers is the whole job.",
    category: 'Industry',
    date: '2026-04-19',
    readingTime: 5,
    content: `## Dave's Monday Standup

Dave manages maintenance at a food packaging plant outside Grand Rapids. Monday, 7am standup. He asks the room, "how'd we do last week?" Three techs nod. Somebody says "busy." Dave nods back. The meeting moves on.

Dave has been running this meeting for eleven years. He doesn't know whether last week was better than the fifty before it. He has a feeling. The feeling is wrong.

This is the core problem. The meeting happens. The data doesn't.

[[IMG:blog-reactive-ratio-hero-whiteboard.jpg|Maintenance supervisor facing a chaotic whiteboard in a plant maintenance office|The meeting happens. The data doesn't.]]

## What the Ratio Actually Is

There are two kinds of work in a maintenance department.

Planned work is the work you scheduled in advance. Preventive maintenance on the calendar. Inspections on the list. Repairs you saw coming.

Reactive work is the work that broke into your week. A bearing that failed at 2am. A belt that slipped on the second shift. The compressor that's been "fine" for three months until it wasn't.

World-class programs run 80% planned, 20% reactive. Most plants are flipped. The industry average sits closer to 30/70. Some plants are at 20/80 and don't know it.

Most plants aren't at 30/70 because their techs are lazy. They're at 30/70 because nobody is measuring it.

## Why You Can't Feel the Ratio

Every maintenance manager we talk to has an estimate. "I'd say we're about 60/40." When they actually run the numbers, it's 20/80.

The gap isn't denial. It's that reactive work feels small in the moment.

The bearing swap on Tuesday. The belt that slipped on Wednesday. The motor that had to come off at 2am on Thursday. The afternoon someone spent cleaning up after a coupling sheared. None of them felt like break-in work while they were happening. All of them were.

You can't feel a ratio. You have to count it.

## Why This Beats MTBF and PM Compliance

MTBF tells you what already broke. Useful, but lagging. By the time the number moves, the motor is already in the shop.

PM compliance tells you whether you did the PMs. But were they the right PMs on the right assets at the right frequency? PM compliance is a process metric dressed up as a strategic one.

The reactive-to-planned ratio is the only KPI that tells you whether your strategy is working. When it trends down, everything else follows: MTBF extends, overtime drops, parts spend steadies, OEE climbs.

MTBF tells you what broke. PM compliance tells you what you did. The reactive ratio tells you whether you're getting anywhere.

## The Counting Problem

The ratio is almost always wrong because the logging system is almost always broken.

Most CMMS platforms require a technician to log a work order for every task. On paper that sounds fine. In practice, a tech isn't going to open a laptop, click through three screens, and type a description for a fifteen-minute bearing repair. So the fifteen-minute jobs go uncounted. The ratio reflects only the work that was painful enough to log.

[[IMG:blog-reactive-ratio-clipboard-detail.jpg|Close-up of a weathered maintenance clipboard on an industrial workbench, with handwritten notes, a coffee ring stain, and oily thumbprints|This is where the ratio goes wrong. Not in the office. At the clipboard.]]

If your system makes logging a fifteen-minute repair feel like a fifteen-minute punishment, your reactive ratio is going to lie to you forever.

Every plant that ever fixed its reactive ratio fixed its logging first. Usually the fix is mobile-first work orders. A phone in the tech's pocket. Voice-to-text that turns a sentence into a structured WO in three seconds. The goal is to make logging a fifteen-minute job feel like a thirty-second job, because that is the only way it actually happens.

[The AI work order generator](/features#ai) was built for exactly this. A paragraph of field notes becomes a structured work order with title, priority, procedure, parts list, hours, and due date. We built it because the logging problem was the first thing every pilot plant surfaced.

## What to Do With the Number

At 70% reactive, you are in crisis. A PM schedule probably exists but isn't being run. Don't go buy a better CMMS. Go find out which PMs the team has been skipping, and why.

At 50% reactive, your PM frequencies are probably wrong. Some assets are getting PM'd monthly that should be weekly. Others are getting weekly PMs that could run quarterly. The work order data tells you which is which, once you start counting.

At 30% reactive, you are doing well. This is where you've earned the right to invest in condition-based monitoring. Time-based PMs max out around here. You cannot get lower than 30% by adding more PMs. You need sensors that tell you when a motor actually needs attention instead of when the calendar says it should.

Under 20% reactive, you are in the top 5% of plants. Tell other plant managers how you did it. They need to hear it.

## The Honest Upsell

Condition-based monitoring is how you break the 20% floor. Time-based PMs can't tell the healthy motor from the degrading one. They treat both the same. A real sensor on the motor can tell the difference. [Motor Monitor](/monitoring) does exactly this: a clamp-on sensor reads current, scores motor health every two seconds, and adjusts PM frequency based on what the motor is actually doing. You still run PMs. You just stop running them on motors that don't need one yet.

But that is chapter two. Chapter one is counting.

## Next Monday

[[IMG:blog-reactive-ratio-dashboard-payoff.jpg|A maintenance manager and a technician reviewing a dashboard on a wall-mounted monitor in a clean modern maintenance control room|Same meeting. Different number.]]

Next Monday, Dave will still walk into the standup and ask "how'd we do last week?" The only difference is this time, when the room nods, he'll have the number.`,
  },
  {
    slug: 'free-cmms-for-plants-that-need-it',
    title: 'We Built a Free CMMS. Here\'s What\'s In It.',
    excerpt: 'EdgePredict is a full maintenance management platform: work orders, PM scheduling, inspections, asset management, parts inventory, reporting, and AI-generated work orders. The base plan is free. Not a trial. Free.',
    category: 'Company',
    date: '2026-03-03',
    readingTime: 5,
    content: `EdgePredict is a full maintenance management platform. Work orders, PM scheduling, inspections, asset management, parts inventory, reporting, AI-generated work orders. The base plan is free. Not a trial. Not "free for 30 days." Free.

Why? Because 85% of small plants run maintenance on whiteboards. Not because they don't care about their equipment. Because enterprise CMMS software costs $50-100K to implement, and the cheap stuff is still $16-49 per user per month. That math doesn't work for a plant with a 3-person maintenance team.

We're electrical engineers and reliability professionals who've been on plant floors. We designed the sensor PCB, wrote the ESP32 firmware, and deployed the first pilot at a pharmaceutical plant by hand. We built this because we needed it and couldn't find it.

Here's what's actually in the free plan: work orders with full lifecycle tracking, PM scheduling with auto-generated templates, inspections with pass/fail checklists that auto-create corrective work orders, asset management with risk scoring, parts inventory with purchase orders, a reporting dashboard showing MTTR and PM compliance, and an AI work order generator that turns a paragraph of field notes into a structured work order in about 3 seconds.

When you're ready to go further, connect our motor monitoring sensors. Your PM schedules update based on real equipment data instead of a calendar.`,
  },
  {
    slug: 'ai-work-order-generation',
    title: 'Type Field Notes. Get a Work Order.',
    excerpt: 'Every maintenance manager we\'ve talked to says the same thing: technicians don\'t fill out work orders because it takes too long. EdgePredict\'s AI work order generator fixes this.',
    category: 'Product',
    date: '2026-03-04',
    readingTime: 4,
    content: `Every maintenance manager we've talked to says the same thing: technicians don't fill out work orders because it takes too long.

So we built something. You type: "pump 3 making grinding noise, bearings probably shot, needs seal kit, do it before Friday." You get back a structured work order with a title, priority level, 8-step procedure, parts list, estimated hours, and a due date.

One paragraph. About 3 seconds.

The AI also learns from corrections. Change the estimated hours for a specific pump type and it remembers next time. Your technicians already know what's wrong with the equipment. They just hate paperwork. This removes the paperwork.`,
  },
  {
    slug: 'true-cost-of-motor-failure',
    title: 'The $40,000 Motor Failure',
    excerpt: 'The math on one unplanned motor failure. 75 HP pump, bearing seizure. 8 hours of production downtime. One failure, one motor, one bad day.',
    category: 'Industry',
    date: '2026-03-05',
    readingTime: 3,
    content: `Let's do the math on one unplanned motor failure. A 75 HP pump, bearing seizure.

8 hours of production downtime: $20,000. Expedited parts: $6,200. Emergency contractor labor: $4,500. Scrap and WIP loss: $5,800. Cascade delays to downstream processes: $3,500. Total: $40,000.

One motor. One failure. One bad day.

EdgePredict sensor monitoring runs $200/month per motor. $40,000 divided by $200 equals 200 months. That's over 16 years of monitoring paid for by one prevented failure. And the management platform is free.

Most plants don't think they have a $40,000 problem. They do. They just haven't seen it yet.`,
  },
  {
    slug: 'pm-scheduling-tribal-knowledge',
    title: 'Tribal Knowledge Is Not a Maintenance Strategy',
    excerpt: 'How does preventive maintenance work at most small plants? Someone remembers. Or they don\'t. "We grease the bearings every... I think Jim does that quarterly. Jim retired last year."',
    category: 'Product',
    date: '2026-03-06',
    readingTime: 4,
    content: `How does preventive maintenance actually work at most small plants?

Someone remembers. Or they don't. "We grease the bearings every... I think Jim does that quarterly. Jim retired last year."

Tribal knowledge is a single point of failure with a retirement date.

EdgePredict generates PM schedules automatically when you add equipment. Tell it you have a 75HP centrifugal pump and it creates monthly, quarterly, and annual tasks. Every event shows up on a calendar, color-coded by risk. Complete a PM and it logs to work order history. Skip one and the risk score goes up and it shows as overdue.

Connect a sensor and your time-based schedules become condition-based. Grease when the current signature shows degradation or at 90 days, whichever comes first. No more guessing.`,
  },
  {
    slug: 'drag-and-drop-maintenance-scheduling',
    title: 'Your Monday Morning Scheduling Meeting Just Got Shorter',
    excerpt: 'A maintenance supervisor spends about 2 hours every Monday morning figuring out who does what. EdgePredict\'s schedule board replaces most of that with a 10-second button click.',
    category: 'Product',
    date: '2026-03-07',
    readingTime: 3,
    content: `A maintenance supervisor spends about 2 hours every Monday morning figuring out who does what. This is not a great use of anyone's time.

EdgePredict's schedule board shows your week with each technician in a lane. Unscheduled work orders sit in a pool on the side. Drag a work order onto a day and a tech. Done.

There's also an AI suggestion button. It looks at work order priority, due dates, technician workload, and availability, then suggests an optimized schedule for the week. Click it, review it, confirm it.

That's about 100 hours a year of Monday morning scheduling replaced by a 10-second button click.

The scheduler also tracks break-in work. Over time you can see exactly how much reactive maintenance is eating your planned maintenance capacity. Most supervisors are surprised by that number.`,
  },
  {
    slug: 'electrical-signature-analysis-explained',
    title: 'What Electrical Signature Analysis Actually Detects',
    excerpt: 'ESA reads the current flowing through your motor leads. Three clamp-on CTs, no rewiring, no shaft access, no accelerometer mounting on hot rotating equipment.',
    category: 'Engineering',
    date: '2026-03-08',
    readingTime: 5,
    content: `ESA reads the current flowing through your motor leads. Three clamp-on CTs. No rewiring. No shaft access. No accelerometer mounting on hot rotating equipment.

Here's what current can tell you. Phase imbalance is an early indicator of winding degradation or supply issues. Phase loss happens when single-phasing destroys motors in minutes. ESA catches it instantly. Overload means current above baseline, which could indicate a seized bearing or blocked impeller. Load instability shows up as current fluctuations from intermittent mechanical problems. Certain current patterns also correlate with bearing wear, rotor bar cracks, and eccentricity.

All of this from a non-invasive clamp installed in about 20 minutes.

Cellular connectivity means no plant network involved. No IT ticket, no approval process, no waiting 6 weeks for someone to open a firewall port.

The motor's current is already carrying information about its health. We built hardware and software to listen to it.`,
  },
  {
    slug: 'inspections-that-create-work-orders',
    title: 'When an Inspection Fails, What Happens Next?',
    excerpt: 'At most plants, inspections go like this: clipboard, check boxes, find a problem, tell someone, hope they create a work order, hope it gets assigned, hope it gets done.',
    category: 'Product',
    date: '2026-03-09',
    readingTime: 3,
    content: `Here's how inspections work at most plants. Clipboard. Check boxes. Find a problem. Tell someone. Hope they create a work order. Hope it gets assigned. Hope it gets done.

Steps 4 through 7 are where maintenance programs fall apart.

In EdgePredict, when a checklist item fails, the system asks "Create corrective work order?" One click. The work order gets created with the asset, the deficiency, the priority, and a link back to the inspection. No handoff. No hoping.

Inspections also auto-schedule based on frequency. Set up "Monthly Safety Walkdown" once and it generates forever. Miss one and it shows as overdue. Your compliance rate is always visible.

Inspections aren't a formality. They're the first line of your maintenance program.`,
  },
  {
    slug: '85-percent-have-nothing',
    title: '85% of Small Plants Have No Maintenance System',
    excerpt: 'Less than 15% of small and mid-size manufacturing plants use any CMMS. The other 85% run on whiteboards, spreadsheets, and tribal knowledge.',
    category: 'Industry',
    date: '2026-03-10',
    readingTime: 4,
    content: `Less than 15% of small and mid-size manufacturing plants use any CMMS. The other 85% run on whiteboards, spreadsheets, and tribal knowledge.

It's not laziness. Enterprise CMMS costs $50-100K to implement. The affordable options run $16-49 per user per month. For a 5-person maintenance team, that's a real expense for software that's usually harder to use than a spreadsheet.

Meanwhile: motors fail without warning, PM schedules live inside one person's head, new hires don't know what the last guy knew, and emergency repairs cost 3-5x what planned maintenance costs.

EdgePredict was built for the 85%. Not the plants with enterprise budgets. The ones that actually have nothing. Free, unlimited, and genuinely useful from day one.`,
  },
  {
    slug: 'the-monitoring-gap',
    title: '100,000 Plants in the Monitoring Gap',
    excerpt: 'The motor monitoring market has three tiers: enterprise systems starting at $500-2,000/month per asset, nothing, and the gap. Plants that know they should be monitoring but can\'t justify enterprise prices.',
    category: 'Industry',
    date: '2026-03-11',
    readingTime: 4,
    content: `The motor monitoring market has three tiers.

Enterprise: Augury, Tractian, SKF, ABB. Starting at $500-2,000/month per asset with $50-100K setup. Works great if your maintenance budget has six figures to spare.

Nothing: 85% of small plants. Whiteboards. No data. Run to failure and hope for the best.

And then the gap: plants that know they should be monitoring equipment but can't justify the enterprise price tag. By our estimate, that's over 100,000 facilities.

EdgePredict was built for the gap. $200/month per motor. 20-minute install. Cellular connection, no IT involvement. And the entire maintenance management platform is free.

The gap isn't a market failure. It's a market that enterprise vendors are too expensive to serve and CMMS-only vendors don't have hardware to fill.`,
  },
  {
    slug: 'why-we-give-the-platform-away',
    title: 'Why Our CMMS Is Free (The Honest Answer)',
    excerpt: 'We make money on sensors. $200/month per motor for hardware that monitors equipment and feeds condition data into maintenance schedules. But nobody buys sensors for a problem they don\'t know they have.',
    category: 'Company',
    date: '2026-03-12',
    readingTime: 4,
    content: `We make money on sensors. $200/month per motor for hardware that monitors equipment and feeds condition data back into the maintenance schedule.

But nobody buys sensors for a problem they don't know they have.

If a plant has no maintenance system, they can't tell you which motors are critical. They don't track failures. They have no idea what their PM compliance rate is. Give them a real CMMS and suddenly they can see all of it. The data tells the story: "Pump P-101 failed 3 times this year, $45K total cost."

At that point the question changes. It's not "should we monitor this pump?" It's "why aren't we monitoring it already?"

The free platform isn't charity. It's the best sales tool we've ever built. Give people real data about their own equipment and they sell themselves.`,
  },
  {
    slug: 'stop-duct-taping-your-maintenance-stack',
    title: 'Stop Duct-Taping Your Maintenance Stack',
    excerpt: 'Most plants run maintenance across 3-5 disconnected tools. A CMMS here, a spreadsheet there, a sensor dashboard somewhere else. We built one platform that does all of it.',
    category: 'Product',
    date: '2026-04-09',
    readingTime: 5,
    content: `Walk into most small or mid-size plants and ask how they manage maintenance. You'll hear some version of the same story.

Work orders live in one system. PM schedules live in someone's head or a spreadsheet taped to the wall. Inspections get done on clipboards and filed in a cabinet nobody opens. Parts inventory is a guy who "just knows" what's on the shelf. And if they have any monitoring at all, it's a separate dashboard that nobody checks until something is already broken.

That's not a maintenance program. That's duct tape.

## The Real Cost of Disconnected Tools

The problem isn't that these tools don't work individually. MaintainX handles work orders fine. A vibration sensor can detect a bearing fault. Excel can track parts. The problem is none of them talk to each other.

When your sensor flags a motor issue, someone has to manually create a work order. When that work order gets completed, someone has to manually update the asset history. When you want to know your MTTR or PM compliance rate, someone has to pull data from three different places and hope the numbers line up.

Every handoff is a place where information gets lost. Every manual step is a step that doesn't happen on a busy day. And every disconnected system is another login, another subscription, another vendor who doesn't care about your workflow.

For a 25-person maintenance team, the typical stack looks like this:

- CMMS: $16-49/user/month ($400-$1,225/mo)
- Sensor platform: $300-500/motor/month
- Spreadsheets for everything else: "free" but costing you hours
- Integration middleware: if you're lucky, a Zapier plan

That's $1,000-2,000/month in software alone, and the data still doesn't flow.

## What "One Platform" Actually Means

EdgePredict was built as one system from day one. Not a CMMS that bolted on sensors. Not a monitoring tool that added a work order form. One platform where every piece of maintenance operations lives together.

Here's what that looks like in practice:

**A sensor flags a bearing fault on Pump P-101.** The platform automatically creates a work order with the asset, fault description, and priority pre-filled. The technician gets a push notification on their phone. They pull up the work order, see the sensor trend data right there, grab the replacement bearing from parts inventory (which updates automatically), complete the repair, and close the work order. The asset history updates. Your MTTR dashboard updates. Your PM schedule adjusts.

No copy-paste. No switching tabs. No "I'll update the spreadsheet later."

**An inspection reveals a leaking seal on a gearbox.** The inspection checklist auto-creates a corrective work order. The work order links back to the inspection finding. When the repair is done, both records close together. Your compliance report reflects reality, not what someone remembered to log.

**Your weekly report shows PM compliance dropped to 72%.** You drill into the data and see which assets are overdue, which technicians are overloaded, and which PMs keep getting deferred. All in the same system where you schedule the fix.

## Why This Doesn't Exist Elsewhere

Enterprise platforms like SAP PM and Maximo technically do all of this. They also cost $50-100K to implement, take 6-12 months to deploy, and require a dedicated admin. That's fine for a Fortune 500 refinery. It's absurd for a 50-person food processing plant.

On the other end, the affordable CMMS tools — MaintainX, UpKeep, Limble — are genuinely good at work orders and PMs. But they stop there. No monitoring integration. No condition-based PM triggers. No sensor data in the same view as your maintenance history. If you want monitoring, you're buying a second platform and hoping someone builds an integration.

We built EdgePredict because we saw that gap. Our team comes from plant floors — electrical engineers and reliability professionals who got tired of explaining to software vendors what a maintenance program actually needs.

The result: work orders, PM scheduling, inspections, playbooks, parts inventory, reporting, team chat, AI work order generation, and live motor monitoring. One login. One platform. Free to start, $99/mo for Pro, $200/mo per motor for condition monitoring with hardware included.

## The Playbook No One Else Gives You

Here's something no other platform does: we include maintenance playbooks — structured best practices for building a real maintenance program. Not just software features, but the operational knowledge that turns a reactive team into a proactive one.

Most plants don't fail because of bad software. They fail because nobody taught them how to run a maintenance program. We built that education into the platform itself.

## One Platform. No Duct Tape.

If you're running maintenance across three tools and a spreadsheet, you already know the problem. Every disconnected system is a place where information dies.

EdgePredict is the maintenance platform your plant actually needs. Everything in one place. Free to start. Built by engineers who've been on your floor.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
