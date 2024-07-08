import { NavBar } from '@/components/nav-bar/nav-bar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen flex">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
