import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/navigation'
import { fontChakra, fontMono } from '@/config/fonts'

import { Footer } from '@/components/footer'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Providers } from './providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  icons: {
    icon: '/favicon_io/favicon.ico',
    shortcut: '/favicon_io/favicon-16x16.png',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  viewport: siteConfig.viewport,
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontChakra.className,
          fontMono.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <div className="relative z-10 flex h-screen flex-col">
              <Header />
              <main className="container mx-auto max-w-7xl flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <BackgroundBeams />
          </Providers>
        </NextIntlClientProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}
