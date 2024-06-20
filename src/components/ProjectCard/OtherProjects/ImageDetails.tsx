import Image from 'next/image';
import React from 'react';

import './otherProjects.scss';

interface ImagePops {
  image: string;
  textOne: string;
  textTwo: string | React.ReactNode;
}

const ImageDetails: React.FC<ImagePops> = ({ image, textOne, textTwo }) => {
  return (
    <div className="image-info">
      <Image src={image} alt={textOne} width={18} height={18} />
      <span>{textOne}</span>
      <span>{textTwo}</span>
    </div>
  );
};

export default ImageDetails;
