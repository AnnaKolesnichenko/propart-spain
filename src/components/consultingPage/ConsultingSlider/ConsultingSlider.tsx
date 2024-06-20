'use client';

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ConsultingSlider.scss';
const sliderData = [
  {
    id: 1,
    name: 'Oasis 325 Phase II',
    area: 'Calle Cam. del Reloj',
    price: '€ 725,000',
    path: 'slide1.jpg',
  },
  { id: 2, name: 'Salvia', area: 'San Pedro Alcantara', price: '€ 761,500', path: 'slide2.png' },
  { id: 3, name: 'Camojan Six', area: 'Marbella', price: '€ 7,900,000', path: 'slide3.jpg' },
];
const ConsultingSlider = () => {
  return (
    <Swiper
      className="consulting-swiper"
      slidesPerView="auto"
      spaceBetween={35}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          direction: 'vertical',
        },
      }}
    >
      {sliderData &&
        Array.isArray(sliderData) &&
        sliderData.length > 0 &&
        sliderData.map(slide => (
          <SwiperSlide key={slide.id} className="slide">
            <Link href="/project/660c0603c0e0da2025385bcf" className="link">
              <div className="image">
                <Image
                  src={`/images/consulting/${slide.path}`}
                  alt={slide.name}
                  fill
                  sizes="100%"
                  priority
                />
                <div className="bg"></div>
              </div>
              <div className="text">
                <span className="title">{slide.name}</span>
                <div className="bottom">
                  <span className="area">{slide.area}</span>
                  <span className="price">{slide.price}</span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ConsultingSlider;
