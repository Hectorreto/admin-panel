'use client';

import { ButtonPrimary } from '@/components/buttons/button-primary';
import { VersioningLegend } from '@/components/versioning-legend/versioning-legend';
import { useState } from 'react';
import { InputPassword } from '@/components/inputs/input-password';
import clsx from 'clsx';
import { updatePassword } from '@/actions/user/update-password';

const Page = () => {
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

      const errors = await updatePassword(formData.password1);
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
