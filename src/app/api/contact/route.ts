import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message, numMotors } = body;

    if (!name || !company || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "EdgePredict <noreply@edgepredict.io>",
      to: ["anderson@edgepredict.io"],
      replyTo: email,
      subject: `New contact form submission from ${name} at ${company}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        numMotors ? `Critical motors: ${numMotors}` : null,
        ``,
        `Message:`,
        message,
      ]
        .filter((l) => l !== null)
        .join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
