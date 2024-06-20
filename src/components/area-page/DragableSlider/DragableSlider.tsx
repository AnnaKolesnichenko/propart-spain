'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './DragableSlider.scss';
import { ReactNode, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type AreaSliderProps = {
  cardsArray: ReactNode[];
};

const DragableSlider = ({ cardsArray }: AreaSliderProps) => {
  const isTablet = useMediaQuery({ maxWidth: 850 });
  const isMobile = useMediaQuery({ maxWidth: 550 });
  const [isLoad, setIsload] = useState(true);

  const getSlidersCount = () => {
    let res = 3;
    if (isTablet) res = 2;
    if (isMobile) res = 1;
    return res;
  };

  return (
    <div className="area__slider-drag">
      {isLoad && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}
      <Swiper
        onInit={() => setIsload(false)}
        draggable
        loop={true}
        className="slider"
        spaceBetween={10}
        slidesPerView={getSlidersCount()}
      >
        {cardsArray.map((card, idx) => (
          <SwiperSlide key={idx}>{card}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DragableSlider;
