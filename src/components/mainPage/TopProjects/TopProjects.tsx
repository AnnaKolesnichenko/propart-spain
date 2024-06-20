'use client';
import { useRef } from 'react';
import SwiperButtons from '@/components/ui/SwiperButtons/SwiperButtons';
import TopProjectsSwiper from './TopProjectsSwiper/TopProjectsSwiper';
import './TopProjects.scss';
import { useTranslation } from 'react-i18next';
const TopProjects = () => {
  const { t } = useTranslation('home');
  const swiperRef = useRef<any>(null);
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="topProject container">
      <div className="topProject-information">
        <h2>{t('top-projects.title')}</h2>
        <p>
        {t('top-projects.description')}
        </p>
        <div className="topProject-swiper__swiper-buttons">
          <SwiperButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
        </div>
      </div>
      <div className="topProject-swiper__container">
        <TopProjectsSwiper swiperRef={swiperRef} />
      </div>
    </section>
  );
};
export default TopProjects;
