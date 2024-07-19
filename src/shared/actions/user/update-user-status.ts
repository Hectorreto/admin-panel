'use server';

// import { sql } from '@/database/db';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { User } from '@/shared/core/user';
import { sql } from '@/utils/db';

export const updateUserStatus = async (id: string, active: boolean) => {
  // Validate using Zod
  const validatedFields = z
    .object({
      id: z.string(),
      active: z.boolean(),
    })
    .safeParse({ id, active });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Este usuario no se ha podido actualizar',
    };
  }

  // check is same user
  const session = await auth();
  if (session?.user?.email) {
    const user = await sql`SELECT * FROM users WHERE email = ${session.user.email}`
      .then((result: User[]) => result[0]);
    if (user?.id === id) {
      return {
        errors: {},
        message: 'No puedes deshabilitar tu propio usuario',
      };
    }
  }

  try {
    await sql`
      UPDATE users
      SET active = ${active}
      WHERE id = ${id}
    `;
  } catch (error) {
    return {
      errors: {},
      message: 'Este usuario no se ha podido actualizar',
    };
  }

  revalidatePath('/users');
};
