import { PanelLayout } from '@/components/panel-layout/panel-layout';
import { auth } from '../../auth';

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const session = await auth();
  const user = session?.user;
  const userName = user?.name || 'Nombre Apellido Apellido';

  return (
    <PanelLayout userName={userName}>
      {children}
    </PanelLayout>
  );
};

export default Layout;
