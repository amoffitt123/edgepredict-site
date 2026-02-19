import { NextRequest, NextResponse } from "next/server";

// Replace this stub with your email provider (Resend, SendGrid, Postmark, etc.)
// Example with Resend: https://resend.com/docs/send-with-nextjs

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message, numMotors } = body;

    // Validate required fields
    if (!name || !company || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Integrate email provider
    // Example (Resend):
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "EdgePredict <noreply@edgepredict.io>",
    //   to: ["anderson@edgepredict.io"],
    //   subject: `New contact form submission from ${name} at ${company}`,
    //   text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMotors: ${numMotors}\n\n${message}`,
    // });

    // Log for now (replace with actual send)
    console.log("Contact form submission:", { name, company, email, phone, numMotors, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
