"use client"

import * as React from "react"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { FiSun, FiMoon } from 'react-icons/fi';


export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  console.log(theme)

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <Label htmlFor="airplane-mode">
        <FiSun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <FiMoon className="hidden h-5 w-5 dark:block" />
        <span className="sr-only">Toggle theme</span>
      </Label>
    </div>
  )
}
