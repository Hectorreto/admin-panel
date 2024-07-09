'use client';

import { Link } from 'next-view-transitions';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { NavItem } from './nav-item';
import logo from '@/assets/logo.png';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const NavBar = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();

  return (
    <div className={clsx('shrink-0 animate-ease', isOpen ? 'w-[224px]' : 'w-[72px]')}>
      <nav
        className={clsx(
          'bg-neutral-50 flex flex-col justify-between shadow-md animate-ease fixed top-0 bottom-0 z-10',
          isOpen ? 'w-[224px]' : 'w-[72px]'
        )}
      >
        <div className="flex flex-col">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className={clsx('h-[72px] flex items-center px-[16px] overflow-hidden', isOpen ? 'gap-[8px]' : 'gap-[16px]')}>
              <div className={clsx('bg-[#E9EEF1] h-[40px] animate-ease shrink-0 overflow-hidden', isOpen ? 'w-[160px]' : 'w-[40px]')}>
                <div className={clsx('w-[160px] h-[40px] relative animate-ease', isOpen ? 'left-0' : '-left-[60px]')}>
                  <Image src={logo} alt="Logo" width={160} height={40} />
                </div>
              </div>
              <div className="h-[24px] w-[24px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16L4 16C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13L12 13C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11L4 11C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8L15 8C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6L4 6C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" fill="#6344AD" />
                </svg>
              </div>
            </div>
          </button>
          <ul className="flex flex-col gap-[8px]">
            <li>
              <Link href="/dashboard">
                <NavItem active={pathname.startsWith('/dashboard')} isOpen={isOpen} icon={(<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z" fill="currentColor" /></svg>)}>
                  Dashboard
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/menu2">
                <NavItem active={pathname.startsWith('/menu2')} isOpen={isOpen} icon={<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z" fill="currentColor" /></svg>}>
                  Label 2
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/menu3">
                <NavItem active={pathname.startsWith('/menu3')} isOpen={isOpen} icon={<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z" fill="currentColor" /></svg>}>
                  Label 3
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/menu4">
                <NavItem active={pathname.startsWith('/menu4')} isOpen={isOpen} icon={<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z" fill="currentColor" /></svg>}>
                  Label 4
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/menu5">
                <NavItem active={pathname.startsWith('/menu5')} isOpen={isOpen} icon={<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z" fill="currentColor" /></svg>}>
                  Label 5
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/menu6">
                <NavItem active={pathname.startsWith('/menu6')} isOpen={isOpen} icon={<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z" fill="currentColor" /></svg>}>
                  Label 6
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/menu7">
                <NavItem active={pathname.startsWith('/menu7')} isOpen={isOpen} icon={<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z" fill="currentColor" /></svg>}>
                  Label 7
                </NavItem>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <NavItem isOpen={isOpen} icon={<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12.01 18C11.31 18 10.75 17.44 10.75 16.74C10.75 16.03 11.31 15.49 12.01 15.49C12.72 15.49 13.26 16.03 13.26 16.74C13.25 17.43 12.72 18 12.01 18ZM15.02 10.6C14.26 11.71 13.54 12.06 13.15 12.77C13.05 12.95 12.99 13.09 12.96 13.4C12.91 13.85 12.51 14.18 12.06 14.18H12C11.48 14.18 11.07 13.74 11.12 13.22C11.15 12.88 11.23 12.53 11.42 12.19C11.91 11.32 12.84 10.8 13.38 10.03C13.95 9.22 13.63 7.7 12.01 7.7C11.3 7.7 10.83 8.06 10.54 8.49C10.29 8.85 9.85 9.02 9.44 8.85C8.91 8.64 8.72 8 9.04 7.54C9.65 6.65 10.67 6 11.99 6C13.47 6 14.48 6.67 15 7.52C15.44 8.24 15.7 9.59 15.02 10.6Z" fill="currentColor" /></svg>}>
            Ayuda
          </NavItem>
          <NavItem isOpen={isOpen} icon={<svg className={clsx('transition-[width] duration-300 ease-out', isOpen ? 'w-[24px]' : 'w-[40px]')} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5L11 5C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3L4 3C2.9 3 2 3.9 2 5L2 19C2 20.1 2.9 21 4 21L11 21C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19L4 19L4 5Z" fill="currentColor" /><path d="M16.3 9.10748C15.91 8.71748 15.91 8.09748 16.3 7.70748C16.69 7.31748 17.31 7.31748 17.7 7.70748L21.29 11.3075C21.68 11.6975 21.68 12.3275 21.29 12.7175L17.7 16.3075C17.31 16.6975 16.69 16.6975 16.3 16.3075C15.91 15.9175 15.91 15.2975 16.3 14.9075L18.2 13.0075L9.00002 13.0075C8.45002 13.0075 8.00002 12.5575 8.00002 12.0075C8.00002 11.4575 8.45002 11.0075 9.00002 11.0075L18.2 11.0075L16.3 9.10748Z" fill="currentColor" /></svg>}>
            Cerrar sesión
          </NavItem>
        </div>
      </nav>
    </div>
  );
};