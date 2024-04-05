'use client'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { signOut } from 'next-auth/react'

export const SignOut = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: '/' })}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute right-4 top-4 md:right-8 md:top-8',
      )}
    >
      Sair
    </Button>
  )
}
