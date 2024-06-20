import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './sliderResponsive.scss';

interface ImageItem {
  title: string;
  image: string;
}

interface SliderProps {
  data: ImageItem[];
  handleModalOpen: () => void;
  width?: number;
  height?: number;
}

const SliderResponsive: React.FC<SliderProps> = ({
  data,
  handleModalOpen,
  width = 1393,
  height = 504,
}) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="project-image-card">
      <Slider {...settings}>
        {data.map((item, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              width: '100%',
              height: height,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: '16px',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', objectFit: 'cover' }}
              // width={width}
              height={height}
              className="image-main"
            />
            <Image
              src="/images/projectCard/marked.png"
              alt="marked"
              width={26}
              height={28}
              className="marked-icon"
            />
            <button className="all-photos" onClick={handleModalOpen}>
              See all photos
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderResponsive;
