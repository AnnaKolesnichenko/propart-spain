'use client';

import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

import { Points } from '../PropertyDetails/propertyPoints';
import ImagesModal from '../ImagesModal/ImagesModal';
import SliderResponsive from '../Slider/SliderResponsive';
import PropertyDetails from '../PropertyDetails/PropertyDetails';

import './mainInfo.scss';
import { useTranslation } from 'react-i18next';
import MainMobileHeaderInfo from './MainMobileHeaderInfo';

interface Project {
  id: string;
  image: string;
  title: string;
  price: string;
  pricePerMeter: string;
  location: string;
  floors: string;
  bed: string;
  bathrooms: string;
  projectFloor: string;
  rooms: string;
  type: string;
  size: string;
  description: string[];
  amenities: string[];
  images: {
    title: string;
    image: string;
  }[];
}

interface MainInfoProps {
  item: Project;
  handleModalOpen: () => void;
  handleModalClose: () => void;
}

const MainInfo: React.FC<MainInfoProps> = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation('project-card');

  console.log(item.amenities);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const points = [
    { icon: '/images/floors.svg', pointName: t('card.about.total-floors'), pointDetail: '5' },
    {
      icon: '/images/type.svg',
      pointName: t('card.about.type'),
      pointDetail: t('card.about.apartment'),
    },
    { icon: '/images/floor.svg', pointName: t('card.about.floor'), pointDetail: '5' },
    { icon: '/images/size.svg', pointName: t('card.about.size'), pointDetail: '5' },
    { icon: '/images/rooms.svg', pointName: t('card.about.rooms'), pointDetail: '5' },
  ];

  return (
    <div>
      <div className="project-hero">
        <MainMobileHeaderInfo item={item} />
        <AnimatePresence>
          {modalOpen && <ImagesModal data={item.images} handleModalClose={handleModalClose} />}
        </AnimatePresence>

        <SliderResponsive data={item.images} handleModalOpen={handleModalOpen} />

        <div className="about-project">
          <span className="price">
            {t('card.about.from-price')} <span className="amount">€ {item.price}</span>
          </span>
          <span className="price-meter">
            $ {item.pricePerMeter} {t('card.about.for-meter')} m<sup>2</sup>
          </span>
          <h3 className="project-title">{item.title}</h3>
          <h4 className="project-location">{item.location}</h4>
          <ul className="points-list">
            {points.map((point, i) => (
              <PropertyDetails point={point} key={i} />
            ))}
          </ul>
          <div className="buttons">
            <button className="buttons-contact">{t('card.about.contact-btn')}</button>
            <button className="buttons-icon">
              <FaPhoneAlt width={18} height={18} className="phone" />
            </button>
          </div>
        </div>

        <div className="about-project-tablet">
          <ul className="points-list">
            {points.map((point, i) => (
              <PropertyDetails point={point} key={i} />
            ))}
          </ul>
          <div className="about-project-tablet-details">
            <div className="about">
              <h3 className="project-title">{item.title}</h3>
              <h4 className="project-location">{item.location}</h4>
            </div>
            <div className="about">
              <span className="price">
                {t('card.about.from-price')} <span className="amount">€ {item.price}</span>
              </span>
              <span className="price-meter">
                $ {item.pricePerMeter} {t('card.about.for-meter')} m<sup>2</sup>
              </span>
            </div>

            <div className="buttons">
              <button className="buttons-contact">{t('card.about.contact-btn')}</button>
              <button className="buttons-icon">
                <FaPhoneAlt width={18} height={18} className="phone" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
