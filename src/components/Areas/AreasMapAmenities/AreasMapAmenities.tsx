'use client';

import React, { useState } from 'react';
import './areasMapAmenities.scss';
import {
  Airport,
  BeachBars,
  FiveStarHotels,
  Golf,
  Marina,
  PrivateVillas,
  Restaurants,
  ShoppingStores,
} from './amenityIcons.js';
import { MapAmenity } from './mapAmenity';

import { useTranslation } from 'react-i18next';

type Features = {
  [key: string]: {
    amenities: {
      name: string;
      svg: React.ReactNode;
    }[];
    info: string[];
  };
};

interface AreaAmenitiesProps {
  locale: string;
}

const AreasMapAmenities: React.FC<AreaAmenitiesProps> = ({ locale }: any) => {
  const [hoveredArea, setHoveredArea] = useState(null);
  const { t } = useTranslation('area');

  const areaHoverHandler = (area: any) => {
    setHoveredArea(area);
  };

  const amenities: Features = {
    malaga: {
      amenities: [
        {
          name: t('areas.malaga-benefits'),
          svg: <Airport />,
        },
        {
          name: t('areas.malaga-benefits1'),
          svg: <Marina />,
        },
        {
          name: t('areas.malaga-benefits2'),
          svg: <ShoppingStores />,
        },
        {
          name: t('areas.malaga-benefits3'),
          svg: <Restaurants />,
        },
        {
          name: t('areas.malaga-benefits4'),
          svg: <BeachBars />,
        },
        {
          name: t('areas.malaga-benefits5'),
          svg: <FiveStarHotels />,
        },
      ],
      info: ['~ 149,000', '€2,2M', '+1.68%'],
    },
    marbella: {
      amenities: [
        {
          name: t('areas.marbella-benefit'),
          svg: <Airport />,
        },
        {
          name: t('areas.marbella-benefit1'),
          svg: <Marina />,
        },
        {
          name: t('areas.marbella-benefit2'),
          svg: <ShoppingStores />,
        },
        {
          name: t('areas.marbella-benefit3'),
          svg: <Restaurants />,
        },
        {
          name: t('areas.marbella-benefit4'),
          svg: <BeachBars />,
        },
        {
          name: t('areas.marbella-benefit5'),
          svg: <FiveStarHotels />,
        },
      ],
      info: ['~ 149,000', '€2,2M', '+1.68%'],
    },
    benahavis: {
      amenities: [
        {
          name: t('areas.benahavis-benefit'),
          svg: <Airport />,
        },
        {
          name: t('areas.benahavis-benefit1'),
          svg: <ShoppingStores />,
        },
        {
          name: t('areas.benahavis-benefit2'),
          svg: <BeachBars />,
        },
        {
          name: t('areas.benahavis-benefit3'),
          svg: <Golf />,
        },
        {
          name: t('areas.benahavis-benefit4'),
          svg: <PrivateVillas />,
        },
      ],
      info: ['~ 7 900', '€1,4M', '+3.02%'],
    },
    estepona: {
      amenities: [
        {
          name: t('Malaga Airport - 55min'),
          svg: <Airport />,
        },
        {
          name: t('Marina'),
          svg: <Marina />,
        },
        {
          name: t('Shopping Stores'),
          svg: <ShoppingStores />,
        },
        {
          name: t('Restaurants'),
          svg: <Restaurants />,
        },
        {
          name: t('Beach & Bars'),
          svg: <BeachBars />,
        },
      ],
      info: ['~ 67,000', '€795K', '+1.12%'],
    },
    mijas: {
      amenities: [
        {
          name: t('areas.mijas-benefits'),
          svg: <Airport />,
        },
        {
          name: t('areas.mijas-benefits1'),
          svg: <Marina />,
        },
        {
          name: t('areas.mijas-benefits2'),
          svg: <ShoppingStores />,
        },
        {
          name: t('areas.mijas-benefits3'),
          svg: <Restaurants />,
        },
        {
          name: t('areas.mijas-benefits4'),
          svg: <BeachBars />,
        },
      ],
      info: ['~ 80,600', '€650K', '+2.43%'],
    },
    fuengirola: {
      amenities: [
        {
          name: t('areas.fuengirola-benefits'),
          svg: <Airport />,
        },
        {
          name: t('areas.fuengirola-benefits1'),
          svg: <Marina />,
        },
        {
          name: t('areas.fuengirola-benefits2'),
          svg: <ShoppingStores />,
        },
        {
          name: t('areas.fuengirola-benefits3'),
          svg: <Restaurants />,
        },
        {
          name: t('areas.fuengirola-benefits4'),
          svg: <BeachBars />,
        },
      ],
      info: ['~149,000', '€600K', '+1.53%'],
    },
  };
  // const amenities: Features = {
  //   malaga: {
  //     amenities: [
  //       {
  //         name: 'Malaga Airport - 40min',
  //         svg: <Airport />,
  //       },
  //       {
  //         name: 'Marina',
  //         svg: <Marina />,
  //       },
  //       {
  //         name: 'Shopping Stores',
  //         svg: <ShoppingStores />,
  //       },
  //       {
  //         name: 'Restaurants',
  //         svg: <Restaurants />,
  //       },
  //       {
  //         name: 'Beach & Bars',
  //         svg: <BeachBars />,
  //       },
  //       {
  //         name: '5 Star Hotels',
  //         svg: <FiveStarHotels />,
  //       },
  //     ],
  //     info: ['~ 149,000', '€2,2M', '+1.68%'],
  //   },
  //   marbella: {
  //     amenities: [
  //       {
  //         name: 'Malaga Airport - 40min',
  //         svg: <Airport />,
  //       },
  //       {
  //         name: 'Marina',
  //         svg: <Marina />,
  //       },
  //       {
  //         name: 'Shopping Stores',
  //         svg: <ShoppingStores />,
  //       },
  //       {
  //         name: 'Restaurants',
  //         svg: <Restaurants />,
  //       },
  //       {
  //         name: 'Beach & Bars',
  //         svg: <BeachBars />,
  //       },
  //       {
  //         name: '5 Star Hotels',
  //         svg: <FiveStarHotels />,
  //       },
  //     ],
  //     info: ['~ 149,000', '€2,2M', '+1.68%'],
  //   },
  //   benahavis: {
  //     amenities: [
  //       {
  //         name: 'Malaga Airport - 50min',
  //         svg: <Airport />,
  //       },
  //       {
  //         name: 'Shopping Stores',
  //         svg: <ShoppingStores />,
  //       },
  //       {
  //         name: 'Beach & Bars',
  //         svg: <BeachBars />,
  //       },
  //       {
  //         name: 'Golf Courses',
  //         svg: <Golf />,
  //       },
  //       {
  //         name: 'Private Villas',
  //         svg: <PrivateVillas />,
  //       },
  //     ],
  //     info: ['~ 7 900', '€1,4M', '+3.02%'],
  //   },
  //   estepona: {
  //     amenities: [
  //       {
  //         name: 'Malaga Airport - 55min',
  //         svg: <Airport />,
  //       },
  //       {
  //         name: 'Marina',
  //         svg: <Marina />,
  //       },
  //       {
  //         name: 'Shopping Stores',
  //         svg: <ShoppingStores />,
  //       },
  //       {
  //         name: 'Restaurants',
  //         svg: <Restaurants />,
  //       },
  //       {
  //         name: 'Beach & Bars',
  //         svg: <BeachBars />,
  //       },
  //     ],
  //     info: ['~ 67,000', '€795K', '+1.12%'],
  //   },
  //   mijas: {
  //     amenities: [
  //       {
  //         name: 'Malaga Airport - 25min',
  //         svg: <Airport />,
  //       },
  //       {
  //         name: 'Marina',
  //         svg: <Marina />,
  //       },
  //       {
  //         name: 'Shopping Stores',
  //         svg: <ShoppingStores />,
  //       },
  //       {
  //         name: 'Restaurants',
  //         svg: <Restaurants />,
  //       },
  //       {
  //         name: 'Beach & Bars',
  //         svg: <BeachBars />,
  //       },
  //     ],
  //     info: ['~ 80,600', '€650K', '+2.43%'],
  //   },
  //   fuengirola: {
  //     amenities: [
  //       {
  //         name: 'Malaga Airport - 25min',
  //         svg: <Airport />,
  //       },
  //       {
  //         name: 'Marina',
  //         svg: <Marina />,
  //       },
  //       {
  //         name: 'Shopping Stores',
  //         svg: <ShoppingStores />,
  //       },
  //       {
  //         name: 'Restaurants',
  //         svg: <Restaurants />,
  //       },
  //       {
  //         name: 'Beach & Bars',
  //         svg: <BeachBars />,
  //       },
  //     ],
  //     info: ['~149,000', '€600K', '+1.53%'],
  //   },
  // };

  return (
    <div className="map-areas">
      <div className="content">
        <MapAmenity areaHoverHandler={areaHoverHandler} />

        <div className={`info ${hoveredArea !== null && 'active'} `}>
          <div className="info-block">
            <div className="block">
              <div>{t('areas.about-area')}</div>
              <div>
                {t('areas.about-area-1')} <br />
                price
              </div>
              <div>{t('areas.about-area-2')}</div>
            </div>
            <div className="block">
              {amenities[`${hoveredArea}`]?.info.map((amenit, index) => (
                <div key={index}>{amenit}</div>
              ))}
            </div>
          </div>
          <div className="ameneties">
            {amenities[`${hoveredArea}`]?.amenities.map((amenit, index) => (
              <div className="amenit" key={index}>
                <div className="svg">{amenit.svg}</div>
                {amenit.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasMapAmenities;
