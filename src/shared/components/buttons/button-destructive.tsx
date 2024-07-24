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

export const ButtonDestructive = ({
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
          'bg-alert-red text-neutral-00 hover:bg-alert-red2 active:bg-alert-red',
          'border-2 border-alert-red hover:border-alert-red2 active:border-alert-red focus-visible:border-[#FFFFFF]',
          'focus-visible:outline-none focus-visible:shadow-[0_0_6px_4px_#96020080]',
        ],
        disabled && [
          'bg-neutral-200 text-neutral-500 shadow-[transparent]',
        ],
      )}
    >
      {icon}
      {children}
    </button>
  );
};
