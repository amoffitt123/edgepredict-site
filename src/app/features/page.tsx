import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import FeatureSidebar from "@/components/FeatureSidebar";

export const metadata = {
  title: "Features — EdgePredict CMMS",
  description:
    "158 API endpoints. Work orders, PM scheduling, inspections, asset management, parts inventory, AI work order generation, motor monitoring, and more. Free for any plant size.",
  alternates: {
    canonical: "https://www.edgepredict.io/features",
  },
  openGraph: {
    title: "Features — EdgePredict CMMS",
    description: "158 API endpoints. Every feature a maintenance team needs. Free for any plant size.",
    url: "https://www.edgepredict.io/features",
    type: "website",
  },
};

/* ── Badge helpers ─────────────────────────────────────────────────── */
function Free() {
  return (
    <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 ml-2 flex-shrink-0">
      Free
    </span>
  );
}
function Pro() {
  return (
    <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-[#7655d6]/10 text-[#7655d6] ml-2 flex-shrink-0">
      Pro
    </span>
  );
}

/* ── Feature item ──────────────────────────────────────────────────── */
function Feat({
  name,
  desc,
  tier,
}: {
  name: string;
  desc: string;
  tier: "free" | "pro" | "monitor";
}) {
  return (
    <li className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
      <CheckCircle
        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
          tier === "monitor" ? "text-cyan-500" : "text-green-500"
        }`}
      />
      <div className="min-w-0">
        <span className="text-sm font-medium text-slate-900">{name}</span>
        {tier === "free" && <Free />}
        {tier === "pro" && <Pro />}
        {tier === "monitor" && (
          <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 ml-2 flex-shrink-0">
            Monitor
          </span>
        )}
        <p className="text-sm text-slate-500 mt-0.5 leading-snug">{desc}</p>
      </div>
    </li>
  );
}

/* ── Section wrapper ───────────────────────────────────────────────── */
function Module({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6 pb-3 border-b border-slate-200">
        {title}
      </h2>
      <ul className="divide-y-0">{children}</ul>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */

export default function FeaturesPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-4">
            Platform Features
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            158 API endpoints.<br />
            <span className="text-[#7655d6]">Every feature a maintenance team needs.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            Most CMMS tools make you pay for features we give away free. This is the full list.
            No paywalls on the features that matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-lg hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-xl hover:border-slate-400 hover:text-white transition-all duration-200"
            >
              See Pricing
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Green = Free tier
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7655d6]" />
              Purple = Pro ($99/mo)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              Cyan = Monitor tier
            </span>
          </div>
        </div>
      </section>

      {/* ── Body: sidebar + content ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">

          {/* Sticky sidebar (client component handles scroll spy) */}
          <FeatureSidebar />

          {/* Feature modules */}
          <div>

            {/* ── Work Orders ───────────────────────────────────────── */}
            <Module id="work-orders" title="Work Orders">
              <Feat tier="free" name="Create and assign work orders" desc="Open, assign, prioritize, and close work orders. Full field set: asset, location, type, priority, description, estimated hours, attachments." />
              <Feat tier="free" name="10-status lifecycle" desc="Draft, Open, On Hold, In Progress, Waiting for Parts, Waiting for Approval, Paused, Declined, Completed, Closed. Every transition timestamped." />
              <Feat tier="free" name="Full audit trail" desc="Every field change, status transition, comment, and assignment logged with user and timestamp. Nothing disappears." />
              <Feat tier="free" name="Checklists within work orders" desc="Add step-by-step task checklists. Technicians check off steps as they go. Required or optional. Fails block completion if marked required." />
              <Feat tier="free" name="Labor hours tracking" desc="Log hours per technician per work order. Compare estimated vs. actual. Roll up to asset and category." />
              <Feat tier="free" name="Parts consumed on work orders" desc="Pull parts from inventory directly on the work order. Decrements stock automatically. Shows cost per job." />
              <Feat tier="free" name="3 attachments per work order" desc="Photos, PDFs, wiring diagrams. Upload from mobile or desktop." />
              <Feat tier="free" name="Work order comments and activity feed" desc="All comments, status changes, and reassignments in a single thread. Mention teammates." />
              <Feat tier="free" name="Bulk status update" desc="Select multiple work orders and change status in one action. Useful for end-of-shift completions." />
              <Feat tier="free" name="Saved table views and filters" desc="Filter by status, priority, asset, assignee, due date. Save any filter combination as a named view." />
              <Feat tier="free" name="CSV export of work orders" desc="Export the full filtered work order list to CSV. Includes all fields." />
              <Feat tier="free" name="PDF generation" desc="Print-ready PDF for any work order. Includes checklist, labor, parts, comments, and signature field." />
              <Feat tier="pro" name="Unlimited attachments" desc="Remove the 3-attachment limit. Attach full inspection reports, equipment manuals, and photos without restriction." />
              <Feat tier="pro" name="Custom fields" desc="Add facility-specific fields to work orders: production line, shift, contractor name, permit number. Any field type." />
              <Feat tier="pro" name="Purchase orders from work orders" desc="Create a PO directly from a work order when parts need to be ordered. PO lifecycle tracked through receipt." />
            </Module>

            {/* ── Preventive Maintenance ────────────────────────────── */}
            <Module id="preventive-pm" title="Preventive Maintenance">
              <Feat tier="free" name="Auto-generated PM schedules" desc="Add an asset with type and HP rating. EdgePredict generates monthly, quarterly, and annual PM tasks automatically. Edit or extend as needed." />
              <Feat tier="free" name="Frequency-based scheduling" desc="Daily, weekly, monthly, quarterly, semi-annual, annual, or custom intervals. Each interval generates its own recurring events." />
              <Feat tier="free" name="PM calendar view" desc="Color-coded calendar: red for overdue, amber for due within 7 days, green for on track. See your whole program at a glance." />
              <Feat tier="free" name="PM history log" desc="Every completed PM logged with who did it, what was found, parts used, and time spent." />
              <Feat tier="free" name="Risk score per asset" desc="Computed from criticality rating, time since last PM, open work orders, and (with sensors) health score. Tells you which equipment needs attention first." />
              <Feat tier="free" name="PM template library" desc="Reusable PM templates by asset type. Apply to new assets without rebuilding from scratch." />
              <Feat tier="monitor" name="Condition-based PM triggers" desc="When sensor health score drops below a configurable threshold, PM frequency increases automatically. No manual intervention." />
              <Feat tier="monitor" name="Dynamic PM scheduling" desc="Sensor data adjusts intervals in real time. A motor running clean at 100% health can extend its interval. A degrading motor gets bumped forward." />
            </Module>

            {/* ── Inspections ───────────────────────────────────────── */}
            <Module id="inspections" title="Inspections">
              <Feat tier="free" name="Inspection templates" desc="Build reusable checklists with pass/fail, numeric, text, and photo capture items. Assign to asset types." />
              <Feat tier="free" name="Auto-scheduled inspections" desc="Set a frequency once. Inspections generate automatically on schedule. Miss one and it shows as overdue with a compliance hit." />
              <Feat tier="free" name="Auto-corrective work orders on failure" desc="When a checklist item fails, EdgePredict asks to create a corrective work order. One click: asset, deficiency, priority, and link back to the inspection auto-filled." />
              <Feat tier="free" name="Inspection PDF report" desc="Generate a formatted PDF of any completed inspection including all item responses, photos, and failure notes." />
              <Feat tier="free" name="Inspection compliance tracking" desc="PM compliance rate visible in dashboard. See which assets are behind on inspections." />
              <Feat tier="free" name="Mobile inspection completion" desc="Technicians complete inspections on mobile. Camera capture for photo items. Works offline." />
            </Module>

            {/* ── Scheduling ────────────────────────────────────────── */}
            <Module id="scheduling" title="Scheduling">
              <Feat tier="free" name="Schedule board" desc="Week view with each technician in a lane. Unscheduled work orders in a side panel. See workload distribution at a glance." />
              <Feat tier="pro" name="Drag-and-drop assignment" desc="Drag any unscheduled work order onto a technician and day. Instantly assigned. Technician gets notified." />
              <Feat tier="pro" name="AI scheduling suggestions" desc="One-click AI optimization. Looks at work order priority, due dates, technician availability, and workload balance. Suggests an optimized week. Review and confirm." />
              <Feat tier="pro" name="Break-in work tracking" desc="Flag reactive work orders that break into planned schedules. Dashboard shows ratio of reactive to planned over time. Most supervisors are surprised by this number." />
              <Feat tier="pro" name="Schedule PDF export" desc="Print the week's schedule as a PDF for shift handoffs and planning meetings." />
            </Module>

            {/* ── Assets & Locations ────────────────────────────────── */}
            <Module id="assets" title="Assets &amp; Locations">
              <Feat tier="free" name="Asset registry" desc="Register every motor, pump, compressor, conveyor, HVAC unit. Nameplate data, model, serial, install date, manufacturer, cost." />
              <Feat tier="free" name="Asset hierarchy" desc="Organize assets under locations, systems, and sub-systems. Multi-level tree. Supports complex plant layouts." />
              <Feat tier="free" name="Criticality rating" desc="Rate each asset 1-5 for criticality. Feeds into risk score and helps prioritize monitoring investment." />
              <Feat tier="free" name="Bulk CSV import" desc="Import your entire asset list from a spreadsheet. Map columns to EdgePredict fields. Handles hundreds of assets in one upload." />
              <Feat tier="free" name="Bill of Materials (BOM) per asset" desc="List every component part for each asset. Bearings, belts, seals, impellers. Makes parts ordering faster and more accurate." />
              <Feat tier="free" name="Equipment kits" desc="Group related assets or components into kits for inspection or PM purposes. Useful for packaged equipment with multiple sub-components." />
              <Feat tier="free" name="QR code generation per asset" desc="Generate a QR code for any asset. Print and attach to the equipment. Scanning opens the asset record immediately." />
              <Feat tier="free" name="QR scan workflows" desc="Scan to view asset info, report a problem, start a PM, or start an inspection. No typing required on the floor." />
              <Feat tier="free" name="Floor plan upload and asset pinning" desc="Upload a facility floor plan image. Pin assets to their physical location. Visual plant map always current." />
              <Feat tier="free" name="Asset summary PDF" desc="Printable summary for any asset: nameplate data, PM history, open work orders, parts list, and risk score." />
            </Module>

            {/* ── Parts & Inventory ─────────────────────────────────── */}
            <Module id="parts" title="Parts &amp; Inventory">
              <Feat tier="free" name="Parts catalog" desc="Every spare part: part number, description, unit cost, storage location, quantity on hand, reorder point." />
              <Feat tier="free" name="Stock level tracking" desc="Quantity updates automatically when parts are pulled on work orders or received on purchase orders." />
              <Feat tier="free" name="Reorder alerts" desc="Get notified when any part drops below its reorder point. Never be caught without a critical spare." />
              <Feat tier="free" name="Parts usage history" desc="See which work orders consumed each part, when, and how much. Track consumption rate to improve reorder points." />
              <Feat tier="free" name="Associate parts with assets" desc="Link parts to the assets they belong to. When you open a work order for a pump, its BOM parts are suggested." />
              <Feat tier="free" name="CSV import and export" desc="Import your existing parts list. Export current inventory for audits or purchasing." />
              <Feat tier="pro" name="Purchase orders" desc="Create POs directly from parts needs. Vendor, line items, quantities, expected delivery date. PO lifecycle: Draft, Submitted, Partially Received, Received, Closed." />
              <Feat tier="pro" name="Receive against PO" desc="Log receipt of parts against open POs. Partial receipts handled. Stock updates automatically on receipt." />
            </Module>

            {/* ── Team & Roles ──────────────────────────────────────── */}
            <Module id="team" title="Team &amp; Roles">
              <Feat tier="free" name="6 RBAC roles" desc="Admin, Supervisor, Planner, Scheduler, Technician, and Requestor. Each role has a specific permission set tailored to what that person actually needs." />
              <Feat tier="free" name="46 granular permissions" desc="Fine-grained control beyond role defaults. Modify permissions per user if needed." />
              <Feat tier="free" name="Multi-tenant organizations" desc="Multiple sites or business units under one account. Users can belong to one or multiple orgs. Data is fully isolated between orgs." />
              <Feat tier="free" name="Team chat with channels" desc="Dedicated channels per team, asset, or project. Direct messages. No need for a separate Slack workspace for maintenance." />
              <Feat tier="free" name="Message reactions and forwarding" desc="React to messages with emoji. Forward a message to another channel or DM. Keep conversations organized." />
              <Feat tier="free" name="Vendor portal" desc="Give external contractors or vendors secure, tokenized access to specific work orders. No full account required. They see only what they need." />
              <Feat tier="free" name="Public maintenance request portal" desc="External link any employee can use to submit a maintenance request. No login required. Requests feed directly into the work order queue for review." />
              <Feat tier="free" name="Onboarding wizard" desc="Guided setup for new accounts. Walk through adding your first location, assets, and team members. Most plants are running in under 30 minutes." />
              <Feat tier="free" name="Demo mode" desc="Pre-loaded sample data so you can see every feature before entering your own assets. Toggle off when ready to go live." />
            </Module>

            {/* ── Automation & Notifications ────────────────────────── */}
            <Module id="automation" title="Automation &amp; Notifications">
              <Feat tier="free" name="Email notifications" desc="Notify assignees when work orders are created, updated, or due. Configurable per event type and role." />
              <Feat tier="free" name="In-app notifications" desc="Bell notification center. All events in one place. Mark as read individually or in bulk." />
              <Feat tier="free" name="Downtime tracking" desc="Log downtime events against assets. Duration, cause category, and affected production. Roll up to OEE calculations." />
              <Feat tier="free" name="Production and shift logs" desc="End-of-shift log entries. What ran, what broke, what was completed. Searchable. Linked to assets and work orders." />
              <Feat tier="pro" name="Automation rules" desc="Trigger actions from events: work order status change, asset health threshold, inspection failure. Actions include create work order, send notification, update field, assign to user." />
              <Feat tier="pro" name="SOPs library" desc="Write and version standard operating procedures. Link SOPs to asset types so they appear on relevant work orders. Technicians see the right procedure at the right time." />
              <Feat tier="monitor" name="Condition triggers from sensor data" desc="Sensor health score drops below threshold: work order created automatically. Alert sent. PM schedule updated. Zero manual steps." />
              <Feat tier="monitor" name="Sensor-auto-detected downtime" desc="When a motor transitions from running to stopped unexpectedly, EdgePredict can flag a potential unplanned downtime event for review." />
            </Module>

            {/* ── Reporting & Analytics ─────────────────────────────── */}
            <Module id="reporting" title="Reporting &amp; Analytics">
              <Feat tier="free" name="MTTR (Mean Time to Repair)" desc="Average time from work order creation to completion, by asset, category, or time period. See where repairs take longest." />
              <Feat tier="free" name="PM compliance rate" desc="Percentage of scheduled PMs completed on time. Drill down by asset, location, or technician." />
              <Feat tier="free" name="Work order backlog" desc="Count of open work orders by age bucket. See how long work has been sitting unresolved." />
              <Feat tier="free" name="Parts usage report" desc="Which parts were consumed, on which assets, over which time period. Informs reorder strategy." />
              <Feat tier="pro" name="OEE dashboard" desc="Overall Equipment Effectiveness. Availability, performance, and quality inputs. Pulls from downtime logs and production data." />
              <Feat tier="pro" name="KPI dashboard" desc="Configurable KPI tiles: work orders by status, PM compliance trend, MTTR trend, reactive vs. planned ratio, top failing assets." />
              <Feat tier="pro" name="Pulse reports" desc="Weekly or monthly automated summary emailed to managers. Highlights what closed, what is overdue, what is trending worse, and what needs attention." />
              <Feat tier="pro" name="Maintenance playbooks" desc="Export a comprehensive maintenance summary for any asset: full PM history, failure history, cost totals, parts consumed. Useful for reliability audits." />
              <Feat tier="pro" name="Reactive vs. planned ratio" desc="Track how much of your team's time goes to break-in work vs. planned maintenance. The single most important leading indicator of program health." />
            </Module>

            {/* ── AI Features ───────────────────────────────────────── */}
            <Module id="ai" title="AI Features">
              <Feat tier="free" name="AI work order generator (Gemini)" desc='Type a paragraph of field notes: "pump 3 grinding noise, bearings probably shot, needs seal kit, before Friday." Get back a structured work order with title, priority, 8-step procedure, parts list, estimated hours, and due date. About 3 seconds.' />
              <Feat tier="free" name="AI learns from corrections" desc="Change the estimated hours or procedure for a specific asset type and the AI applies that learning to future work orders for similar equipment." />
              <Feat tier="pro" name="AI scheduling optimization" desc="One-click weekly schedule suggestion. Considers work order priority, due dates, technician workload, availability, and skill match. Returns an optimized schedule for review and confirmation." />
            </Module>

            {/* ── Mobile App ────────────────────────────────────────── */}
            <Module id="mobile" title="Mobile App">
              <Feat tier="free" name="iOS and Android apps" desc="Full-featured mobile apps. Not a mobile web wrapper. Native performance." />
              <Feat tier="free" name="Offline mode" desc="Work orders, PMs, and inspections accessible and completable without a network connection. Sync when back online." />
              <Feat tier="free" name="QR scan from mobile camera" desc="Scan an asset QR code to instantly open its record, start a work order, or begin an inspection. No typing the asset name." />
              <Feat tier="free" name="Photo capture on work orders and inspections" desc="Attach photos directly from mobile camera on any work order or inspection item. Compressed and uploaded automatically." />
              <Feat tier="free" name="Push notifications" desc="Work order assigned, PM due, inspection overdue. Configurable per event type." />
            </Module>

            {/* ── Integrations ──────────────────────────────────────── */}
            <Module id="integrations" title="Integrations">
              <Feat tier="free" name="REST API (158 endpoints)" desc="Full API coverage for every object: assets, work orders, PMs, inspections, parts, users, locations, organizations. Authenticated with API keys." />
              <Feat tier="free" name="CSV import / export for all objects" desc="Import and export assets, parts, work orders. Bring your existing data in without manual re-entry." />
              <Feat tier="pro" name="QuickBooks Online integration" desc="Sync work order costs, parts expenses, and purchase orders to QuickBooks. Keep accounting and maintenance data aligned without double entry." />
            </Module>

            {/* ── Motor Monitoring ──────────────────────────────────── */}
            <Module id="motor-monitoring" title="Motor Monitoring">
              <Feat tier="monitor" name="3-phase current monitoring" desc="Split-core CTs clamp onto motor feeder conductors. Non-invasive. No rewiring. No shaft access. Handles line-fed and VFD-driven motors." />
              <Feat tier="monitor" name="ATM90E32 metering IC" desc="Three-phase metering chip with per-phase RMS current, voltage, power factor, and harmonic content. Accurate to 0.1% for energy, sub-percent for current." />
              <Feat tier="monitor" name="ESP32 edge processor" desc="Waveform data processed on the edge device. Health score computed locally every 2 seconds. Only summary metrics transmitted." />
              <Feat tier="monitor" name="EWMA baseline learning with state bucketing" desc="Exponentially weighted moving average baselines updated continuously. Separate baselines per motor operating state (loaded, unloaded, VFD speed bands) prevent false alarms during normal load variation." />
              <Feat tier="monitor" name="Z-score deviation scoring" desc="Health score derived from z-score deviation from baseline. Abnormal current patterns produce statistically meaningful alerts, not threshold crossings." />
              <Feat tier="monitor" name="Transition lockout" desc="Prevents false alerts during motor start and stop transients. Alert window opens only after stable operating conditions are confirmed." />
              <Feat tier="monitor" name="Phase imbalance detection" desc="Persistent current imbalance across phases indicates winding degradation, supply issues, or mechanical coupling problems. Flagged before damage occurs." />
              <Feat tier="monitor" name="Phase loss detection" desc="Single-phasing destroys motors in minutes. EdgePredict catches it within seconds." />
              <Feat tier="monitor" name="Overload and near-stall detection" desc="Current persistently above baseline indicates seized bearing, blocked impeller, or mechanical overload. Alert generated immediately." />
              <Feat tier="monitor" name="Load instability detection" desc="Cyclic current fluctuations indicate intermittent mechanical problems: intermittent binding, coupling wear, impeller cavitation." />
              <Feat tier="monitor" name="Mechanical and electrical fault indicators" desc="Current signature patterns correlate with bearing wear, rotor bar cracks, and air gap eccentricity. Indicators flagged for maintenance confirmation." />
              <Feat tier="monitor" name="Cellular connectivity (4G LTE)" desc="No plant network required. No IT ticket. No firewall changes. The edge gateway connects on cellular. Default for all pilots." />
              <Feat tier="monitor" name="MQTT to InfluxDB pipeline" desc="Data flows: edge device publishes via MQTT to a Telegraf listener, which writes to InfluxDB time-series database. Grafana dashboards optional for advanced users." />
              <Feat tier="monitor" name="Cloudflare Tunnel for remote access" desc="Secure outbound-only tunnel for remote diagnostics. No inbound ports. No VPN required." />
              <Feat tier="monitor" name="Live web dashboard" desc="Per-motor health score, phase current traces, load deviation, historical trending. Accessible from any browser." />
              <Feat tier="monitor" name="Real-time and email alerts" desc="In-dashboard alerts and email notifications when health score drops or fault indicators trigger." />
              <Feat tier="monitor" name="Weekly health summary emails" desc="Automated weekly digest: all motors, their scores, any anomalies flagged during the week, recommended actions." />
              <Feat tier="monitor" name="Auto-created work orders from sensor alerts" desc="Configure condition triggers so that when a specific fault indicator fires, a work order is created in the CMMS automatically with the asset, fault description, and priority pre-filled." />
              <Feat tier="monitor" name="Optional voltage reference" desc="Plug-in transformer tap adds voltage measurement. Unlocks voltage unbalance, undervoltage, power factor, and supply quality monitoring." />
              <Feat tier="monitor" name="Volume discounts for 5+ motors" desc="Contact us for pricing on fleets larger than 5 motors." />
            </Module>

          </div>
        </div>
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How is this free?
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            We make money on sensors. The platform is free because it is the best way
            to show you which motors need monitoring. Once you can see your failure history,
            the question changes from "should we monitor this?" to "why aren't we already?"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/monitoring"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-[#a78fe8] hover:text-[#a78fe8] transition-all duration-200"
            >
              Learn About Monitoring
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
