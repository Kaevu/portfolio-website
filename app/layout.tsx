import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import Image from 'next/image'
import backgroundImage from 'app/images/landscape.png'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Yezi | Portfolio',
    template: '%s | Yezi',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="flex flex-col bg-[url('/images/landscape.png')] bg-center bg-cover min-h-screen antialiased animate-fadeInUp">
        <main className="flex-auto max-w-xl lg:mx-auto min-w-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  )
}
