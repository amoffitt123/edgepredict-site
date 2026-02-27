import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function fmt(n: number) {
  return n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${Math.round(n).toLocaleString()}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, inputs, results } = body;

    if (!name || !company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const reportText = `
EdgePredict — Downtime Cost Estimate for ${company}
====================================================

INPUTS
------
Industry:               ${inputs.industry}
Current strategy:       ${inputs.strategy}
Critical motors:        ${inputs.numMotors}
Avg motor size:         ${inputs.avgHp} HP
Failures per year:      ${inputs.failuresPerYear}
Avg downtime per event: ${inputs.downtimeHours} hours
Production loss/hr:     ${fmt(inputs.productionLossPerHour)}
Scrap per event:        ${fmt(inputs.scrapPerEvent)}
Labor per event:        ${fmt(inputs.laborPerEvent)}
Parts per event:        ${fmt(inputs.partsPerEvent)}

RESULTS
-------
Annual risk exposure:   ${fmt(results.annualRisk)}
Avoidable loss (est.):  ${fmt(results.avoidableLoss)}
EdgePredict annual cost:${fmt(results.epAnnualCost)}
Net annual benefit:     ${fmt(results.netBenefit)}
Estimated ROI:          ${Math.round(results.roi)}%
Payback period:         ${results.paybackMonths >= 999 ? "N/A" : `${results.paybackMonths} months`}

5-YEAR COMPARISON
-----------------
No action (5 yr):       ${fmt(results.fiveYrNoAction)}
With EdgePredict (5 yr):${fmt(results.fiveYrWithEP)}
5-year estimated savings:${fmt(results.fiveYrSavings)}

---
To start a free 60-day pilot: https://edgepredict.io/pilot
Questions? anderson@edgepredict.io · (703) 401-6262
`.trim();

    // Notify Anderson
    await resend.emails.send({
      from: "EdgePredict <noreply@edgepredict.io>",
      to: ["anderson@edgepredict.io"],
      replyTo: email,
      subject: `Calculator report request — ${name} at ${company}`,
      text: `New report request from ${name} (${email}) at ${company}.\n\n${reportText}`,
    });

    // Send report to the user — best-effort, don't fail the request if this errors
    resend.emails.send({
      from: "EdgePredict <noreply@edgepredict.io>",
      to: [email],
      replyTo: "anderson@edgepredict.io",
      subject: `Your EdgePredict downtime estimate for ${company}`,
      text: `Hi ${name},\n\nHere's the downtime cost summary you ran on the EdgePredict calculator.\n\n${reportText}\n\nReply to this email or reach us directly at anderson@edgepredict.io if you'd like to talk through the numbers.\n\n— Anderson Moffitt\nFounder & CTO, EdgePredict`,
    }).catch((err: unknown) => console.error("User copy failed:", err));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Calculator report error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
