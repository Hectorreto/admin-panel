import clsx from 'clsx';
import { usePathname } from 'next/navigation';

type Props = {
  isOpen: boolean;
};

export const Header = ({ isOpen }: Props) => {
  return (
    <div className="h-[72px]">
      <div className="fixed h-[72px] shadow-xl left-0 right-0"></div>
      <div
        className={clsx(
          'h-[72px] bg-neutral-50 flex items-center justify-between px-[56px] gap-[56px] fixed animate-ease right-0',
          isOpen ? 'left-[224px]' : 'left-[72px]',
        )}
      >
        <Item />
        <div className="whitespace-nowrap">
          Nombre apellido apellido
        </div>
      </div>
    </div>
  );
};

const Item = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/components')) {
    return (
      <h4 className="font-bold text-primary-600">Components</h4>
    );
  }

  return (
    <h4 className="font-bold text-primary-600">{pathname}</h4>
  );
};
