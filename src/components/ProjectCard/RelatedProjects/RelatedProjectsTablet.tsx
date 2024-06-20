'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Modal/Modal';

import { IoIosArrowForward } from 'react-icons/io';

import './relatedProjects.scss';
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

interface RelatedProps {
  handleModalOpen: (id: string) => void;
  handleModalClose: () => void;
  projects: Project[];
}

const RelatedProjectsTablet: React.FC<RelatedProps> = ({ projects }) => {
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
      <p className="projects-title">Property floor plans</p>
      <div className="related-objects-tablet">
        <AnimatePresence>
          {modalOpen && <Modal handleModalClose={handleModalClose} selected={selectedProject} />}
        </AnimatePresence>
        <div className="related-highlight">
          <p>
            <span>3 {t('card.related.bedrooms')}</span> {t('card.related.bedrooms-from')} 725,000 €{' '}
          </p>
          <span>2 {t('card.related.dwellings')}</span>
        </div>

        <div className="projects">
          <ul className="projects-list">
            {projects.map((obj, i) => (
              <li key={i} className="project-item" onClick={() => handleModalOpen(obj.id)}>
                <div className="project-item-displayed">
                  {/* <div className="image-content"> */}{' '}
                  <Image
                    src="/images/projectCard/plan.jpg"
                    alt={obj.type}
                    width={226}
                    height={84}
                    className="image"
                  />
                  {/* </div> */}
                </div>

                <div className="project-item-options">
                  <ul className="options-list">
                    <li>
                      <h3>Property Price</h3>
                      <span>{obj.price}</span>
                    </li>
                    <li>
                      <h3>Total bedrooms</h3>
                      <span>{obj.bed}</span>
                    </li>
                    <li>
                      <h3>Total bathrooms</h3>
                      <span>{obj.bathrooms}</span>
                    </li>
                    <li>
                      <h3>Living space</h3>
                      <span>{obj.size}</span>
                    </li>
                    <li>
                      <h3>Total floors</h3>
                      <span>{obj.projectFloor}</span>
                    </li>
                    <li>
                      <h3>Property type</h3>
                      <span>{obj.type}</span>
                    </li>
                  </ul>

                  <button
                    className="view-info"
                    type="button"
                    onClick={() => handleModalOpen(obj.id)}
                  >
                    View all information
                    <IoIosArrowForward fill="white" size={24} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RelatedProjectsTablet;
