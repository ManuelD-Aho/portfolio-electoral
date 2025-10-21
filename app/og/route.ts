import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  // Temporarily return a simple response while we refactor
  return new NextResponse('OG Image', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}