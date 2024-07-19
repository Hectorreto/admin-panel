import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized: ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;

      // Redirect unauthenticated users to login
      if (!isLoggedIn) {
        const validRoutes = ['/login'];
        const isCurrentRouteValid = validRoutes.some((route) => nextUrl.pathname.startsWith(route));
        if (isCurrentRouteValid) return true;

        if (/^[/]diagnostics[/].{36}[/]general$/.test(nextUrl.pathname)) return true;
        if (/^[/]diagnostics[/].{36}[/]proposed-work-program$/.test(nextUrl.pathname)) return true;
        return false;
      }

      // Redirect authenticated users to dashboard
      // const invalidRoutes = ['/login'];
      if (auth.user.role === 'algo') {
        const validRoutes = ['/dashboard', '/users'];
        const isCurrentRouteValid = !validRoutes.some((route) => nextUrl.pathname.startsWith(route));
        if (!isCurrentRouteValid) {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
      }

      if (auth.user.role === 'algo') {
        const validRoutes = ['/dashboard', '/users'];
        const isCurrentRouteValid = !validRoutes.some((route) => nextUrl.pathname.startsWith(route));
        if (!isCurrentRouteValid) {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
