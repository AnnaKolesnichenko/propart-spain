import React from 'react';

import { CustomIconBtnProps } from './types';

export const CustomIconBtn: React.FC<CustomIconBtnProps> = ({ children, ariaLabel, className, onClick }) => {
  return (
    <button type="button" aria-label={ariaLabel} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
