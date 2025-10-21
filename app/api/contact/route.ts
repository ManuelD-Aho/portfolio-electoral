import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10)
})

export async function POST(req: Request) {
  const json = await req.json()
  const parsed = schema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Champs invalides' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.FORMS_TO_EMAIL

  if (!apiKey || !to) {
    console.log('[CONTACT]', parsed.data)
    return NextResponse.json({ ok: true, message: 'Message reçu (mode démo)' })
  }

  const resend = new Resend(apiKey)
  await resend.emails.send({
    from: 'Contact <no-reply@campaign.local>',
    to,
    subject: `Nouveau message: ${parsed.data.subject}`,
    text: `${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`
  })

  return NextResponse.json({ ok: true })
}