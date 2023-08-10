"use client"

import React from "react"
import Link from "next/link"
import { Navbar } from "./Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToggle } from "@/hooks/useToggle"
export const Header = () => {
  const { modal, openModal, closeModal } = useToggle()

  return (
    <header
      className="flex h-20 items-center justify-between border-b
     px-4 py-0 transition-all md:animate-fade md:px-16"
    >
      <Link
        href="/"
        className="flex items-center justify-center text-3xl font-bold"
      >
        <Avatar className="mr-2 h-12 w-12">
          <AvatarImage
            src={`https://github.com/tommil90.png`}
            className="rounded-full"
          />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
        <span>Tomi</span>
        <span className="text-primary">Dev</span>
      </Link>
      <Navbar openModal={openModal} />
    </header>
  )
}
