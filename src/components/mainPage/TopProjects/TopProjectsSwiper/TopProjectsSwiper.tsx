'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { mainTopProjectsSwiperData } from '@/constants/mainPage';
import './TopProjectsSwiper.scss';

interface TopProjectsSwiperProps {
  swiperRef: React.MutableRefObject<any | null>;
}

const TopProjectsSwiper = ({ swiperRef }: TopProjectsSwiperProps) => {
  const data = mainTopProjectsSwiperData;  

  return (
    <>
      <Swiper
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        className="topProject-swiper" //container
        slidesPerView={1}
        spaceBetween={16}
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 'auto',
            spaceBetween: 8,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {data &&
          Array.isArray(data) &&
          data.length > 0 &&
          data.map((slide, i) => (
            <SwiperSlide key={i} className="topProject-swiper__slide">
              <Image className="topProject-swiper__slide__image" src={slide.src} fill priority sizes='100%' alt={slide.title}></Image>
              <Link href={`/project/${slide.id}`} className="topProject-swiper__slide__bg">
                <span className="linkIcon">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.07324 0H5.07324C5.62552 0 6.07324 0.447715 6.07324 1C6.07324 1.51284 5.6872 1.93551 5.18986 1.99327L5.07324 2H3.07324C2.5604 2 2.13773 2.38604 2.07997 2.88338L2.07324 3V17C2.07324 17.5128 2.45928 17.9355 2.95662 17.9933L3.07324 18H17.0732C17.586 18 18.0087 17.614 18.0665 17.1166L18.0732 17V15C18.0732 14.4477 18.5209 14 19.0732 14C19.586 14 20.0087 14.386 20.0665 14.8834L20.0732 15V17C20.0732 18.5977 18.8243 19.9037 17.2495 19.9949L17.0732 20H3.07324C1.47556 20 0.169581 18.7511 0.0783348 17.1763L0.0732422 17V3C0.0732422 1.40232 1.32216 0.0963391 2.89697 0.00509262L3.07324 0ZM19.0732 0L19.1542 0.00300002L19.2739 0.0202401L19.3853 0.0497382L19.4964 0.0936735L19.5939 0.145995L19.69 0.212786L19.7803 0.292893L19.8769 0.404693L19.9485 0.515938L19.9795 0.576901L20.0133 0.65835L20.0374 0.734007L20.0663 0.881905L20.0732 1V7C20.0732 7.55228 19.6255 8 19.0732 8C18.5209 8 18.0732 7.55228 18.0732 7V3.414L11.7803 9.70711C11.4198 10.0676 10.8526 10.0953 10.4603 9.7903L10.3661 9.70711C10.0057 9.34662 9.97792 8.77939 10.2829 8.3871L10.3661 8.29289L16.6572 2H13.0732C12.5209 2 12.0732 1.55228 12.0732 1C12.0732 0.447715 12.5209 0 13.0732 0H19.0732Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="topProject-swiper__slide__bg__text">
                  <span className="topProject-swiper__slide__bg__text__title">{slide.title}</span>
                  <div className="topProject-swiper__slide__bg__text__area">
                    <span>
                      <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.8462 12.0229L7.07324 16.7959L2.30024 12.0229C1.35625 11.0789 0.713383 9.8762 0.452943 8.56683C0.192493 7.25746 0.326173 5.90026 0.837063 4.66687C1.34796 3.43347 2.21312 2.37927 3.32315 1.63757C4.43318 0.89588 5.73822 0.5 7.07324 0.5C8.40824 0.5 9.71334 0.89588 10.8233 1.63757C11.9333 2.37927 12.7985 3.43347 13.3094 4.66687C13.8203 5.90026 13.954 7.25746 13.6935 8.56683C13.4331 9.8762 12.7902 11.0789 11.8462 12.0229ZM7.07324 8.74994C7.47107 8.74994 7.8526 8.59191 8.13394 8.3106C8.41524 8.0293 8.57324 7.64777 8.57324 7.24994C8.57324 6.85212 8.41524 6.47059 8.13394 6.18928C7.8526 5.90798 7.47107 5.74994 7.07324 5.74994C6.67542 5.74994 6.29389 5.90798 6.01258 6.18928C5.73128 6.47059 5.57324 6.85212 5.57324 7.24994C5.57324 7.64777 5.73128 8.0293 6.01258 8.3106C6.29389 8.59191 6.67542 8.74994 7.07324 8.74994Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <p>{slide.area}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
export default TopProjectsSwiper;
