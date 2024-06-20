import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import './legalServices.scss';
import { useTranslation } from 'react-i18next';

interface Legal {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface LegalProps {
  item: Legal;
}

const LegalServiceItem: React.FC<LegalProps> = ({ item }) => {
  const { t } = useTranslation('project-card');
  return (
    <li className="legal-services-item">
      <Link href={item.link} className="link-item">
        <Image src={item.image} alt={item.title} width={48} height={48} className="image" />
        <div className="service-about">
          <h3>{item.title}</h3>
          <div className="link">
            <span className="learn-more">{t('card.legal.learn-more')}</span>

            <motion.div initial={{ x: -5 }} whileHover={{ x: 10 }} exit={{ x: 0 }}>
              <Image
                src="/images/arrow-right.svg"
                alt="arrow"
                width={24}
                height={24}
                className="arrow-right"
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default LegalServiceItem;
