import { Resend } from "resend"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const resend = new Resend(process.env.RESEND_API_KEY)

export function GET() {
  return NextResponse.json({
    configured: Boolean(process.env.RESEND_API_KEY),
  })
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    const { name, email, message } = await req.json()

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <hello@doublevdesign.at>", 
      to: "vivi@doublevdesign.at", 
      replyTo: email.trim(),
      subject: `New message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    })

    if (error) {
      console.error("Resend failed to send contact email", error)
      return NextResponse.json({ error: error.message }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}