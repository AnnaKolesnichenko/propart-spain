import React from 'react';
import { useTranslation } from 'react-i18next';
import './mainInfo.scss';

interface MobileItemProps {
  item: { title: string; location: string; price: string; pricePerMeter: string };
}

const MainMobileHeaderInfo: React.FC<MobileItemProps> = ({ item }) => {
  const { t } = useTranslation('project-card');

  return (
    <div className="mobile-header-info">
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
    </div>
  );
};

export default MainMobileHeaderInfo;
