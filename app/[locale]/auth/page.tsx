'use client'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

const Page = () => {
  const handleSignIn = async () => {
    const result = await signIn('credentials', {
      username: 'demo',
      password: 'password',
      callbackUrl: '/',
    })
    console.log('result', result)
  }
  return (
    <div>
      <Button onClick={handleSignIn}>SignIn</Button>
    </div>
  )
}

export default Page
