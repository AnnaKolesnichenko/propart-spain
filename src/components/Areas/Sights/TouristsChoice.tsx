import React from 'react';
import './sights.scss';
import { useTranslation } from 'react-i18next';
import initTranslations from '@/app/i18n';

interface AreaHeaderProps {
  locale: string;
}

const TouristsChoice: React.FC<AreaHeaderProps> = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['area']);

  return (
    <div className="choice">
      <span>{t('areas.tourist-choice')}</span>
    </div>
  );
};

export default TouristsChoice;
