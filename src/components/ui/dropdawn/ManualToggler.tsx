import React, { ReactNode } from 'react';
import Image from 'next/image';

interface ManualTogglerProps {
  children: ReactNode;
  onToggle: (name: string) => void;
  visible: boolean;
  name: string;
}

const ManualToggler = ({ children, onToggle, visible, name }: ManualTogglerProps) => {
  return (
    <div className="manual__toggler">
      {children}
      <button onClick={() => onToggle(name)}>
        <Image
          title={visible ? 'Selection' : 'Manual input'}
          src={!visible ? '/assets/icons/pen.svg' : '/assets/icons/no-pen.svg'}
          alt="Pen"
          width={15}
          height={15}
        />
      </button>
    </div>
  );
};

export default ManualToggler;
