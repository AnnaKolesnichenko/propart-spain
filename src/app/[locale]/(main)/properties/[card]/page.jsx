'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from 'react-icons/io';
import { projectOne, projectCardItems } from '../../../../../components/ProjectCard/cardDemo';
import MainInfo from '../../../../../components/ProjectCard/MainInfo/MainInfo/MainInfo';
import AboutProject from '../../../../../components/ProjectCard/MainInfo/AboutProject/AboutProject';
import RelatedProjects from '../../../../../components/ProjectCard/RelatedProjects/RelatedProjects';
import LegalServices from '../../../../../components/ProjectCard/LegalServices/LegalServices';
import OtherProjects from '../../../../../components/ProjectCard/OtherProjects/OtherProjects';
import PropertyMap from '@/components/ProjectCard/PropertyMap/PropertyMap';

import '../../../../../styles/global.scss';
import '../../../../../components/ProjectCard/MainInfo/MainInfo/mainInfo.scss';

// export interface Project {
//   id: string;
//   image: string;
//   title: string;
//   price: string;
//   pricePerMeter: string;
//   location: string;
//   floors: string;
//   bed: string;
//   bathrooms: string;
//   projectFloor: string;
//   rooms: string;
//   type: string;
//   size: string;
//   description: string[];
//   amenities: string[];
//   images: {
//     title: string,
//     image: string,
//   }[];
// }

// interface CardProps {
//   projects: Project[];
//   handleModalClose: () => void;
//   handleModalOpen: (id: string) => void;
//   id: string;
// }

const Card = ({ params }) => {
  const { t } = useTranslation('project-card');
  const { card } = params;
  console.log(card);

  const property = projectOne.find(item => item.id === 'a1');
  console.log(property);

  if (!property) return null;

  return (
    <div className="container" style={{ paddingTop: '22px' }}>
      <div className="breadcrumbs">
        <Link href="/">{t('card.link-home')}</Link>
        <IoIosArrowForward
          width="6px"
          height="10px"
          color="#676767"
          style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}
        />
        <Link href="/properties">{t('card.link-properties')}</Link>
        <IoIosArrowForward
          width="6px"
          height="10px"
          color="#676767"
          style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}
        />
        <span>Oasis</span>
      </div>
      <MainInfo item={property} />
      <AboutProject item={property} />
      <PropertyMap lat="36.48031586531857" lng="-7.077593219466166" />
      <RelatedProjects projects={projectOne} />
      <LegalServices />
      <OtherProjects projects={projectCardItems} />
    </div>
  );
};

export default Card;
