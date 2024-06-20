// 'use client';

// import Link from 'next/link';
// import React, { useState } from 'react';
// import { IoIosArrowForward } from 'react-icons/io';
// import { projectOne } from './cardDemo';
// import MainInfo from './MainInfo/MainInfo/MainInfo';
// import AboutProject from './MainInfo/AboutProject/AboutProject';
// import RelatedProjects from './RelatedProjects/RelatedProjects';

// import '../../styles/global.scss';
// import '../../components/ProjectCard/MainInfo/MainInfo/mainInfo.scss';
// import LegalServices from './LegalServices/LegalServices';

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
//   floor: string;
//   projectFloor: string;
//   rooms: string;
//   type: string;
//   size: string;
//   description: string[];
//   amenities: string[];
//   images: {
//     title: string;
//     image: string;
//   }[];
// }

// interface CardProps {
//   project: Project;
//   handleModalClose: () => void;
//   handleModalOpen: (id: string) => void;
//   id: string;
// }

// const Card: React.FC<CardProps> = () => {
//   return (
//     <div className="container" style={{ paddingTop: '40px' }}>
//       <div className="breadcrumbs">
//         <Link href="/">Home</Link>
//         <IoIosArrowForward
//           width="6px"
//           height="10px"
//           color="#676767"
//           style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}
//         />
//         <Link href="/properties">Properties</Link>
//         <IoIosArrowForward
//           width="6px"
//           height="10px"
//           color="#676767"
//           style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}
//         />
//         <span>Oasis</span>
//       </div>
//       <MainInfo projects={projectOne} />
//       <AboutProject projects={projectOne} />
//       <RelatedProjects projects={projectOne} />
//       <LegalServices />
//     </div>
//   );
// };

// export default Card;
