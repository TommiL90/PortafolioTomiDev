import "@/styles/globals.css"
import { Header } from "@/components/Header"
import { TailwindIndicator } from "@/components/Tailwind-indicator"
import { ThemeProvider } from "@/components/Theme-Provider"
import { fontChakra } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/Footer"

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
