'use client';

import clsx from 'clsx';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
};

export const ButtonPrimary = ({
  type = 'button',
  onClick,
  size = 'md',
  children,
  disabled,
  icon,
  loading,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        size === 'lg' && ['h-[48px] text-base', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[48px]' : 'w-[48px]'],
        size === 'md' && ['h-[40px] text-sm', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[32px]' : 'w-[40px]'],
        size === 'sm' && ['h-[36px] text-sm', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[24px]' : 'w-[36px]'],
        size === 'xs' && ['h-[32px] text-xs', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[16px]' : 'w-[32px]'],
        'flex justify-center items-center rounded-[8px] shadow-sm outline-none font-semibold text-base focus-visible:outline-2',
        !disabled && !loading && ['text-neutral-00 active:bg-primary-400 bg-primary-primary hover:bg-primary-300'],
        !disabled && loading && ['bg-primary-400 text-neutral-00'],
        disabled && ['bg-neutral-200 text-neutral-500 shadow-[transparent]'],
      )}
    >
      {icon}
      {children}
    </button>
  );
};
