import React from 'react';
import './OffersList.scss';
import Image from 'next/image';
import OfferCard from '../OfferCard';
import { OfferCardT } from '../OfferCard/OfferCard';

interface OffersListProps {
  offersData: OfferCardT[];
  hideButtons: boolean;
}

const OffersList = ({ offersData, hideButtons }: OffersListProps) => {
  return (
    <div>
      <div className="projects__offers-list">
        {offersData.map(item => (
          <OfferCard offer={item} key={item.id} />
        ))}
      </div>
      {!hideButtons && (
        <div className="projects__btn-group">
          <button className="map__btn">
            <div className="circle-mask" />
            <Image src="/assets/icons/earth.svg" alt="Map Icon" width={24} height={24} />
            Map
          </button>
          <button className="show__btn">Show more</button>
        </div>
      )}
    </div>
  );
};

export default OffersList;
