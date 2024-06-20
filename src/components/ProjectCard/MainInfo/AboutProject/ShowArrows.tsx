import React from 'react';

import { TiArrowSortedDown } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti';

import './aboutProject.scss';
import { useTranslation } from 'react-i18next';

interface Arrows {
  showFullText: () => void;
  fullText: boolean;
}

const ShowArrows: React.FC<Arrows> = ({ showFullText, fullText }) => {
  const { t } = useTranslation('project-card');
  return (
    <div className="arrows" onClick={showFullText}>
      <span className="text-span">
        {fullText ? t('card.description.show') : t('card.description.hide')}
      </span>
      {!fullText ? (
        <TiArrowSortedDown className="arrow-icon" />
      ) : (
        <TiArrowSortedUp className="arrow-icon" />
      )}
    </div>
  );
};

export default ShowArrows;
