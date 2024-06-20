'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './propertyMap.scss';

// get a hold of a token
if (process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
} else {
  console.error('Mapbox access token is not provided or invalid.');
}

const PropertyMap = ({ lat, lng }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('wheel', event => {
        if (
          event.originalEvent.ctrlKey ||
          event.originalEvent.metaKey ||
          event.originalEvent.altKey
        ) {
          return;
        }
        event.preventDefault();
      });

      map.current.on('load', () => {
        new mapboxgl.Marker({ color: '#DBA77B' })
          .setLngLat([lng, lat])
          .addTo(map.current)
          .getElement()
          .classList.add('custom-marker');
      });
    }
  }, [lng, lat, zoom]);

  return (
    <div className="area__map-block">
      <div ref={mapContainer} className="area__map"></div>
    </div>
  );
};

export default PropertyMap;
