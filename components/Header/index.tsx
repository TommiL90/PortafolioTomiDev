import React from 'react'
import { Navbar } from './navbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ThemeSwitch } from '../theme-switch'
import { LanguageToggle } from '../language-toggler'
import { Link } from '@/navigation'
import { MobileNavBar } from './mobile-navbar'

export const Header = () => {
  return (
    <header
      className="flex h-20 items-center justify-between border-b
     px-4 py-0 transition-all md:animate-fade md:px-16"
    >
      <Link
        href="/"
        className="flex items-center justify-center text-3xl font-bold"
      >
        <Avatar className="my-1 mr-2 h-12 w-12">
          <AvatarImage
            src={`https://github.com/tommil90.png`}
            className="rounded-full"
          />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
        <span>Tomi</span>
        <span className="text-primary">Dev</span>
      </Link>
      <div className="flex items-center justify-center gap-4">
        <Navbar />
        <ThemeSwitch />
        <LanguageToggle />
        <MobileNavBar />
      </div>
    </header>
  )
}
