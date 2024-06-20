'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './AreasList.scss';
import Link from 'next/link';

interface AreasListProps {
  areasData: any[];
  title?: string;
}

export interface AreaCard {
  image: string;
  title: string;
  infoText: string;
  userChoise: boolean;
  url?: string;
}

interface AreaCardProps {
  area: AreaCard;
}
const AreaCard = ({ area }: AreaCardProps) => {
  return (
    <div className="projects__area-card">
      <Link href={`/areas/${area.url}`}>
        <Image
          className="card-image"
          alt={area.title!}
          src={area.image}
          layout="fill"
          objectFit="cover"
        />
        <div hidden={!area.userChoise} className="card__label">
          Tourists Choice
        </div>
        <div className="card__inner">
          <h3 className="card__title">{area.title}</h3>
          <p className="card__text">{area.infoText}</p>
        </div>
      </Link>
    </div>
  );
};

const AreasList = ({ areasData, title }: AreasListProps) => {
  return (
    <div className="projects__areas">
      {/* FOR desktop */}
      <h2 className="projects__areas-title">{title}</h2>
      <div className="projects__areas-list">
        {areasData.map((area, i) => (
          <AreaCard area={area} key={i} />
        ))}
      </div>
      {/* FOR mobile */}
      <Swiper
        modules={[Autoplay, Pagination]}
        // autoplay={{ delay: 2000 }}
        className="areas__slider"
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
      >
        {areasData.map((area, i) => (
          <SwiperSlide key={i}>
            <AreaCard area={area} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AreasList;
