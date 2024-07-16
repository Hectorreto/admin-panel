'use client';

import { authenticate } from '@/actions/user/authenticate';
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
    <main className="w-screen h-screen flex">
      <div className="flex-1 bg-neutral-500"></div>
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center items-center gap-4">
        <h1 className="text-primary-primary">¡Bienvenido!</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border p-2" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Contraseña</label>
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="border p-2" />
        </div>

        <button className="border h-[40px] px-[32px] rounded-lg">Iniciar Sesión</button>
      </form>
    </main>
  );
};

export default Page;
