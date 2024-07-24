import { Link } from 'next-view-transitions';
import clsx from 'clsx';

type Props = {
  href: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export const LinkPrimary = ({
  href,
  size = 'md',
  children,
  disabled,
  icon,
}: Props) => {
  const Component = disabled ? 'div' : Link;

  return (
    <Component
      href={href}
      className={clsx(
        size === 'lg' && ['h-[48px] text-base', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[48px]' : 'w-[48px]'],
        size === 'md' && ['h-[40px] text-sm', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[32px]' : 'w-[40px]'],
        size === 'sm' && ['h-[36px] text-sm', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[24px]' : 'w-[36px]'],
        size === 'xs' && ['h-[32px] text-xs', (icon && children) ? 'gap-[8px] pl-[16px] pr-[20px]' : (children) ? 'px-[16px]' : 'w-[32px]'],
        'flex justify-center items-center rounded-[8px] shadow-sm outline-none font-semibold text-base focus-visible:outline-2',
        !disabled && ['bg-primary-primary text-neutral-00 hover:bg-primary-300 active:bg-primary-400'],
        disabled && ['bg-neutral-200 text-neutral-500 shadow-[transparent]'],
      )}
    >
      {icon}
      {children}
    </Component>
  );
};
