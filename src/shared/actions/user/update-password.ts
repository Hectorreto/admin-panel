'use server';

import { sql } from '@/utils/db';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { auth } from '../../../auth';

export const updatePassword = async (newPassword: string) => {
  try {
    z.string()
      .min(8, 'Debe contener un mínimo de 8 caracteres')
      .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
      .regex(/[a-z]/, 'Debe contener al menos una minúscula')
      .regex(/[0-9]/, 'Debe contener al menos un número')
      .parse(newPassword);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues.map((issue) => issue.message);
    }
    return ['La contraseña no se ha podido actualizar'];
  }

  try {
    const session = await auth();
    if (!session?.user) return ['La contraseña no se ha podido actualizar'];

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await sql`UPDATE users SET password = ${hashedPassword} WHERE email = ${session.user.email}`;
  } catch (error) {
    return ['La contraseña no se ha podido actualizar'];
  }

  redirect('/dashboard');
};
