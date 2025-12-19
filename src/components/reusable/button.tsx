import React from 'react';
import type { 
  ButtonHTMLAttributes, 
  PropsWithChildren 
} from 'react';

interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;