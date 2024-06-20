import initTranslations from '@/app/i18n';

import {
  CreateConstructionFirstTextBlosk,
  CreateConstructionSecondTextBlosk,
} from '@/constants/construction';
import { Key } from 'react';

import './ConstructionContent.scss';

export const ConstructionContent = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['consulting-construction']);
  const firstTextBlock = CreateConstructionFirstTextBlosk({ locale });
  const secondTextBlock = CreateConstructionSecondTextBlosk({ locale });

  return (
    <div className="text-content">
      <ul className="list-construction__first">
        {(await firstTextBlock).map((item: any, index: Key | null | undefined) => (
          <li key={index}>
            <h4>{item.title1}</h4>
            <span>{item.title2}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <h3 className="construction-title">{t('textBlock2.title')}</h3>
      <p className="construction-description">{t('textBlock2.description')}</p>
      <ul className="list-construction__second">
        {(await secondTextBlock).map((item: any, index: Key | null | undefined) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <ul>
              {item.list.map((item: any, index: Key | null | undefined) => (
                <li key={index}>{item.item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
