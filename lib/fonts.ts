import {
  Chakra_Petch,
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Saira_Condensed,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontSaira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-saira",
  display: "swap",
})

export const fontChakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-chakra",
  display: "swap",
})
