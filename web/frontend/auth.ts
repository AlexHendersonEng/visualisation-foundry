import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = z
          .object({ email: z.string().email(), password: z.string().min(1) })
          .safeParse(credentials ?? {});

        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        if (
          email === process.env.DUMMY_USER_EMAIL &&
          password === process.env.DUMMY_USER_PASSWORD
        ) {
          return { id: '1', name: 'Demo User', email };
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});