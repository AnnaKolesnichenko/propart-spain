import React from 'react';
import Image from 'next/image';
import TouristsChoice from './TouristsChoice';
import './sights.scss';
import initTranslations from '@/app/i18n';

type Sight = {
  title: string;
  description: string;
  image: string;
  choice: boolean;
};

interface AreaHeaderProps {
  locale: string;
}

const Sights: React.FC<AreaHeaderProps> = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['area']);

  const sights: Sight[] = [
    {
      title: t('areas.fuengirola-area'),
      description: t('areas.fuengirola'),
      image: '/images/areas/fuengirola.jpg',
      choice: true,
    },
    {
      title: t('areas.estepona-area'),
      description: t('areas.estepona'),
      image: '/images/areas/estepona.jpg',
      choice: false,
    },
    {
      title: t('areas.benahavis-area'),
      description: t('areas.benahavis'),
      image: '/images/areas/benahvis.jpg',
      choice: false,
    },
    {
      title: t('areas.mijas-area'),
      description: t('areas.mijas'),
      image: '/images/areas/mijas.jpg',
      choice: false,
    },
    {
      title: t('areas.marbella-area'),
      description: t('areas.marbella'),
      image: '/images/areas/marbella.jpg',
      choice: true,
    },
    {
      title: t('areas.new-golden-mile-area'),
      description: t('areas.new-golden-mile'),
      image: '/images/areas/new-golden-mile.jpg',
      choice: false,
    },
    {
      title: t('areas.costa-del-sol-area'),
      description: t('areas.costa-del-sol'),
      image: '/images/areas/costa-del-sol.jpg',
      choice: false,
    },
    {
      title: t('areas.nueva-andalucia-area'),
      description: t('areas.nueva-andalucia'),
      image: '/images/areas/nueva-andalucia.jpg',
      choice: false,
    },
    {
      title: t('areas.ocean-view-area'),
      description: t('areas.ocean-view'),
      image: '/images/areas/ocean-bay.jpg',
      choice: false,
    },
  ];

  return (
    <ul className="sights">
      {sights.map((sight, i) => (
        <li key={i} className="sight">
          {sight.choice && <TouristsChoice locale={locale} />}

          <Image src={sight.image} alt={sight.title} fill className="image" />
          <h2 className="sight_name">{sight.title}</h2>
          <p className="sight_descr">{sight.description}</p>
          <div className="gradient"></div>
        </li>
      ))}
    </ul>
  );
};

export default Sights;
