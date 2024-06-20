import React from 'react';
import BenefitPoint from '../BenefitPoint/BenefitPoint';

import './areaHeader.scss';
import initTranslations from '@/app/i18n';

type Benefit = {
  icon: string;
  name: string;
};

interface AreaHeaderProps {
  locale: string;
}

// const benefits: Benefit[] = [
//   { icon: '/images/sun.svg', name: t('areas.main-text')},
//   { icon: '/images/boat.svg', name: 'Luxury Lifestyle' },
//   { icon: '/images/golf.svg', name: 'Golf Courses' },
//   { icon: '/images/seafood.svg', name: 'Seafood Cuisine' },
//   { icon: '/images/night.svg', name: 'Nightlife' },
//   { icon: '/images/water.svg', name: 'Water Sports' },
// ];

const AreaHeader: React.FC<AreaHeaderProps> = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['area']);

  const benefits: Benefit[] = [
    { icon: '/images/sun.svg', name: t('areas.benefit-one') },
    { icon: '/images/boat.svg', name: t('areas.benefit-two') },
    { icon: '/images/golf.svg', name: t('areas.benefit-three') },
    { icon: '/images/seafood.svg', name: t('areas.benefit-four') },
    { icon: '/images/night.svg', name: t('areas.benefit-five') },
    { icon: '/images/water.svg', name: t('areas.benefit-six') },
  ];

  return (
    <>
      <h1 className="areas_title">{t('areas.main-text')}</h1>
      <div className="areas_about">
        <div className="about-parag">
          <p className="areas_descr">{t('areas.main-text-about')}</p>
        </div>
        <ul className="benefits">
          {benefits.map((item, i) => (
            <BenefitPoint point={item} key={i} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default AreaHeader;
