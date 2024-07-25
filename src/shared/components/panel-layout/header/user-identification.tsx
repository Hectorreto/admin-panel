'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { Dropdown } from '../../dropdown/dropdown';
import { logout } from '@/actions/user/logout';
import { Link } from 'next-view-transitions';

type Props = {
  userName: string;
};

export const UserIdentification = ({ userName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(
        'whitespace-nowrap w-[296px] flex gap-1 px-4 h-[32px] items-center rounded relative',
        isOpen ? 'bg-neutral-100 text-primary-800' : [
          'bg-neutral-100 text-primary-600',
          'hover:bg-primary-100',
          'active:bg-primary-200 text-primary-800',
        ]
      )}
    >
      <div className="flex gap-1 items-center flex-1 overflow-hidden">
        <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
            fill="currentColor"
          />
        </svg>
        <span className="flex-1 text-left">{userName}</span>
      </div>
      <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.88 9.29006L12 13.1701L8.12001 9.29006C7.73001 8.90006 7.10001 8.90006 6.71001 9.29006C6.32001 9.68006 6.32001 10.3101 6.71001 10.7001L11.3 15.2901C11.69 15.6801 12.32 15.6801 12.71 15.2901L17.3 10.7001C17.69 10.3101 17.69 9.68006 17.3 9.29006C16.91 8.91006 16.27 8.90006 15.88 9.29006Z"
          fill="currentColor"
        />
      </svg>
      <div className="absolute top-[32px] left-0 w-full">
        <Dropdown isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          <Link href="/cambiar-contrasenia" className="h-[44px] flex items-center px-4 gap-1 hover:bg-primary-100 focus-visible:outline-primary-300 active:bg-primary-primary text-primary-800 hover:text-primary-700 active:text-neutral-50">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.9999 6.66683H14.1666V5.00016C14.1666 2.70016 12.2999 0.833496 9.99992 0.833496C7.69992 0.833496 5.83325 2.70016 5.83325 5.00016V6.66683H4.99992C4.08325 6.66683 3.33325 7.41683 3.33325 8.3335V16.6668C3.33325 17.5835 4.08325 18.3335 4.99992 18.3335H14.9999C15.9166 18.3335 16.6666 17.5835 16.6666 16.6668V8.3335C16.6666 7.41683 15.9166 6.66683 14.9999 6.66683ZM9.99992 14.1668C9.08325 14.1668 8.33325 13.4168 8.33325 12.5002C8.33325 11.5835 9.08325 10.8335 9.99992 10.8335C10.9166 10.8335 11.6666 11.5835 11.6666 12.5002C11.6666 13.4168 10.9166 14.1668 9.99992 14.1668ZM7.49992 6.66683V5.00016C7.49992 3.61683 8.61659 2.50016 9.99992 2.50016C11.3833 2.50016 12.4999 3.61683 12.4999 5.00016V6.66683H7.49992Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-normal">Cambiar contraseña</span>
          </Link>
          <button type="button" onClick={() => logout()} className="h-[44px] flex items-center px-4 gap-1 hover:bg-primary-100 focus-visible:outline-primary-300 active:bg-primary-primary text-primary-800 hover:text-primary-700 active:text-neutral-50">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.3335 4.16667L9.16683 4.16667C9.62516 4.16667 10.0002 3.79167 10.0002 3.33333C10.0002 2.875 9.62516 2.5 9.16683 2.5L3.3335 2.5C2.41683 2.5 1.66683 3.25 1.66683 4.16667L1.66683 15.8333C1.66683 16.75 2.41683 17.5 3.3335 17.5L9.16683 17.5C9.62516 17.5 10.0002 17.125 10.0002 16.6667C10.0002 16.2083 9.62516 15.8333 9.16683 15.8333L3.3335 15.8333L3.3335 4.16667Z"
                fill="currentColor"
              />
              <path
                d="M13.5835 7.58957C13.2585 7.26457 13.2585 6.7479 13.5835 6.4229C13.9085 6.0979 14.4252 6.0979 14.7502 6.4229L17.7418 9.4229C18.0668 9.7479 18.0668 10.2729 17.7418 10.5979L14.7502 13.5896C14.4252 13.9146 13.9085 13.9146 13.5835 13.5896C13.2585 13.2646 13.2585 12.7479 13.5835 12.4229L15.1668 10.8396L7.50018 10.8396C7.04185 10.8396 6.66685 10.4646 6.66685 10.0062C6.66685 9.5479 7.04185 9.1729 7.50018 9.1729L15.1668 9.1729L13.5835 7.58957Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-normal">Cerrar sesión</span>
          </button>
        </Dropdown>
      </div>
    </button>
  );
};
