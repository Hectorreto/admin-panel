import clsx from 'clsx';

type Props = {
  component: React.ElementType;
  colorType: 'primary' | 'secondary';
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  onClick?: () => void;
  buttonType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
};

export const ButtonBase = ({
  component: Component,
  size = 'md',
  children,
  buttonType,
  colorType,
  disabled,
  onClick,
  href,
}: Props) => {
  return (
    <Component
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      href={href}
      className={clsx(
        size === 'lg' && 'h-[48px] px-[48px] text-base',
        size === 'md' && 'h-[40px] px-[32px] text-sm',
        size === 'sm' && 'h-[36px] px-[24px] text-sm',
        size === 'xs' && 'h-[32px] px-[16px] text-xs',
        'flex justify-center items-center rounded-[8px] shadow-sm outline-none font-semibold text-base focus-visible:outline-2',
        disabled ? colorTypes[colorType].disabled : colorTypes[colorType].enabled,
      )}
    >
      {children}
    </Component>
  );
};

const colorTypes = {
  primary: {
    enabled: ['bg-primary-primary text-neutral-00 hover:bg-primary-300 active:bg-primary-400'],
    disabled: ['bg-neutral-200 text-neutral-500 shadow-[transparent]'],
  },
  secondary: {
    enabled: [
      'bg-neutral-00 text-primary-primary hover:bg-primary-100 active:bg-primary-200',
      'border-2 border-primary-primary hover:border-primary-100 active:border-primary-200',
    ],
    disabled: [
      'bg-neutral-200 text-neutral-500 shadow-[transparent]',
      'border-2 border-neutral-200',
    ],
  },
};
