import ResponsiveImage from '@/components/ui/ResponsiveImage';
import React from 'react';
import './AreaAbout.scss';

type AreaAboutProps = {
  areaUrl: string;
  areaName: string;
  aboutLocation: {
    gallery: string[];
    paragraphs: string[];
  };
};

const AreaAbout = ({ aboutLocation, areaName, areaUrl }: AreaAboutProps) => {
  return (
    <div className="area__about">
      <h2 className="title">About {areaUrl}</h2>
      <div className="area__preview">
        {aboutLocation.gallery.map((image, idx) => (
          <ResponsiveImage
            alt={'About' + areaName}
            className="image"
            key={idx}
            width={885}
            height={190}
            src={image}
          />
        ))}
      </div>
      <div className="area__about-text">
        {aboutLocation.paragraphs.map((p, idx) => (
          <p key={idx} className="text">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AreaAbout;
