'use client';

import { sendPasswordRecovery } from '@/actions/user/send-password-recovery';
import { ButtonPrimary } from '@/components/buttons/button-primary';
import { LinkPrimary } from '@/components/buttons/link-primary';
import { InputText } from '@/components/inputs/input-text';
import { VersioningLegend } from '@/components/versioning-legend/versioning-legend';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { InputPassword } from '@/components/inputs/input-password';
import { recoverPassword } from '@/actions/user/recover-password';
import clsx from 'clsx';

const Page = () => {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
};

const PageContent = () => {
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const utcOffset = new Date().getTimezoneOffset() / -60;
    try {
      setLoading(true);
      const error = await sendPasswordRecovery(formData.email, utcOffset);
      if (error) {
        setError(error);
        return;
      }
      onSubmit();
    } catch (error) {
      setError('Error al enviar correo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-full flex">
      <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-center items-center gap-4">
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
            error={Boolean(error)}
            helperText={error}
          />
        </div>

        <ButtonPrimary type="submit" loading={loading}>Enviar correo</ButtonPrimary>
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
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (formData.password1 !== formData.password2) {
        setErrors(['Las contraseñas no coinciden']);
        return;
      }

      const errors = await recoverPassword(formData.password1, code);
      if (errors) {
        setErrors(errors);
      }
    } catch (error) {
      setErrors(['Error al cambiar contraseña']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-full flex">
      <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-center items-center gap-4">
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
            error={errors.length > 0}
            helperText={(
              <p className="text-neutral-700">
                Debe contener
                <span className={clsx(errors.includes('Debe contener al menos un número') && 'text-alert-red')}> al menos un número,</span>
                <span className={clsx(errors.includes('Debe contener al menos una mayúscula') && 'text-alert-red')}> una letra mayúscula,</span>
                <span className={clsx(errors.includes('Debe contener al menos una minúscula') && 'text-alert-red')}> una minúscula</span>
                <span className={clsx(errors.includes('Debe contener un mínimo de 8 caracteres') && 'text-alert-red')}> y un mínimo de 8 caracteres</span>
              </p>
            )}
            helperIcon
          />
          <InputPassword
            label="Confirmar contraseña"
            value={formData.password2}
            onChange={(value) => setFormData({ ...formData, password2: value })}
            placeholder="Contraseña"
            error={errors.length > 0}
            helperText={(
              <div>
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          />
        </div>

        <ButtonPrimary type="submit" loading={loading}>Cambiar contraseña</ButtonPrimary>
      </form>

      <VersioningLegend />
    </main>
  );
};

export default Page;
