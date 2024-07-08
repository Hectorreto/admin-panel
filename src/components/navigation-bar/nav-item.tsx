type Props = {
  children: React.ReactNode;
};

export const NavItem = ({ children }: Props) => {
  return (
    <div className="h-[56px] px-[16px] flex items-center gap-[16px]">
      {children}
    </div>
  );
};
