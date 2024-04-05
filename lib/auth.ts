/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import GithubProvider, { GitHubProfile } from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  // pages: {
  //   signIn: '/auth',
  //   signOut: '/auth',
  //   error: '/auth',
  //   verifyRequest: '/auth',
  //   newUser: '/auth',
  // },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'TomiDev' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req): Promise<any> {
        console.log('credentials', credentials)
        // console.log('req', req)
        await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        })

        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return { ...token, ...user }
    },
    async session({ session, token }) {
      // session.user = token as any;
      if (session?.user) {
        session.user.role = token.role as string
        session.user.token = token.token as string
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === 'development',
})
