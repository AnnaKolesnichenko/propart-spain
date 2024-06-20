import React from 'react';
import './AreaRecomendationCard.scss';
import ResponsiveImage from '@/components/ui/ResponsiveImage';

interface Card {
  title: string;
  subTitle?: string;
  photo: string;
}
type AreaRecomendationCardProps = {
  card: Card;
  hoursVisible: boolean;
  handleClick?: () => void;
};

const AreaRecomendationCard = ({ card, hoursVisible, handleClick }: AreaRecomendationCardProps) => {
  return hoursVisible ? (
    <RecomendationCard card={card} />
  ) : (
    <EntertaimentCard handleClick={handleClick!} card={card} />
  );
};

const RecomendationCard: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="recomendation__card">
      <div className="card__info">
        <h3 className="title">{card.title}</h3>
        <p className="work-hours">
          {clockImage}
          {card.subTitle}
        </p>
      </div>
      <ResponsiveImage alt={card.title} height={200} width={440} src={card.photo} />
    </div>
  );
};

const EntertaimentCard: React.FC<{ card: Card; handleClick: () => void }> = ({
  card,
  handleClick,
}) => {
  return (
    <div onClick={handleClick} className="recomendation__card hoverable">
      <div className="card__info">
        <h3 className="title">{card.title}</h3>
      </div>
      <ResponsiveImage alt={card.title} height={200} width={440} src={card.photo} />
    </div>
  );
};

export default AreaRecomendationCard;

const clockImage = (
  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_1_221" maskUnits="userSpaceOnUse" x="0" y="0" width="11" height="12">
      <path d="M11 0.5H0V11.5H11V0.5Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1_221)">
      <path
        d="M10.5365 6.00065C10.5365 8.78507 8.27921 11.0423 5.49479 11.0423C2.71036 11.0423 0.453125 8.78507 0.453125 6.00065C0.453125 3.21622 2.71036 0.958984 5.49479 0.958984C8.27921 0.958984 10.5365 3.21622 10.5365 6.00065ZM1.37292 6.00065C1.37292 8.2771 3.21835 10.1225 5.49479 10.1225C7.77124 10.1225 9.61667 8.2771 9.61667 6.00065C9.61667 3.72421 7.77124 1.87878 5.49479 1.87878C3.21835 1.87878 1.37292 3.72421 1.37292 6.00065Z"
        fill="white"
      />
      <path
        d="M5.50521 2.79102C5.25207 2.79102 5.04688 2.99622 5.04688 3.24935V6.21325C5.04688 6.21325 5.04688 6.33274 5.10495 6.42262C5.14381 6.49884 5.2044 6.56507 5.28402 6.61104L7.40142 7.83355C7.62065 7.9601 7.90095 7.88498 8.0275 7.66576C8.15404 7.44654 8.07897 7.16622 7.85976 7.03967L5.96354 5.9449V3.24935C5.96354 2.99622 5.75835 2.79102 5.50521 2.79102Z"
        fill="white"
      />
    </g>
  </svg>
);
