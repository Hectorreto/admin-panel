'use client';

import clsx from 'clsx';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export const ButtonSecondary = ({
  type = 'button',
  onClick,
  size = 'md',
  children,
  disabled,
  icon,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        size === 'lg' && ['h-[48px] text-base', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[48px]' : 'w-[48px]'],
        size === 'md' && ['h-[40px] text-sm', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[32px]' : 'w-[40px]'],
        size === 'sm' && ['h-[36px] text-sm', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[24px]' : 'w-[36px]'],
        size === 'xs' && ['h-[32px] text-xs', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[16px]' : 'w-[32px]'],
        'flex justify-center items-center rounded-[8px] shadow-sm outline-none font-semibold text-base focus-visible:outline-2',
        !disabled && [
          'bg-neutral-00 text-primary-primary hover:bg-primary-100 active:bg-primary-200',
          'border-2 border-primary-primary hover:border-primary-100 active:border-primary-200',
        ],
        disabled && [
          'bg-neutral-00 text-neutral-500 shadow-[transparent]',
          'border-2 border-neutral-200',
        ],
      )}
    >
      {icon}
      {children}
    </button>
  );
};
