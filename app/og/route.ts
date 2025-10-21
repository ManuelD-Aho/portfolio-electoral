import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const runtime = 'edge'
export const alt = `${site.candidate.fullName} — ${site.candidate.slogan}`
export const contentType = 'image/png'
export const size = { width: 1200, height: 630 }

export default async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(120deg, #0B1020, #111827)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px',
          justifyContent: 'center'
        }}
      >
        <div style={{ fontSize: 42, opacity: 0.8 }}>{site.name}</div>
        <div style={{ fontWeight: 800 }}>{site.candidate.fullName}</div>
        <div style={{ fontSize: 36, color: '#A5B4FC', marginTop: 8 }}>
          {site.candidate.slogan}
        </div>
      </div>
    ),
    { ...size }
  )
}