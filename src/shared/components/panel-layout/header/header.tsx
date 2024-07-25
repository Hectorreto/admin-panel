'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { UserIdentification } from './user-identification';

type Props = {
  isOpen: boolean;
  userName: string;
};

export const Header = ({ isOpen, userName }: Props) => {
  return (
    <div className="h-[72px]">
      <div className="fixed h-[72px] shadow-xl left-0 right-0"></div>
      <div
        className={clsx(
          'h-[72px] bg-neutral-50 flex items-center justify-between px-[56px] gap-[56px] fixed animate-ease right-0',
          isOpen ? 'left-[224px]' : 'left-[72px]',
        )}
      >
        <Item />
        <UserIdentification userName={userName} />
      </div>
    </div>
  );
};

const Item = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/tablero')) {
    return (
      <h4 className="font-bold text-primary-600">Tablero</h4>
    );
  }

  if (pathname.startsWith('/botones')) {
    return (
      <h4 className="font-bold text-primary-600">Botones</h4>
    );
  }

  if (pathname.startsWith('/inputs')) {
    return (
      <h4 className="font-bold text-primary-600">Inputs</h4>
    );
  }

  if (pathname.startsWith('/componentes')) {
    return (
      <h4 className="font-bold text-primary-600">Componentes</h4>
    );
  }

  if (pathname.startsWith('/ayuda')) {
    return (
      <h4 className="font-bold text-primary-600">Ayuda</h4>
    );
  }

  return (
    <h4 className="font-bold text-primary-600">
      {pathname}
    </h4>
  );
};
