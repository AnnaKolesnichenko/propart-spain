'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './AreaSlider.scss';
import Image from 'next/image';
import { useState } from 'react';

type AreaSliderProps = {
  images: string[];
  area: string;
};

const AreaSlider = ({ images, area }: AreaSliderProps) => {
  const [isLoad, setLoad] = useState(true);
  return (
    <div className="area__slider">
      {isLoad && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}
      <Swiper
        draggable
        onInit={() => {
          setLoad(false);
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="slider"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={10}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
      >
        {images.map((item, idx) => (
          <SwiperSlide className='slide' key={idx}>
            <Image alt={area} src={item} layout="fill" objectFit="cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AreaSlider;
