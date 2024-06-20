import React from 'react';
import Image from 'next/image';
import './propertyDetails.scss';

interface Point {
  icon: string;
  pointName: string;
  pointDetail: string;
}

interface PropertyDetailsProps {
  point: Point;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ point }) => {
  return (
    <li className="points-list-item">
      <Image src={point.icon} alt={point.pointName} width={24} height={25} />
      <div className="item-points">
        <h4>{point.pointName}</h4>
        <span>{point.pointDetail}</span>
      </div>
    </li>
  );
};

export default PropertyDetails;
