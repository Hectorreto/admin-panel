'use server';

import { PasswordRecovery } from '@/core/password-recovery';
import { User } from '@/core/user';
import { sql } from '@/utils/db';
import { formatDateTimeFull } from '@/utils/formatDate';
import { transporter } from '@/utils/mailer';
import { z } from 'zod';

export const sendPasswordRecovery = async (email: string, utcOffset: number) => {
  // Validate using Zod
  try {
    z.string().email().parse(email);
    z.number().int().min(-12).max(12).parse(utcOffset);
  } catch (error) {
    console.error('Failed to validate fields:', error);
    return 'El correo electrónico debe ser válido';
  }

  // Find user by email
  let user: User;
  try {
    user = await sql`SELECT * FROM users WHERE email = ${email}`.then((result: User[]) => result[0]);
    if (!user) {
      return 'El correo electrónico no se encuentra registrado';
    }
  } catch (error) {
    console.error('Failed to fetch user by email:', error);
    return 'El correo electrónico no se encuentra registrado';
  }

  // Create password recovery and save it in the database
  let passwordRecovery: PasswordRecovery;
  const expireAt = new Date();
  try {
    expireAt.setHours(expireAt.getHours() + 12);

    passwordRecovery = await sql`
      INSERT INTO password_recovery (expire_at, user_id)
      VALUES (${expireAt}, ${user.id})
      RETURNING *
    `.then((result: PasswordRecovery[]) => result[0]);
  } catch (error) {
    console.error('Failed to create password recovery:', error);
    return 'El correo electrónico no se encuentra registrado';
  }

  // Send email using nodemailer
  try {
    const expireAtWithOffset = new Date(expireAt);
    expireAtWithOffset.setHours(expireAtWithOffset.getHours() + utcOffset);

    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_MAIL}>`,
      to: email,
      subject: 'Recuperación de contraseña de cuenta de GLEZ',
      html: recoveryTemplate(email, expireAt, passwordRecovery.id),
    });

    console.log('Sent password recovery email to:', email);
  } catch (error) {
    console.error('Failed to send email:', error);
    return 'El correo electrónico no se encuentra registrado';
  }
};

const recoveryTemplate = (email: string, expireAt: Date, passwordRecoveryId: string) => {
  const expireAtFormatted = formatDateTimeFull(expireAt);
  const logoUrl = `${process.env.BASE_URL}logo.png`;
  const recoveryUrl = `${process.env.BASE_URL}recuperar-contrasenia?codigo=${passwordRecoveryId}`;

  return `
    <html class="html" lang='es'>
      <head>
        <meta charset='UTF-8' />
        <title>Recuperación de contraseña</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <style>
          .html { width: 100%; } .body { font-family: 'Poppins', sans-serif; width: 100%; margin: 0;
          background-color: #F7F7F7; text-align: center; color: #6C7685; } .container { width: calc(100%
          - 64px); max-width: 600px; background-color: #FFFFFF; position: relative; margin: 16px auto;
          padding: 32px; } .title { font-size: 1.5rem; margin-bottom: 32px; } .small { font-size:
          0.75rem; color: #ADAFB9; margin-bottom: 32px; } .logo { max-width: 196px; margin: 32px; }
          .button { background-color: #3370CB; border-radius: 4px; padding: 12px 32px; color: #ECECEF;
          font-weight: bold; text-decoration: none; line-height: 41px; } .mb-5 { margin-bottom: 38px; }
          .button-text { color: #ECECEF; }
        </style>
      </head>
      <body class='body'>
        <img src="${logoUrl}" alt='logo' class='logo' />
        <div class='container'>
          <h1 class='title'>Recuperación de contraseña</h1>
          <p>
            Recibimos una solicitud para cambiar la contraseña de
            <b>${email}</b>
            en el panel administrativo de AdminPanelTemplate, tienes hasta el
            ${expireAtFormatted}
            para hacerlo o tendrás que solicitarlo de nuevo.
          </p>
          <p>Haz clic en el botón si deseas continuar con el proceso.</p>
          <div class='mb-5'>
            <a class='button' href="${recoveryUrl}" target='_blank'>
              <span class='button-text'>Cambiar Contraseña</span>
            </a>
          </div>
          <p class='small'>
            Si no solicitaste este cambio puedes hacer caso omiso de este correo de forma segura.<br />
            Solo personas con acceso a este correo pueden cambiar la contraseña de la cuenta.
          </p>
        </div>
      </body>
    </html>
  `;
};
