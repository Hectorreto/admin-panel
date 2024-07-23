'use client';

import { ButtonBase } from './button-base';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const ButtonPrimary = ({ children, size, type, disabled, onClick }: Props) => {
  return (
    <ButtonBase
      component="button"
      colorType="primary"
      buttonType={type || 'button'}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
};
