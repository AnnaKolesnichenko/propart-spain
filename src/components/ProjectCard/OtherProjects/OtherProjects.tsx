import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './otherProjects.scss';
import ImageDetails from './ImageDetails';
import SliderResponsive from '../MainInfo/Slider/SliderResponsive';
import OtherProjectsSlider from './OtherProjectsSlider/OtherProjectsSlider';
import { useTranslation } from 'react-i18next';

interface Project {
  id: string;
  image: string;
  title: string;
  price: string;
  pricePerMeter: string;
  location: string;
  floors: string;
  bed: string;
  bathrooms: string;
  projectFloor: string;
  rooms: string;
  type: string;
  size: string;
  description: string[];
  amenities: string[];
  images: {
    title: string;
    image: string;
  }[];
}

interface OtherProjectsProps {
  projects: Project[];
}

const OtherProjects: React.FC<OtherProjectsProps> = ({ projects }) => {
  const { t } = useTranslation('project-card');

  return (
    <div className="offers">
      <h2>{t('card.other.other-projects')}</h2>
      <ul className="offer-projects">
        {projects.map(item => (
          <li key={item.id} className="offer-projects-item">
            <Link href="/">
              <div className="offer-image">
                <Image
                  src="/images/projectCard/marked.png"
                  alt="like"
                  width={24}
                  height={25}
                  className="marked"
                />
                <OtherProjectsSlider data={item.images} height={285} width={345} />
                {/* <Image src={item.image} alt={item.title} className="image" fill /> */}
                <div className="offer-image-info">
                  <ImageDetails
                    image="/images/bed_svg.svg"
                    textOne={item.bed}
                    textTwo={t('card.related.bed')}
                  />
                  <ImageDetails
                    image="/images/square_meter.svg"
                    textOne={item.pricePerMeter}
                    textTwo=" m²"
                  />
                  <ImageDetails
                    image="/images/multistoried.svg"
                    textOne={item.floors}
                    textTwo={t('card.related.floors')}
                  />
                </div>
              </div>
              <div className="offer-projects-details">
                <h3>{item.title}</h3>
                <div className="details-price">
                  <p>{item.location}</p>
                  <span>EUR {item.price}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="btn">
        <Link href="/projects-map">
          {' '}
          <motion.button
            className="map-btn"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          >
            {' '}
            <Image src="/images/globe.svg" alt="globe" width={24} height={24} />
            {t('card.other.map')}
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default OtherProjects;
