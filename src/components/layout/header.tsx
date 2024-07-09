import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const Header = ({ children, isOpen }: Props) => {
  return (
    <div className="h-[72px]">
      <div className="fixed h-[72px] shadow-xl left-0 right-0"></div>
      <div
        className={clsx(
          'h-[72px] bg-neutral-50 flex items-center justify-between px-[56px] gap-[56px] fixed animate-ease right-0',
          isOpen ? 'left-[224px]' : 'left-[72px]',
        )}
      >
        <div>
          {children}
        </div>
        <div className="whitespace-nowrap">
          Nombre apellido apellido
        </div>
      </div>
    </div>
  );
};
