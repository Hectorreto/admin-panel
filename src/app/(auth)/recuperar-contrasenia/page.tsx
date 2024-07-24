'use client';

import { sendPasswordRecovery } from '@/actions/user/send-password-recovery';
import { ButtonPrimary } from '@/components/buttons/button-primary';
import { LinkPrimary } from '@/components/buttons/link-primary';
import { InputText } from '@/components/inputs/input-text';
import { VersioningLegend } from '@/components/versioning-legend/versioning-legend';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { InputPassword } from '@/components/inputs/input-password';
import { recoverPassword } from '@/actions/user/recover-password';

const Page = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('codigo');
  const [state, setState] = useState<'sendMail' | 'submitted' | 'enterCode'>(code ? 'enterCode' : 'sendMail');

  if (state === 'sendMail') {
    return <SendMail onSubmit={() => setState('submitted')} />;
  }

  if (state === 'submitted') {
    return <Submitted />;
  }

  if (state === 'enterCode' && code) {
    return <EnterCode code={code} />;
  }
};

type SendMailProps = {
  onSubmit: () => void;
};

const SendMail = ({ onSubmit }: SendMailProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const utcOffset = new Date().getTimezoneOffset() / -60;
    await sendPasswordRecovery(formData.email, utcOffset);
    onSubmit();
  };

  return (
    <main className="h-full flex">
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center items-center gap-4">
        <h1 className="text-primary-primary text-center">Recuperar contraseña</h1>

        <p className="text-center text-[#555555] max-w-[560px] text-xs">
          <span className="block">Por favor, proporciona tu correo electrónico.</span>
          <span className="block">Te enviaremos un enlace para poder restablecer tu contraseña.</span>
        </p>

        <div className="w-[334px] flex flex-col gap-2">
          <InputText
            type="email"
            label="Correo electrónico"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            placeholder="Correo electrónico"
          />
        </div>

        <ButtonPrimary type="submit">Enviar correo</ButtonPrimary>
      </form>

      <VersioningLegend />
    </main>
  );
};

const Submitted = () => {
  return (
    <main className="h-full flex">
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <h1 className="text-primary-primary text-center">
          <span className="block">Correo de recuperación</span>
          <span className="block">enviado</span>
        </h1>

        <p className="text-center text-[#555555] max-w-[560px] text-xs">
          Te hemos enviado a tu correo electrónico un enlace para poder restablecer tu contraseña.
        </p>

        <LinkPrimary href="/login">Regresar a inicio</LinkPrimary>
      </div>

      <VersioningLegend />
    </main>
  );
};

type EnterCodeProps = {
  code: string;
};

const EnterCode = ({ code }: EnterCodeProps) => {
  const [formData, setFormData] = useState({
    password1: '',
    password2: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await recoverPassword(formData.password1, code);
  };

  return (
    <main className="h-full flex">
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center items-center gap-4">
        <h1 className="text-primary-primary text-center">Cambio de contraseña</h1>

        <p className="text-center text-[#555555] max-w-[560px] text-xs">
          Por favor, ingresa tu nueva contraseña, esta debe ser diferente a la anterior y contener al
          menos un número, una letra mayúscula, una minúscula y un mínimo de 8 caracteres.
        </p>

        <div className="w-[334px] flex flex-col gap-2">
          <InputPassword
            label="Contraseña"
            value={formData.password1}
            onChange={(value) => setFormData({ ...formData, password1: value })}
            placeholder="Contraseña"
            helperText="Debe contener al menos un número, una letra mayúscula, una minúscula y un mínimo de 8 caracteres"
            helperIcon
          />
          <InputPassword
            label="Confirmar contraseña"
            value={formData.password2}
            onChange={(value) => setFormData({ ...formData, password2: value })}
            placeholder="Contraseña"
          />
        </div>

        <ButtonPrimary type="submit">Cambiar contraseña</ButtonPrimary>
      </form>

      <VersioningLegend />
    </main>
  );
};

export default Page;
