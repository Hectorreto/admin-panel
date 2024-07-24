'use server';

import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';

export const authenticate = async (
  email: string,
  password: string,
) => {
  try {
    await signIn('credentials', { redirectTo: '/tablero', email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.message.startsWith('INACTIVE_USER')) {
        return 'Este usuario ha sido deshabilitado';
      }
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Usuario o contraseña incorrectos';
        default:
          return 'Error al iniciar sesión';
      }
    }
    throw error;
  }
};
