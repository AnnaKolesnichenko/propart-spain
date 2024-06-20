import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { CreateListPartners } from '@/constants/consulting';

import './ListPartners.scss';

export const ListPartners = () => {
  const { t } = useTranslation('consulting');
  const listPartners = CreateListPartners();

  return (
    <section className="section-consult__partners">
      <div className="container">
        <h3 className="section-consult__partners-title">{t('list-partners-title')}</h3>
        <ul className="section-consult__partners-list">
          {listPartners.map((item, index) => (
            <li key={index}>
              <Image src={item.svg} alt="icon partner" width={19} height={19} />
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
