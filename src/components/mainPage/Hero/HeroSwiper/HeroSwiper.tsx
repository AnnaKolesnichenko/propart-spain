'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { mainHeroSwiperData } from '@/constants/mainPage';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './HeroSwiper.scss';

const HeroSwiper = () => {
  const data = mainHeroSwiperData;
  return (
    <Swiper
      className="hero-swiper" //container
      slidesPerView={1}
      effect={'fade'}
      modules={[EffectFade, Autoplay]}
      allowTouchMove={false}
      autoplay={{
        delay: 5000,
      }}

    >
      {data &&
        Array.isArray(data) &&
        data.length > 0 &&
        data.map((slide, i) => (
          <SwiperSlide key={i} className="hero-swiper__slide">
            <Image
              className="hero-swiper__slide__image"
              src={slide.src}
              fill
              alt={slide.name}
              priority={true}
              sizes='100%'
            ></Image>
            <div className="hero-swiper__slide__bg"></div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
export default HeroSwiper;
