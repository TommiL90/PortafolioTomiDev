import { auth } from '@/lib/auth'
import React from 'react'
import { RouteLinks } from './route-link'
import { SignIn } from './signin'

export const loginAdmin = async () => {
  const session = await auth()
  if (session) {
    return <RouteLinks href="/admin" text="Admin" />
  }
  return <SignIn />
}
