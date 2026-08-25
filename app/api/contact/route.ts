import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", 
      to: "vivi@doublevdesign.at", 
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}