import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';

import './imagesModal.scss';

interface ImageItem {
  title: string;
  image: string;
}

interface ModalProps {
  data: ImageItem[];
  handleModalClose: () => void;
}

const ImagesModal: React.FC<ModalProps> = ({ data, handleModalClose }) => {
  return (
    <motion.div
      className="img-backdrop"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
    >
      <motion.div className="img-modal">
        <div className="back-icon">
          <IoIosArrowBack size={30} onClick={handleModalClose} />
        </div>
        <ul className="modal-images-list">
          {data.map((item, i) => (
            <li key={i} className="modal-images-item">
              <Image
                src={item.image}
                alt={item.title}
                width={820}
                height={460}
                className="image-card"
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ImagesModal;
