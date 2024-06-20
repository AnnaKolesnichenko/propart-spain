'use client';

import Image from 'next/image';
import Link from 'next/link';
import './AreasSwiperSlide.scss';

interface MainSwiperSlideProps {
  title: string;
  price: string;
  bestFor: string;
  path: string;
  airport: string;
  description: string;
  linkPath: string;
}

const AreasSwiperSlide = ({ title, price, bestFor, path, airport, description, linkPath }: MainSwiperSlideProps) => {
  return (
    <Link href={linkPath} className="main-swiper-section-slide">
      <div className="text">
        <div className="title-block">
          <span className="title">{title}</span>
          <div className="informations">
            <span className="info price">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.4825 17.3327C3.88 17.3327 0.14917 13.6018 0.14917 8.9993C0.14917 4.39685 3.88 0.666016 8.4825 0.666016C13.0849 0.666016 16.8159 4.39685 16.8159 8.9993C16.8159 13.6018 13.0849 17.3327 8.4825 17.3327ZM6.8575 8.16602C6.92969 7.81158 7.09292 7.48204 7.33113 7.20983C7.56933 6.93762 7.87431 6.73213 8.21604 6.61356C8.55775 6.495 8.92445 6.46745 9.28015 6.53364C9.63575 6.59982 9.96795 6.75745 10.2441 6.99102L11.6616 6.04685C11.1749 5.51665 10.5458 5.13773 9.84965 4.95533C9.15335 4.77292 8.41931 4.79474 7.73512 5.01818C7.05093 5.24161 6.44549 5.65723 5.99109 6.2154C5.53669 6.77357 5.25251 7.45073 5.1725 8.16602H4.31583V9.8327H5.17167C5.25154 10.5482 5.53568 11.2255 5.99013 11.7838C6.44459 12.3422 7.05016 12.7579 7.73451 12.9814C8.41887 13.2048 9.15305 13.2266 9.84945 13.044C10.5458 12.8615 11.1749 12.4823 11.6616 11.9518L10.2441 11.0068C9.96805 11.2404 9.63585 11.3981 9.28025 11.4643C8.92475 11.5305 8.55805 11.503 8.21633 11.3846C7.87461 11.2661 7.56963 11.0607 7.33137 10.7886C7.09312 10.5165 6.9298 10.1871 6.8575 9.8327L10.9824 9.8335V8.16685L6.8575 8.16602Z"
                  fill="white"
                />
              </svg>
              {price}
            </span>
            <span className="info">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.81648 8.42648V0.833984L15.9832 5.83398V17.5007H0.983154V5.83398L6.81648 8.42648Z"
                  fill="white"
                />
              </svg>
              {bestFor}
            </span>
            <span className="info">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.16735 5.71025L15.4832 9.5V11L9.16735 9.1055V13.1255L11.5358 14.375V15.5L7.98315 14.75L4.43052 15.5V14.375L6.79895 13.1248V9.1047L0.483154 11V9.5L6.79895 5.71025V1.625C6.79895 1.32663 6.92375 1.04048 7.14575 0.8295C7.36785 0.61853 7.66905 0.5 7.98315 0.5C8.29725 0.5 8.59845 0.61853 8.82055 0.8295C9.04255 1.04048 9.16735 1.32663 9.16735 1.625V5.71025Z"
                  fill="white"
                />
              </svg>
              {airport}
            </span>
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="image-container">
        <Image src={path} fill sizes="100%" priority alt={title}></Image>
        <div className="slide-bg"></div>
      </div>
    </Link>
  );
};
export default AreasSwiperSlide;
