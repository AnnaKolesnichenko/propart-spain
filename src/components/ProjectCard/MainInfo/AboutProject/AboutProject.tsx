'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import ShowArrows from './ShowArrows';
import about from '../../../../locales/en/project-card.json';

import './aboutProject.scss';

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

interface AboutProjectProps {
  item: Project;
}

const AboutProject: React.FC<AboutProjectProps> = ({ item }) => {
  const [fullText, setFullText] = useState(false);
  const { t } = useTranslation('project-card');

  console.log(about.card.description.description);

  const showFullText = () => {
    setFullText(prevState => !prevState);
  };

  return (
    <div className="about">
      <div className="about-descr">
        <h2 className="about-title">{t('card.description.about-title')}</h2>
        <AnimatePresence>
          {!fullText && (
            <div>
              <div className="sliced-text">
                <p>{t('card.description.description.0')}</p>
                <p>{t('card.description.description.1').slice(0, 303) + '...'}</p>
              </div>{' '}
              <ShowArrows fullText={false} showFullText={showFullText} />
            </div>
          )}

          {fullText && (
            <>
              {' '}
              <motion.ul
                className="about-list"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ y: -50 }}
              >
                {/* {about.card.description.description.map((descr, i) => {
                  return (
                    <li key={i} className="about-list-item">
                      <p>{t(`${descr}`)}</p>
                    </li>
                  );
                })} */}
                <li className="about-list-item">
                  <p>{t(`card.description.description.0`)}</p>
                </li>
                <li className="about-list-item">
                  <p>{t(`card.description.description.1`)}</p>
                </li>
                <li className="about-list-item">
                  <p>{t(`card.description.description.2`)}</p>
                </li>
                <li className="about-list-item">
                  <p>{t(`card.description.description.3`)}</p>
                </li>
              </motion.ul>{' '}
              <ShowArrows fullText={true} showFullText={showFullText} />
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="amenities">
        <h2 className="amenities-title">{t('card.description.amenities')}</h2>
        <ul className="amenities-list">
          {item.amenities.map((amen, i) => (
            <li key={i} className="amenities-list-item">
              <span>{amen}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutProject;
