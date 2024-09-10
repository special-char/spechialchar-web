import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log({ name, email });
    console.log({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
      our_email: process.env.DEFAULT_FROM,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
      },
    });

    // const mailOptions = {
    //   from: process.env.DEFAULT_FROM,
    //   to: email,
    //   subject: "Thank you for contacting us",
    //   text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nYour Team`,
    //   html: `<p>Dear ${name},</p><p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p><p>Best regards,<br>Your Team</p>`,
    // };

    const send_email = await transporter.sendMail({
      from: process.env.DEFAULT_FROM,
      to: email,
      // replyTo: email,
      subject: "Thank you for contacting us",
      html: `<p>Dear ${name},</p><p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p><p>Best regards,<br>Your Team</p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
