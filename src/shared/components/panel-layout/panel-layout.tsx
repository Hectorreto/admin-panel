'use client';

import { useState } from 'react';
import { NavBar } from './nav-bar/nav-bar';
import { Header } from './header/header';

type Props = {
  children: React.ReactNode;
  userName: string;
};

export const PanelLayout = ({ children, userName }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen min-w-screen flex">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1">
        <Header isOpen={isOpen} userName={userName} />
        <div className="px-[56px] py-[32px] min-h-[calc(100vh-72px)]">
          {children}
        </div>
      </div>
    </div>
  );
};
