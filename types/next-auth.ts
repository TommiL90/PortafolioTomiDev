import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      token: string
      role: string
      name: string
    }
  }

  interface User {
    role: string
  }
}
