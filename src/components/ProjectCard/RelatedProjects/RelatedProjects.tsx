'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Modal/Modal';

import { IoIosArrowForward } from 'react-icons/io';

import './relatedProjects.scss';
import { useTranslation } from 'react-i18next';
import RelatedProjectsTablet from './RelatedProjectsTablet';

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

interface RelatedProps {
  handleModalOpen: (id: string) => void;
  handleModalClose: () => void;
  projects: Project[];
}

const RelatedProjects: React.FC<RelatedProps> = ({ projects }) => {
  const { t } = useTranslation('project-card');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleModalOpen = (id: string) => {
    const item = projects.find(item => item.id === id);
    if (item) {
      setSelectedProject(item);
      setModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const params = [
    t('card.related.photo'),
    t('card.related.euro'),
    t('card.related.bed'),
    t('card.related.bathrooms'),
    t('card.related.size'),
    t('card.related.floors'),
    t('card.related.type-floors'),
  ];

  return (
    <>
      <div className="related">
        <AnimatePresence>
          {modalOpen && <Modal handleModalClose={handleModalClose} selected={selectedProject} />}
        </AnimatePresence>
        <div className="related-objects">
          <p>
            <span>3 {t('card.related.bedrooms')}</span> {t('card.related.bedrooms-from')} 725,000 €{' '}
          </p>
          <span>2 {t('card.related.dwellings')}</span>
        </div>
        <div className="features">
          <ul className="related-features">
            {params.map((item, i) => (
              <li key={i}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="projects">
          <ul className="projects-list">
            {projects.map((obj, i) => (
              <li key={i} className="project-item" onClick={() => handleModalOpen(obj.id)}>
                <ul className="projects-list-item">
                  <li>
                    {' '}
                    <Image
                      src={obj.image}
                      alt={obj.type}
                      width={226}
                      height={84}
                      className="image"
                    />
                  </li>
                  <li>
                    <span>{obj.price}</span>
                  </li>
                  <li>
                    {' '}
                    <span>{obj.bed}</span>
                  </li>
                  <li>
                    {' '}
                    <span>{obj.bathrooms}</span>
                  </li>
                  <li>
                    {' '}
                    <span>{obj.size}</span>
                  </li>
                  <li>
                    {' '}
                    <span>{obj.projectFloor}</span>
                  </li>
                  <li className="arrow-flex-item">
                    {' '}
                    <span>{obj.type}</span>
                    <div>
                      <div
                        style={{
                          backgroundColor: 'black',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '34px',
                          height: '34px',
                          borderRadius: '100px',
                        }}
                      >
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{
                            x: 5,
                            transition: {
                              duration: 0.5,
                              type: 'spring',
                              stiffness: 300,
                              bounce: 0.7,
                            },
                          }}
                          exit={{ x: 0 }}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <IoIosArrowForward fill="white" size={24} />
                        </motion.div>

                        {/* <Image src="/images/round_arrow.svg" alt="arrow" width={30} height={34} /> */}
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <RelatedProjectsTablet
        projects={projects}
        handleModalClose={handleModalClose}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
};

export default RelatedProjects;
