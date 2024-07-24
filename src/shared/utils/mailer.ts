import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: String(process.env.EMAIL_HOST),
  port: Number(process.env.EMAIL_PORT),
  secure: Number(process.env.EMAIL_PORT) === 465,
  auth: {
    user: String(process.env.EMAIL_USER),
    pass: String(process.env.EMAIL_PASS),
  },
});
