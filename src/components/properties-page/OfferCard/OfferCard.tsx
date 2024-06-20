'use client';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { addToSelected } from '@/utils/addToSelected';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './OfferCard.scss';

export type OfferCardT = {
  id: string;
  title: string;
  price: string;
  currency: 'eur' | 'usd';
  beds: number[];
  flors: number;
  costPerSquareMeter: number;
  image: string;
  location: string;
};
interface DesctopCardProps {
  offer: OfferCardT;
  setSelected: (flag: boolean) => void;
  selected: boolean;
}
interface OfferCardProps {
  offer: OfferCardT;
}

const ExtraInfoBlock = ({ offer }: OfferCardProps) => {
  return (
    <div className="info-extra">
      <p>
        <Image src="/assets/icons/beds.svg" alt="Beds count" width={18} height={18} />
        {offer.beds.join(', ')} bed
      </p>
      <p>
        <Image src="/assets/icons/m2.svg" alt="cost Per Square Meter" width={18} height={18} />$
        {offer.costPerSquareMeter} m<sup>2</sup>
      </p>
      <p>
        <Image src="/assets/icons/floors.svg" alt="Floors count" width={18} height={18} />
        {offer.flors} floors
      </p>
    </div>
  );
};
const OfferCardDesktop = ({ offer, selected, setSelected }: DesctopCardProps) => {
  const handleSelected = () => {
    addToSelected(offer);
    setSelected(!selected);
  };

 //console.log(offer);

  return (
    <div title={offer.title} className="projects__offer-card">
      <ResponsiveImage
        className="card-image"
        src={offer.image}
        alt={offer.title}
        width={588}
        height={388}
      />
      <div className="card-details">
        <button className={`favorite-btn ${selected ? 'selected' : ''}`} onClick={handleSelected}>
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.2334 10.0206V15.4301C20.2334 18.7847 20.2334 20.462 19.4381 21.1949C19.0588 21.5445 18.5801 21.764 18.0701 21.8224C17.0007 21.9448 15.752 20.8403 13.2544 18.6312C12.1504 17.6548 11.5984 17.1665 10.9597 17.0379C10.6453 16.9746 10.3215 16.9746 10.0071 17.0379C9.36841 17.1665 8.81639 17.6548 7.71241 18.6312C5.21484 20.8403 3.96609 21.9448 2.89672 21.8224C2.38672 21.764 1.90796 21.5445 1.52868 21.1949C0.733399 20.462 0.733398 18.7847 0.733398 15.4301V10.0206C0.733398 5.37459 0.733399 3.05157 2.16125 1.60825C3.58911 0.164917 5.88721 0.164917 10.4834 0.164917C15.0796 0.164917 17.3777 0.164917 18.8055 1.60825C20.2334 3.05157 20.2334 5.37459 20.2334 10.0206ZM6.4209 4.49826C6.4209 4.04952 6.78469 3.68576 7.2334 3.68576H13.7334C14.1821 3.68576 14.5459 4.04952 14.5459 4.49826C14.5459 4.94696 14.1821 5.31076 13.7334 5.31076H7.2334C6.78469 5.31076 6.4209 4.94696 6.4209 4.49826Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="info">
          <p>{offer.title}</p>
          <p>EUR {offer.price}</p>
        </div>
      </div>
      <ExtraInfoBlock offer={offer} />
    </div>
  );
};
const OfferCardMobile = ({ offer }: OfferCardProps) => {
  return (
    <div title={offer.title} className="projects__offer-card--mobile">
      <div className="image-wrapper">
        <Image
          loading="lazy"
          className="card-image"
          alt={offer.title}
          src={offer.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="mask"></div>
        <ExtraInfoBlock offer={offer} />
      </div>
      <div className="info">
        <p className="info__title">{offer.title}</p>
        <p className="info__location">{offer.location}</p>
        <p className="info__price">EUR {offer.price}</p>
      </div>
    </div>
  );
};

export const OfferCard = ({ offer }: OfferCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const selected = JSON.parse(localStorage.getItem('selected') || '[]');
      setIsSelected(selected.some((item: any) => item.id === offer.id));
    }
  }, [offer.id]);
  return (
    <>
      <OfferCardDesktop selected={isSelected} setSelected={setIsSelected} offer={offer} />
      <OfferCardMobile offer={offer} />
    </>
  );
};
