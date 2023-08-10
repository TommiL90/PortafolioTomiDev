import "@/styles/globals.css"
import { Metadata } from "next"
import { Header } from "@/components/Header"
import { TailwindIndicator } from "@/components/Tailwind-indicator"
import { ThemeProvider } from "@/components/Theme-Provider"
import { fontChakra } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/Footer"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  viewport: siteConfig.viewport,
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-BR">
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontChakra.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="container flex min-h-full flex-1 flex-col">
                {children}
              </main>
              <Footer />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
