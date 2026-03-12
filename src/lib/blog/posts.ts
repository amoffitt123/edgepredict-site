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
    slug: 'free-cmms-for-plants-that-need-it',
    title: 'We Built a Free CMMS. Here\'s What\'s In It.',
    excerpt: 'EdgePredict is a full maintenance management platform: work orders, PM scheduling, inspections, asset management, parts inventory, reporting, and AI-generated work orders. The base plan is free. Not a trial. Free.',
    category: 'Company',
    date: '2026-03-03',
    readingTime: 5,
    content: `EdgePredict is a full maintenance management platform. Work orders, PM scheduling, inspections, asset management, parts inventory, reporting, AI-generated work orders. The base plan is free. Not a trial. Not "free for 30 days." Free.

Why? Because 85% of small plants run maintenance on whiteboards. Not because they don't care about their equipment. Because enterprise CMMS software costs $50-100K to implement, and the cheap stuff is still $16-49 per user per month. That math doesn't work for a plant with a 3-person maintenance team.

We're electrical engineers and reliability professionals who've been on plant floors. Our founder designed the sensor PCB, wrote the ESP32 firmware, and deployed the first pilot at a pharmaceutical plant by hand. We built this because we needed it and couldn't find it.

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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
