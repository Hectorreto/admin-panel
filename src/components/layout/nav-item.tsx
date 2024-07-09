import clsx from 'clsx';

type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  active?: boolean;
};

export const NavItem = ({ children, icon, isOpen, active }: Props) => {
  return (
    <div
      className={clsx(
        'h-[56px] px-[16px] flex items-center gap-[16px] text-sm overflow-hidden whitespace-nowrap animate-ease',
        !active && 'text-primary-700 hover:bg-primary-100',
        active && 'bg-primary-primary text-neutral-50',
      )}
    >
      <div className={clsx('transition-[width] duration-300 ease-out flex justify-center', isOpen ? 'w-[24px]' : 'w-[40px]')}>
        {icon}
      </div>
      {children}
    </div>
  );
};
