'use client';

import React, { useEffect, useState } from 'react';
import AreaRecomendationCard from '../../AreaRecomendationCard';
import DragableSlider from '../../DragableSlider';
import './AreaEntertaiment.scss';

type AreaEntertaimentProps = {
  areaName: string;
  data: {
    title: string;
    photo: string;
    modalText: string;
  }[];
};

const AreaEntertaiment = ({ data, areaName }: AreaEntertaimentProps) => {
  const [modalVisible, setVisible] = useState(false);
  const toggleModal = () => setVisible(!modalVisible);

  // disable scroll
  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalVisible]);

  return (
    <div className="area__entertainment">
      <h2 className="section-title">Beaches & clubs</h2>
      <div className="card__wrapper">
        {data.map((item, idx) => (
          <AreaRecomendationCard
            handleClick={toggleModal}
            hoursVisible={false}
            card={item}
            key={idx}
          />
        ))}
      </div>
      <div className="card__slider">
        <DragableSlider
          cardsArray={data.map((item, idx) => (
            <AreaRecomendationCard
              handleClick={toggleModal}
              hoursVisible={false}
              card={item}
              key={idx}
            />
          ))}
        />
      </div>
      <div onClick={toggleModal} className={`card__info--modal ${modalVisible && 'active'}`}>
        <div onClick={e => e.stopPropagation()} className="content">
          <p>Los Boliches Beach</p>
          <br />
          <p>
            Los Boliches Beach is another popular spot in Fuengirola, known for its more relaxed and
            family-friendly atmosphere. This beach offers a softer pace, ideal for families and
            those seeking a quieter day by the sea.The beach features facilities such as childrens
            play areas, showers, and loungers, making it well-suited for a long, leisurely day on
            the sand.Los Boliches Beach also hosts various cultural and sports events throughout the
            year, adding an extra layer of entertainment for {areaName}
          </p>
          <button onClick={toggleModal}>{closeIcon}</button>
        </div>
      </div>
    </div>
  );
};

export default AreaEntertaiment;

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.4987 22.9154C7.58823 22.9154 5.133 22.9154 3.60752 21.3898C2.08203 19.8644 2.08203 17.4091 2.08203 12.4987C2.08203 7.58823 2.08203 5.133 3.60752 3.60752C5.133 2.08203 7.58823 2.08203 12.4987 2.08203C17.4091 2.08203 19.8644 2.08203 21.3898 3.60752C22.9154 5.133 22.9154 7.58823 22.9154 12.4987C22.9154 17.4091 22.9154 19.8644 21.3898 21.3898C19.8644 22.9154 17.4091 22.9154 12.4987 22.9154ZM9.34208 9.3421C9.64718 9.03701 10.1418 9.03701 10.4469 9.3421L12.4987 11.3939L14.5504 9.34213C14.8555 9.03703 15.3502 9.03703 15.6553 9.34213C15.9604 9.64722 15.9604 10.1419 15.6553 10.4469L13.6035 12.4987L15.6553 14.5505C15.9604 14.8555 15.9604 15.3502 15.6553 15.6553C15.3502 15.9604 14.8555 15.9604 14.5504 15.6553L12.4987 13.6036L10.4469 15.6553C10.1419 15.9604 9.6472 15.9604 9.3421 15.6553C9.03701 15.3502 9.03701 14.8556 9.3421 14.5505L11.3938 12.4987L9.34208 10.4469C9.03699 10.1419 9.03699 9.6472 9.34208 9.3421Z"
      fill="#FF5959"
    ></path>
  </svg>
);
