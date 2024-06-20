'use client';
import React, { useEffect, useRef } from 'react';
import Mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { createGeoJSON } from '@/utils/createGeoJSON';
import { clastersLayer, clastersCountLayer, unclastersLayer } from '@/constants/map';
import './ProjectMapMap.scss';
import useFilterStore from '@/store/filterStore';

if (process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
  Mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
} else {
  console.error('Mapbox access token is not provided or invalid.');
}

interface ProjectMapMapProps {
  data: any;
  isFullScreenMap: boolean;
}

const ProjectMapMap = ({ data, isFullScreenMap }: ProjectMapMapProps) => {
  const mapContainer = useRef(null); // Референс для контейнера мапи
  const map = useRef<Mapboxgl.Map | null>(null); // Референс для об'єкта мапи
  const draw = useRef<MapboxDraw | null>(null); // Референс для об'єкта MapboxDraw
  const { mapCoordinates, mapZoom, reset, setPolygonData } = useFilterStore(); // Отримання координат та масштабу з фільтру

  useEffect(() => {
    // Ініціалізація мапи при першому завантаженні
    if (!map.current) {
      map.current = new Mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/abiespana/cltantp6a00ut01pj4v9h0srk',
        center: mapCoordinates,
        zoom: mapZoom,
        minZoom: 5,
        maxZoom: 18,
      });

      // Ініціалізація Mapbox Draw
      draw.current = new MapboxDraw({
        displayControlsDefault: false, // Не відображати контрол за замовчуванням
        controls: {
          polygon: true, // Додати можливість малювання полігонів
          trash: true, // Додати можливість видалення фігур
        },
      });
      map.current.addControl(draw.current, 'top-left'); // Додавання Mapbox Draw контролу

      map.current.on('load', () => {
        // Додавання джерела даних для проектів
        map.current?.addSource('projects', {
          type: 'geojson',
          data: createGeoJSON(data),
          cluster: true,
          clusterRadius: 80,
        });

        // Додавання шарів для відображення кластерів та окремих точок
        map.current?.addLayer(clastersLayer);
        map.current?.addLayer(clastersCountLayer);
        map.current?.addLayer(unclastersLayer);
      });

      // Відслідковування кліку по маркерам та кластерам
      map.current.on('click', (event: any) => {
        const features = map.current?.queryRenderedFeatures(event.point, {
          layers: ['unclustered-point'],
        });
        if (!features || !features.length) {
          return;
        }
        const feature = features[0];

        if (feature.properties && feature.geometry.type === 'Point') {
          const popup = new Mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates as [number, number])
            .setHTML(
              `
            <a class='link' href="/project/${feature.properties.id}">
              <div class='image'>
                <img src=${
                  feature.properties.photo ? feature.properties.photo : '/icons/icons-villa.png'
                } alt="React Image" />
              </div>
              <div class='info'>
                <span>${feature.properties.name}</span>
                <p>${feature.properties.price} €</p>
              </div>
            </a>`
            )
            .addTo(map.current!);
        }
      });

      map.current.on('click', (event: any) => {
        const features = map.current?.queryRenderedFeatures(event.point, {
          layers: ['clusters'],
        });
        if (!features || !features.length) {
          return;
        }
        const feature = features[0];
        if (!feature) {
          return;
        }
        const clusterId = feature.properties?.cluster_id;
        if (!clusterId) {
          return;
        }
        const source = map.current?.getSource('projects') as Mapboxgl.GeoJSONSource;
        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;
          const coordinates = (feature.geometry as GeoJSON.Point).coordinates;
          map.current?.easeTo({
            center: coordinates as [number, number],
            zoom: zoom + 1,
          });
        });
      });

      // Зміна курсора при наведенні на кластер або маркер
      map.current.on('mouseenter', ['clusters', 'unclustered-point'], () => {
        map.current!.getCanvas().style.cursor = 'pointer';
      });
      map.current.on('mouseleave', ['clusters', 'unclustered-point'], () => {
        map.current!.getCanvas().style.cursor = '';
      });
      // Додавання панелі навігації
      map.current.addControl(new Mapboxgl.NavigationControl(), 'top-right');
      // Взаємодія зі скролом мишки
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
      // Обробка подій створення, оновлення та видалення полігонів
      map.current.on('draw.create', updateArea);
      map.current.on('draw.update', updateArea);
      //при видаленні полігона, видаляємо дані з state
      map.current.on('draw.delete', () => setPolygonData(null));
    }
    //eslint-disable-next-line
  }, [data, mapCoordinates, mapZoom]);

  useEffect(() => {
    // Оновлення розміру мапи при зміні isFullScreenMap
    if (map.current) {
      map.current.resize();
    }
  }, [isFullScreenMap]);

  useEffect(() => {
    // Зміна позиціонування мапи при зміні mapCoordinates
    if (map.current) {
      map.current.flyTo({
        center: mapCoordinates,
        zoom: mapZoom,
      });
    }
    //eslint-disable-next-line
  }, [mapCoordinates, mapZoom]);

  useEffect(() => {
    // Оновлення даних на мапі при зміні data
    if (map.current && data) {
      const source = map.current.getSource('projects') as Mapboxgl.GeoJSONSource;
      if (source) {
        source.setData(createGeoJSON(data));
      }
    }
  }, [data]);
  //функція фільтрації дата на основі координат poligon
  const updateArea = (e: any) => {
    // Отримання координат намальованого полігону
    const data = draw.current?.getAll();
    const features = data?.features;

    if (features && features.length > 0) {
      const geometry = features[0].geometry;

      if (geometry.type === 'Polygon') {
        const coordinates = geometry.coordinates;
        if (coordinates) {
          // Фільтрація даних на основі координат полігону
          setPolygonData(geometry);
        }
      }
    }
  };

  // видалення полігон при очищенні фільтрів
  useEffect(() => {
    if (map.current && draw.current) {
      draw.current.deleteAll();
    }
  }, [reset]);

  return (
    <div
      ref={mapContainer}
      className={`main-map-container ${isFullScreenMap ? 'full-screen' : ''}`}
    ></div>
  );
};

export default ProjectMapMap;
