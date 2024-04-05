'use client'

import * as React from 'react'
import { Languages } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSearchParams } from 'next/navigation'
import { usePathname, useRouter } from '@/navigation'

export function LanguageToggle() {
  let pathname = usePathname()
  const router = useRouter()
  // const params = useParams()
  const searchParams = useSearchParams()
  const queryParams = new URLSearchParams(searchParams.toString())

  if (queryParams.size > 0) {
    pathname = pathname + '?' + queryParams.toString()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-foreground hover:text-foreground"
        >
          <Languages size={18} />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'pt' })}
        >
          Portugues
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'en' })}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'es' })}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
