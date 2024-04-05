/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'
import { locales } from './navigation'
// import { withAuth } from 'next-auth/middleware'
import createIntlMiddleware from 'next-intl/middleware'
import { auth } from './lib/auth'
// import { getToken } from "next-auth/jwt";

//  const publicPages = ['/', '/login']

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: 'always',
  defaultLocale: 'en',
})

// const authMiddleware = withAuth(
//   // Note that this callback is only invoked if
//   // the `authorized` callback has returned `true`
//   // and not for pages listed in `pages`.
//   (request: NextRequest) => intlMiddleware(request),
//   {
//     callbacks: {
//       authorized: ({ token }) => token != null,
//     },
//     pages: {
//       signIn: '/login',
//     },
//   },
// )

// export default function middleware(req: NextRequest) {
//   const publicPathnameRegex = RegExp(
//     `^(/(${locales.join('|')}))?(${publicPages
//       .flatMap((p) => (p === '/' ? ['', '/'] : p))
//       .join('|')})/?$`,
//     'i'
//   );
//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

//   if (isPublicPage) {
//     return intlMiddleware(req);
//   } else {
//     return (authMiddleware as any)(req);
//   }
// }

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log(req.nextauth)
//     if (
//       req.nextUrl.pathname === '/admin-dashboard' &&
//       req.nextauth.token?.role !== 'admin'
//     ) {
//       return new NextResponse('You are not authorized!')
//     }
//   },
//   {
//     callbacks: {
//       authorized: (params) => {
//         const { token } = params
//         return !!token
//       },
//     },
//   },
// )

export default auth(async (req: NextRequest) => {
  const session = await auth()
  const token = req.cookies.get('authjs.session-token')
  const pathname = req.nextUrl.pathname
  const [, locale, ...segments] = req.nextUrl.pathname.split('/')

  console.log('pathname', pathname)

  if (
    pathname.startsWith(`/${locale}/admin`) &&
    session?.user.role !== 'ADMIN'
  ) {
    intlMiddleware(req)
    return NextResponse.redirect(new URL('/', req.url))
  }

  return intlMiddleware(req)
})

// export default function middleware(request: NextRequest) {
//   const token = request.cookies.get('authjs.session-token')
//   const pathname = request.nextUrl.pathname
//   const [, locale, ...segments] = request.nextUrl.pathname.split('/')

//   console.log(new URL('/test', request.url))

//   if (pathname === '/auth' && token) {
//     intlMiddleware(request)
//     return NextResponse.redirect(new URL('/', request.url))
//   }

//   if (pathname.includes('/admin') && !token) {
//     intlMiddleware(request)
//     return NextResponse.redirect(new URL('/', request.url))
//   }

//   return intlMiddleware(request)
// }

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|manifest.json).*)'],
}
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(es|en)/:path*'],
// }
