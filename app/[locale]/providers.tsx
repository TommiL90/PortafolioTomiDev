'use client'

import * as React from 'react'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SessionProvider } from 'next-auth/react'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  // const router = useRouter()

  return (
    <NextThemesProvider {...themeProps}>
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  )
}
