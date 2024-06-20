'use client';

import MainMapMap from '@/components/mainPage/MainMap8/MainMapMap/MainMapMap';
import React, { useState } from 'react';
import './AreaMap.scss';

type AreaMapProps = {
  geographicalInfo: string[];
  lng: string;
  lat: string;
};

const AreaMap = ({ geographicalInfo, lat, lng }: AreaMapProps) => {
  const [mapLoad, setLoad] = useState(true);
  return (
    <div className="area__map-block">
      <div className="area__location-info">
        <h2 className="section-title">Location</h2>
        {geographicalInfo.map((p, idx) => (
          <p key={idx} className="loaction-text">
            {p}
          </p>
        ))}
      </div>
      <div className="area__map">
        {mapLoad && (
          <div className="map-loader">
            <div className="loader"></div>
          </div>
        )}
        <MainMapMap
          mapCoordinates={[parseFloat(lng), parseFloat(lat)]}
          mapZoom={11}
          setLoad={setLoad}
        />
      </div>
    </div>
  );
};

export default AreaMap;
