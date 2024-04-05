'use client'

import { useSession } from 'next-auth/react'

const ClientPage = () => {
  const session = useSession()
  return (
    <>
      <h1>Home</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <div>{session.data?.user.name}</div>
    </>
  )
}

export default ClientPage
