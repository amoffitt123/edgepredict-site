import { NextRequest, NextResponse } from "next/server";

// Stub: email the full downtime calculator report to the user
// Replace with Resend, SendGrid, or similar

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, inputs, results } = body;

    if (!name || !company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Send formatted report email
    // Example report content would include:
    //   - All calculator inputs
    //   - Annual risk exposure
    //   - Avoidable loss estimate
    //   - EdgePredict annual cost
    //   - Net benefit and ROI
    //   - 5-year comparison
    //
    // const reportText = formatReport(inputs, results);
    // await sendEmail({ to: email, subject: "Your EdgePredict Downtime Report", html: reportText });

    console.log("Calculator report request:", { name, company, email, inputs, results });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Calculator report error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
