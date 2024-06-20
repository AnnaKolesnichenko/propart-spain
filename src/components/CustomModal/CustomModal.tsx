import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

import { CustomModalProps } from './types';

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
  classNameModal,
  classNameBackdrop,
}) => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isOpen) {
      htmlElement.style.overflow = 'hidden';
    } else {
      htmlElement.style.overflow = 'auto';
    }

    return () => {
      htmlElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={classNameBackdrop}
      className={classNameModal}
      closeTimeoutMS={300}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};
