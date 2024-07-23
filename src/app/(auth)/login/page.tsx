'use client';

import { authenticate } from '@/actions/user/authenticate';
import { ButtonPrimary } from '@/components/buttons/button-primary';
import { InputPassword } from '@/components/inputs/input-password';
import { InputText } from '@/components/inputs/input-text';
import { Link } from 'next-view-transitions';
import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', formData.email);
    data.append('password', formData.password);
    authenticate(data);
  };

  return (
    <main className="h-full flex">
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center items-center gap-4">
        <h1 className="text-primary-primary">¡Bienvenido!</h1>

        <div className="w-[334px] flex flex-col gap-2">
          <InputText
            type="email"
            label="Correo electrónico"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            placeholder="Correo electrónico"
          />
          <InputPassword
            label="Contraseña"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
            placeholder="Contraseña"
          />
          <div className="h-[1px] bg-neutral-300"></div>
          <div className="flex gap-2">
            <span className="text-xs">¿La olvidaste? No te preocupes.</span>
            <Link href="/forgot-password" className="inline-flex text-xs text-secondary-secondary font-semibold">
              Recuperar contraseña
            </Link>
          </div>
        </div>

        <ButtonPrimary type="submit">Iniciar Sesión</ButtonPrimary>
      </form>
    </main>
  );
};

export default Page;
