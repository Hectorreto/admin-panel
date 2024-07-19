import Image from 'next/image';
import logo from './(assets)/logo.png';
import bgLogo from './(assets)/bg-logo.png';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex-1 relative">
        <Image src={bgLogo} alt="logo" width={1920} height={1280} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(100.96deg,_rgba(0,_0,_0,_0.8)_27.47%,_rgba(0,_0,_0,_0.4)_73.01%)]"></div>
        <Image src={logo} alt="logo" width={320} height={165} className="absolute bottom-[37px] left-1/2 -translate-x-1/2" />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
