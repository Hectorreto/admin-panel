import { Link } from 'next-view-transitions';
import { ButtonBase } from './button-base';

type Props = {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  href: string;
  children: React.ReactNode;
};

export const LinkSecondary = ({ children, size, href }: Props) => {
  return (
    <ButtonBase
      component={Link}
      colorType="secondary"
      size={size}
      href={href}
    >
      {children}
    </ButtonBase>
  );
};
