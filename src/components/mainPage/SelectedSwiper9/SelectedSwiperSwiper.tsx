'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SelectedSwiperCard from './SelectedSwiperCard/SelectedSwiperCard';
import { useMediaQuery } from 'react-responsive';
import { SelectedSwiperCardTypes } from '@/types';
import 'swiper/css/pagination';
import './SelectedSwiper.scss';

interface SelectedSwiperSwiperProps {
  data: SelectedSwiperCardTypes[];
}

const SelectedSwiperSwiper = ({ data }: SelectedSwiperSwiperProps) => {
  const [isClient, setIsClient] = useState(false);
  const laptop = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && laptop && (
      <section className="container">
      <Swiper
        className="selected-swiper" 
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={16}
      >
        {data &&
          Array.isArray(data) &&
          data.length > 0 &&
          data.map((slide, i) => (
            <SwiperSlide key={slide.id} className="selected-swiper__slide">
              <SelectedSwiperCard cardData={slide} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
    )
   
  );
};
export default SelectedSwiperSwiper;
