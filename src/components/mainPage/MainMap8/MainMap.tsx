'use client';
import { useState, useEffect } from 'react';
import MainMapMap from './MainMapMap/MainMapMap';
import AreasSwiperSlide from '../AreasSwiper3/AreasSwiperSlide/AreasSwiperSlide';
import { useMediaQuery } from 'react-responsive';
import './MainMap.scss';
import { useTranslation } from 'react-i18next';
const MainMap = () => {
  const { t } = useTranslation('home');
  const [isClient, setIsClient] = useState(false);
  const tablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient &&
    tablet && (
      <section className="container">
        <div className="main-map">
          <div className="main-map__active-area">
            <AreasSwiperSlide
              title="Estepona"
              price={t('areas.project1-price')}
              bestFor={t('areas.project1-best-for')}
              airport={t('areas.project1-airport')}
              description={t('areas.map-description')}
              path="/main/section3areaSlider/aboutAreaSliderImg1.png"
              linkPath="area/estepona"
            />
          </div>
          <MainMapMap mapCoordinates={[-5.146848, 36.426807]} mapZoom={11} />
        </div>
      </section>
    )
  );
};

export default MainMap;
