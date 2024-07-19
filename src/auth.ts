import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { sql } from './shared/core/db';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const [user] = await sql`SELECT * FROM users WHERE email = ${email}`;
          if (!user) return null;
          if (!user.active) throw 'INACTIVE_USER';
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return {
            id: user.id,
            email: user.email,
            name: `${user.first_name} ${user.last_name}`,
            image: '',
          };
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
