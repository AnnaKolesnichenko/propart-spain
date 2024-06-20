'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButtons from '@/components/ui/SwiperButtons/SwiperButtons';
import AreasSwiperSlide from '../AreasSwiperSlide/AreasSwiperSlide';
import 'swiper/css';
import './AreasSwiperSwiper.scss';
import { useTranslation } from 'react-i18next';

const AreasSwiperSwiper = () => {
  const { t } = useTranslation('home');
  const swiperRef = useRef<any>(null);
  return (
    <section className="areasSwiperSection">
      <div className="areasSwiperSection__swiperButtons">
        <SwiperButtons
          onPrevClick={() => {
            swiperRef.current.slidePrev();
          }}
          onNextClick={() => {
            swiperRef.current.slideNext();
          }}
        />
      </div>
      <Swiper
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        className="areasSwiperSection__swiper"
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
      >
        <SwiperSlide className="areasSwiperSection__swiper__slide">
          <AreasSwiperSlide
            title="Estepona"
            price={t('areas.project1-price')}
            bestFor={t('areas.project1-best-for')}
            airport={t('areas.project1-airport')}
            description={t('areas.project1-description')}
            path="/main/section3areaSlider/aboutAreaSliderImg1.png"
            linkPath="area/estepona"
          />
        </SwiperSlide>
        <SwiperSlide className="areasSwiperSection__swiper__slide">
          <AreasSwiperSlide
            title="Mijas"
            price={t('areas.project2-price')}
            bestFor={t('areas.project2-best-for')}
            airport={t('areas.project2-airport')}
            description={t('areas.project2-description')}
            path="/main/section3areaSlider/aboutAreaSliderImg2.png"
            linkPath="area/mijas"
          />
        </SwiperSlide>
        <SwiperSlide className="areasSwiperSection__swiper__slide">
          <AreasSwiperSlide
            title="Estepona"
            price={t('areas.project3-price')}
            bestFor={t('areas.project3-best-for')}
            airport={t('areas.project3-airport')}
            description={t('areas.project3-description')}
            path="/main/section3areaSlider/aboutAreaSliderImg3.png"
            linkPath="area/estepona"
          />
        </SwiperSlide>

        <SwiperSlide className="areasSwiperSection__swiper__slide">
          <AreasSwiperSlide
            title="Benahavis"
            price={t('areas.project4-price')}
            bestFor={t('areas.project4-best-for')}
            airport={t('areas.project4-airport')}
            description={t('areas.project4-description')}
            path="/main/section3areaSlider/aboutAreaSliderImg4.png"
            linkPath="aarea/benahavis"
          />
        </SwiperSlide>

        <SwiperSlide className="areasSwiperSection__swiper__slide">
          <AreasSwiperSlide
            title="Fuengirola"
            price={t('areas.project5-price')}
            bestFor={t('areas.project5-best-for')}
            airport={t('areas.project5-airport')}
            description={t('areas.project5-description')}
            path="/main/section3areaSlider/aboutAreaSliderImg5.png"
            linkPath="area/fuengirola"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default AreasSwiperSwiper;
