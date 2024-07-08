import { NavigationBar } from '@/components/navigation-bar/navigation-bar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen flex">
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
