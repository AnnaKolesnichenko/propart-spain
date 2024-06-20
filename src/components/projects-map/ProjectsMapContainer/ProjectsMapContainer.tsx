'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import FilterBlockMap from '@/components/projects-map/FilterBlockMap/FilterBlockMap';
import ProjectMapMap from '../ProjectsMapMap/ProjectMapMap';
import MapButtons from '../MapButtons/MapButtons';
import useBodyScrollLock from '@/utils/useBodyScrollLock';
import jsonData from '@/constants/allAreas.json';
import useFilterStore from '@/store/filterStore';
import { filterMapData } from '@/utils/filterMapData';
import { useTranslation } from 'react-i18next';
import '../../../app/[locale]/(main)/projects-map/projects-map.scss';

const ProjectsMapContainer = () => {
  const { t } = useTranslation('projects-map');
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isFullScreenMap, setIsFullScreenMap] = useState(false);
  useBodyScrollLock(isFullScreenMap);
  useBodyScrollLock(isMobile);
  const handleFoolScreenMap = () => {
    setIsFullScreenMap(!isFullScreenMap);
  };

  const {
    selectedType,
    selectedBeds,
    selectedPrice,
    selectedSize,
    selectedArea,
    toggleReset,
    clearFilters,
  } = useFilterStore();

  // Данні для карти
  const [mapData, setMapData] = useState<any>(jsonData);
  useEffect(() => {
    const filteredData = filterMapData(jsonData, {
      selectedType,
      selectedBeds,
      selectedPrice,
      selectedSize,
      selectedArea,
    });
    setMapData(filteredData);
  }, [selectedType, selectedBeds, selectedPrice, selectedSize, selectedArea]);
  const handleClearFilter = () => {
    clearFilters();
    toggleReset();
  };
  return (
    <section
      className={`map-fool-screen-container ${isFullScreenMap ? 'full-screen' : ''} ${
        isClient && isMobile ? 'full-screen-mobile' : ''
      }`}
    >
      {isClient && !isMobile && (
        <div className='filter-block-map-container'>
          <FilterBlockMap />
        </div>
      )}
      <div className="map-container">
        <ProjectMapMap data={mapData} isFullScreenMap={isFullScreenMap || isMobile} />
        {isClient && !isMobile && <MapButtons action={handleFoolScreenMap} />}
        {mapData && mapData.length === 0 && (
          <button className="map-container-not-found-message" onClick={handleClearFilter}>
            {t('not-found-message')}
            <Image src="/assets/icons/clear.svg" width={16} height={16} alt="close image" />
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsMapContainer;
