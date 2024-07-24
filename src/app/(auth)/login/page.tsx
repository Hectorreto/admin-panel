'use client';

import { authenticate } from '@/actions/user/authenticate';
import { ButtonPrimary } from '@/components/buttons/button-primary';
import { InputPassword } from '@/components/inputs/input-password';
import { InputText } from '@/components/inputs/input-text';
import { VersioningLegend } from '@/components/versioning-legend/versioning-legend';
import { Link } from 'next-view-transitions';
import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const error = await authenticate(formData.email, formData.password);
      if (error) {
        setError(error);
      }
    } catch (error) {
      setError('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-full flex">
      <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-center items-center gap-4">
        <h1 className="text-primary-primary">¡Bienvenido!</h1>

        <div className="w-[334px] flex flex-col gap-2">
          <InputText
            type="email"
            label="Correo electrónico"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            placeholder="Correo electrónico"
            error={Boolean(error)}
          />
          <InputPassword
            label="Contraseña"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
            placeholder="Contraseña"
            error={Boolean(error)}
            helperText={error}
          />
          <div className="h-[1px] bg-neutral-300"></div>
          <div className="flex gap-2">
            <span className="text-xs">¿La olvidaste? No te preocupes.</span>
            <Link href="/recuperar-contrasenia" className="inline-flex text-xs text-secondary-secondary font-semibold">
              Recuperar contraseña
            </Link>
          </div>
        </div>

        <ButtonPrimary type="submit" loading={loading}>Iniciar Sesión</ButtonPrimary>
      </form>

      <VersioningLegend />
    </main>
  );
};

export default Page;
