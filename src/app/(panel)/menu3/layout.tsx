const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1">
      <div className="h-[72px] bg-neutral-50 flex justify-between items-center px-[56px] shadow-xl">
        <div>
          Menu Title 3
        </div>
        <div>
          Nombre apellido apellido
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
