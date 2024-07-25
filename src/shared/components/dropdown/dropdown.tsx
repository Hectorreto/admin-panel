'use client';

import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';

type UserModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
};

export const Dropdown = ({
  isOpen,
  onRequestClose,
  children,
}: UserModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen && !isVisible) {
      setIsVisible(true);
    } else if (!isOpen && isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  }, [isOpen, isVisible]);

  return (
    <>
      {(isOpen || isVisible) && (
        <div
          className={clsx(
            'relative transition duration-300 ease-out z-10',
            (isOpen && isVisible) ? 'opacity-100' : 'opacity-0',
          )}
        >
          <Modal onRequestClose={onRequestClose}>{children}</Modal>
        </div>
      )}
    </>
  );
};

type ModalProps = {
  children: ReactNode;
  onRequestClose: () => void;
};

const Modal = ({ children, onRequestClose }: ModalProps) => {
  useEffect(() => {
    document.addEventListener('click', onRequestClose);
    return () => {
      document.removeEventListener('click', onRequestClose);
    };
  }, [onRequestClose]);

  return (
    <div className="absolute left-0 right-0 top-1 flex flex-col rounded bg-neutral-50 shadow-md">
      {children}
    </div>
  );
};
