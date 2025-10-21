import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  roles: z.array(z.string()).min(1),
  message: z.string().optional()
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
    console.log('[VOLUNTEER]', parsed.data)
    return NextResponse.json({ ok: true, message: 'Candidature bénévole reçue (mode démo)' })
  }

  const resend = new Resend(apiKey)
  await resend.emails.send({
    from: 'Bénévolat <no-reply@campaign.local>',
    to,
    subject: 'Nouvelle candidature bénévole',
    text: JSON.stringify(parsed.data, null, 2)
  })

  return NextResponse.json({ ok: true })
}