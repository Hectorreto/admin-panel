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
        const validRoutes = ['/favicon.ico', '/login', '/recuperar-contrasenia'];
        const isCurrentRouteValid = validRoutes.some((route) => nextUrl.pathname.startsWith(route));
        if (isCurrentRouteValid) return true;
        return false;
      }

      // Redirect authenticated users to dashboard
      const validRoutes = ['/favicon.ico', '/tablero', '/botones', '/inputs', '/componentes', '/ayuda', '/cambiar-contrasenia'];
      const isCurrentRouteValid = validRoutes.some((route) => nextUrl.pathname.startsWith(route));
      if (!isCurrentRouteValid) {
        return Response.redirect(new URL('/tablero', nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
