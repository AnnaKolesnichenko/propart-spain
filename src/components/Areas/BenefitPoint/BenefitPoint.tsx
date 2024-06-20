import React from 'react';
import './benefitPoint.scss';
import Image from 'next/image';

interface Benefits {
  point: { icon: string; name: string };
}

const BenefitPoint: React.FC<Benefits> = ({ point }) => {
  return (
    <li className="benefit">
      <Image src={point.icon} alt={point.name} width={19} height={19} />
      <span>{point.name}</span>
    </li>
  );
};

export default BenefitPoint;
