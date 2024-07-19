'use server';

import { sql } from '@/utils/db';
import { User } from '@/shared/core/user';
import { PasswordRecovery } from '@/shared/core/password-recovery';
import { z } from 'zod';
import { signIn } from '@/auth';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export const recoverPassword = async (newPassword: string, code: string) => {
  try {
    z.string()
      .min(8, 'Debe contener un mínimo de 8 caracteres')
      .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
      .regex(/[a-z]/, 'Debe contener al menos una minúscula')
      .regex(/[0-9]/, 'Debe contener al menos un número')
      .parse(newPassword);
    z.string().parse(code);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues[0].message;
    }
    return 'La contraseña no se ha podido actualizar';
  }

  let user: User;
  try {
    // delete expired codes
    await sql`DELETE FROM password_recovery WHERE expire_at < NOW()`;

    const passwordRecovery = await sql`SELECT * FROM password_recovery WHERE id = ${code}`
      .then((result: PasswordRecovery[]) => result[0]);

    if (!passwordRecovery) return 'Enlace de recuperación inválido';

    // Delete the password recovery
    await sql`DELETE FROM password_recovery WHERE id = ${passwordRecovery.id}`;

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user = await sql`UPDATE users SET password = ${hashedPassword} WHERE id = ${passwordRecovery.user_id} RETURNING *`
      .then((result: User[]) => result[0]);
  } catch (error) {
    return 'La contraseña no se ha podido actualizar';
  }

  try {
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', newPassword);

    await signIn('credentials', formData);
  } catch (error) {
    console.error('Failed to sign in', error);
  }

  redirect('/dashboard');
};
