import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';
import { Points } from '../../MainInfo/PropertyDetails/propertyPoints';
import PropertyDetails from '../../MainInfo/PropertyDetails/PropertyDetails';
import SocialMedia from './SocialMedia';

import './modal.scss';
import '../../MainInfo/PropertyDetails/propertyDetails.scss';

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

interface ModalProps {
  handleModalClose: () => void;
  selected: Project | null;
}

const Modal: React.FC<ModalProps> = ({ selected, handleModalClose }) => {
  if (!selected) return null;

  return (
    <motion.div
      className="backdrop"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: -10, opacity: 1 }}
      transition={{ duration: 0.2, type: 'keyframes' }}
      exit={{ x: -100, opacity: 0 }}
    >
      <div className="modal">
        <button onClick={handleModalClose} className="close-icon">
          <IoCloseOutline size={24} color="#00000033" />
        </button>
        <div className="main-info">
          <div className="main-info-image">
            <img
              src={selected.image}
              alt={selected.title}
              // width={654}
              // height={410}
              className="image"
            />
          </div>
          <div className="main-info-points">
            <h2 className="section-title">{selected.title}</h2>
            <div className="location">
              <Image src="/images/location.svg" alt="location" width={25} height={25} />
              <h3>{selected.location}</h3>
            </div>
            <ul className="points-list">
              {Points.slice(0, -1).map((item, i) => (
                <PropertyDetails point={item} key={i} />
              ))}
            </ul>
            <h4 className="price-from">
              From <span className="price"> €{selected.price}</span>
            </h4>
            <h4 className="price-per-meter">Price per m² €{selected.pricePerMeter}</h4>
          </div>
        </div>
        <div className="secondary-info">
          <h2 className="section-title">Informaiton about property</h2>
          <ul>
            <li>
              <h4>Name</h4>
              <h3>{selected.id}</h3>
            </li>
            <li>
              <h4>Floors</h4>
              <h3>{selected.floors}</h3>
            </li>
            <li>
              <h4>Bedrooms</h4>
              <h3>{selected.bed}</h3>
            </li>
            <li>
              <h4>Bathrooms</h4>
              <h3>{selected.bathrooms}</h3>
            </li>
            <li>
              <h4>Builded surface</h4>
              <h3>...</h3>
            </li>
            <li>
              <h4>Useful surface</h4>
              <h3>...</h3>
            </li>
            <li>
              <h4>Type</h4>
              <h3>{selected.type}</h3>
            </li>
          </ul>
        </div>

        <SocialMedia />
      </div>
    </motion.div>
  );
};

export default Modal;
