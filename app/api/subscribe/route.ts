import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const bodySchema = z.object({ email: z.string().email() })

export async function POST(req: Request) {
  const data = await req.json()
  const parse = bodySchema.safeParse(data)
  if (!parse.success) {
    return NextResponse.json({ ok: false, error: 'Email invalide' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.FORMS_TO_EMAIL

  if (!apiKey || !to) {
    // Fallback avec simple log (pas d’envoi réel)
    console.log('[NEWSLETTER]', parse.data.email)
    return NextResponse.json({ ok: true, message: 'Inscription enregistrée (mode démo)' })
  }

  const resend = new Resend(apiKey)
  await resend.emails.send({
    from: 'Newsletter <no-reply@campaign.local>',
    to,
    subject: 'Nouvelle inscription newsletter',
    text: `Email: ${parse.data.email}`
  })

  return NextResponse.json({ ok: true })
}