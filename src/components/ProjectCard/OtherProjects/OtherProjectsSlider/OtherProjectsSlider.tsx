import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './otherProjectSlider.scss';

interface ImageItem {
  title: string;
  image: string;
}

interface SliderProps {
  data: ImageItem[];
  width?: number;
  height?: number;
}

const OtherProjectsSlider: React.FC<SliderProps> = ({ data, width = 385, height = 284 }) => {
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
          dots: true,
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
    <div className="project-image">
      <Slider {...settings}>
        {data.map((item, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              width: width,
              height: height,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: '16px',
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={width}
              height={height}
              className="image-main"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OtherProjectsSlider;
