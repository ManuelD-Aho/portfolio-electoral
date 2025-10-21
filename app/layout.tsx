import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import { site } from '@/lib/site'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: `${site.candidate.fullName} — ${site.candidate.slogan}`,
    template: `%s — ${site.candidate.fullName}`
  },
  description: site.meta.description,
  keywords: site.meta.keywords,
  openGraph: {
    title: `${site.candidate.fullName} — ${site.candidate.slogan}`,
    description: site.meta.description,
    url: site.urls.base,
    siteName: site.name,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: site.candidate.fullName }],
    locale: 'fr_FR',
    type: 'website'
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  alternates: {
    canonical: '/'
  }
}

export const viewport: Viewport = { themeColor: '#8A2BE2' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="relative">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}