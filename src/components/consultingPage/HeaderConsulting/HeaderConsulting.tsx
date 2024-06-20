import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderConsultingProps } from './types';

import { CreateBtns } from '@/constants/consulting';

export const HeaderConsulting: React.FC<HeaderConsultingProps> = ({
  handleBtnClick,
  isActiveItem,
  isTablet,
}) => {
  const btns = CreateBtns();
  const { t } = useTranslation('consulting');

  return (
    <section className="section-consult__header">
      <div className="container section-consult__header-container">
        <div>
          <h2>{t('title-consulting')}</h2>
          <h3>{t('second-title')}</h3>
          <p>{t('description')}</p>
        </div>
        <Image
          src={
            isTablet
              ? '/images/consulting/backgroundTablet.png'
              : '/images/consulting/backgroundConsult.png'
          }
          alt="background image"
          width={750}
          height={220}
          className="section-consult__header-img"
        />
        <ul>
          {btns.map((btn, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleBtnClick(index)}
                className={`${isActiveItem === index && 'active-btn'}`}
              >
                {btn.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
