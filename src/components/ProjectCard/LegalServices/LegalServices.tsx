import React from 'react';
import LegalServiceItem from './LegalServiceItem';

import './legalServices.scss';
import { useTranslation } from 'react-i18next';

const LegalServices = () => {
  const { t } = useTranslation('project-card');

  const legal = [
    {
      id: 'l1',
      title: t('card.legal.golden-visa'),
      image: '/images/golden.svg',
      link: '/visa',
    },
    {
      id: 'l2',
      title: t('card.legal.legal-services'),
      image: '/images/suitcase.svg',
      link: '/services',
    },
    {
      id: 'l3',
      title: t('card.legal.insurance'),
      image: '/images/support.svg',
      link: '/insurance',
    },
    {
      id: 'l4',
      title: t('card.legal.repairs-and-furnish'),
      image: '/images/floors.svg',
      link: '/repairs-and-furnishings',
    },
    {
      id: 'l5',
      title: t('card.legal.nota-simple'),
      image: '/images/law-weighs.svg',
      link: '/nota-simple',
    },
    {
      id: 'l6',
      title: t('card.legal.tourist-license'),
      image: '/images/graphics.svg',
      link: '/tourist-license',
    },
    {
      id: 'l7',
      title: t('card.legal.concierge-service'),
      image: '/images/message.svg',
      link: '/consierge-services',
    },
    {
      id: 'l8',
      title: t('card.legal.mortgage'),
      image: '/images/message.svg',
      link: '/mortgage',
    },
    {
      id: 'l9',
      title: t('card.legal.student-visa'),
      image: '/images/house.svg',
      link: '/student-visa',
    },
    {
      id: 'l10',
      title: t('card.legal.digital-nomand'),
      image: '/images/suitcase.svg',
      link: '/digital-nomand',
    },
  ];

  return (
    <div className="legal">
      <ul className="legal-services">
        {legal.map(item => (
          <LegalServiceItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default LegalServices;
