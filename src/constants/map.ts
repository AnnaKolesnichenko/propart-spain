import { AnyLayer } from 'mapbox-gl';

export const clastersLayer: AnyLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'projects',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      'rgba(255,255,255,0.49)',
      100,
      'rgba(255,255,255,0.51)',
      750,
      'rgba(255,255,255,0.24)',
    ],
    'circle-stroke-color': '#191c38',
    'circle-stroke-width': 3,
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
  },
};

export const clastersCountLayer: AnyLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'projects',
  filter: ['has', 'point_count'],
  layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
  }
};

export const unclastersLayer: AnyLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'projects',
  filter: ['!', ['has', 'point_count']],
  paint: {
      'circle-color': '#191c38',
      'circle-radius': 5,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#191c38'
  }
};
