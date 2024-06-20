import React from 'react';
import AreaRecomendationCard from '../../AreaRecomendationCard';
import DragableSlider from '../../DragableSlider';
import './AreaRecomendation.scss';

type AreaRecomendationProps = {
  data: {
    title: string;
    subTitle: string;
    photo: string;
  }[];
};

const AreaRecomendation = ({ data }: AreaRecomendationProps) => {
  return (
    <div className="area__recomendation">
      <h2 className="section-title">Our recommendation</h2>
      <div className="card__wrapper">
        {data.map((item, idx) => (
          <AreaRecomendationCard hoursVisible={true} card={item} key={idx} />
        ))}
      </div>
      <div className="card__slider">
        <DragableSlider
          cardsArray={data.map((item, idx) => (
            <AreaRecomendationCard hoursVisible={true} card={item} key={idx} />
          ))}
        />
      </div>
    </div>
  );
};

export default AreaRecomendation;
