import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    // Create the email HTML
const emailHtml = `
  <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FFF4EE; border-radius: 10px; border: 1px solid #E67E5A;">
    <h2 style="text-align: center; color: #3A2A23;">Heritage Care Contact Form Response</h2>
    <p style="color: #5C4033;"><strong>Name:</strong> ${name}</p>
    <p style="color: #5C4033;"><strong>Email:</strong> ${email}</p>
    <p style="color: #5C4033;"><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p style="color: #5C4033;"><strong>Message:</strong></p>
    <p style="color: #5C4033; padding-left: 10px;">${message}</p>
    <hr style="border: none; border-top: 1px solid #E67E5A; margin: 20px 0;">
    <p style="text-align: center; color: #3A2A23; font-size: 14px;">
      This message was sent from your website contact form.
    </p>
  </div>
`;

    // Configure SMTP (Gmail example)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "heritagecarelk@gmail.com",      
        pass: "ghst jonv gkya vmpd",          
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "heritagecarelk@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: unknown) {
  console.error("Email sending error:", error);

  let message = "Failed to send email";
  if (error instanceof Error) {
    message = error.message;
  }

  return NextResponse.json(
    { success: false, message },
    { status: 500 }
  );
}
}