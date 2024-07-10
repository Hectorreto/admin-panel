'use client';

import { Header } from '@/components/layout/header';
import { NavBar } from '@/components/layout/nav-bar';
import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen min-w-screen flex">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1">
        <Header isOpen={isOpen} />
        <div className="px-[56px] py-[32px] min-h-[calc(100vh-72px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
