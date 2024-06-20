import { ReactNode } from 'react';

export type CustomIconBtnProps = {
  className: string;
  ariaLabel?: string;
  children: ReactNode;
  onClick?: () => void;
};
