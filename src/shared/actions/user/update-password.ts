'use server';

import { sql } from '@/utils/db';
import { User } from '@/shared/core/user';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { auth } from '@/auth';

export const updatePassword = async (oldPassword: string, newPassword: string) => {
  try {
    z.string().parse(oldPassword);
    z.string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one digit')
      .parse(newPassword);
  } catch (error) {
    return 'Missing Fields. Failed to Update Password.';
  }

  try {
    const session = await auth();
    if (!session?.user) return 'User not found';

    const user = await sql`SELECT * FROM users WHERE email = ${session.user.email}`
      .then((users: User[]) => users[0]);

    // Check if the old password is correct
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) return 'Invalid password';

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await sql`UPDATE users SET password = ${hashedPassword} WHERE email = ${session.user.email}`;
  } catch (error) {
    return 'Something went wrong.';
  }

  redirect('/dashboard');
};
