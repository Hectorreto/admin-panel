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
        return false;
      }

      // Redirect authenticated users to dashboard
      const invalidRoutes = ['/login'];
      const isCurrentRouteValid = !invalidRoutes.some((route) => nextUrl.pathname.startsWith(route));
      if (!isCurrentRouteValid) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
