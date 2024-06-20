import React from 'react';
import BreadCrumbsComponent from '../../Breadcrumbs';
import AreaSlider from '../../AreaSlider';
import WeatherBlock from '../../WeatherBlock';
import DistanceBlock from '../../DistanceBlock';
import { DistanceStructureType } from '../../DistanceBlock/DistanceBlock';
import './AreaHead.scss';

type AreaHeadProps = {
  areaUrl: string;
  title: string;
  slideImages: string[];
  lat: string;
  lng: string;
  destination: { plane: DistanceStructureType[]; car: DistanceStructureType[] };
};

const AreaHead = ({ areaUrl, destination, slideImages, title, lat, lng }: AreaHeadProps) => {
  return (
    <div className="area__head">
      <BreadCrumbsComponent currentPage={areaUrl} />
      <h1>{title}</h1>
      <div className="area__hero">
        <AreaSlider area={areaUrl} images={slideImages} />
        <div className="area__indicators">
          <WeatherBlock lat={lat} lng={lng} />
          <DistanceBlock timeFrom={destination} />
        </div>
      </div>
    </div>
  );
};

export default AreaHead;
