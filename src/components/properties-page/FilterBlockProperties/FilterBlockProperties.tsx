'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroFilterRadioButtons from '@/components/mainPage/Hero/HeroFilterRadiButtons/HeroFilterRadioButtons';
import { DropDawnCheckbox } from '@/components/ui/MapDropdownCheckbox/DropDawnCheckbox';
import DropDawnCombine from '@/components/ui/MapDropDownCombine/DropDawnCombine';
import MapSearch from '@/components/ui/MapSearch/MapSearch';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import useFilterStore from '@/store/filterStore';
import { FilterState } from '@/store/filterStore';
import './FilterBlockProperties.scss';

import {
  getTypeOptions,
  getBedroomOptions,
  priceOptions,
  sizeOptions,
  areasOptions,
  projectsNameOptions,
} from '@/constants/filters';

const FilterBlockProperties = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { t } = useTranslation('map-filters');
  const typeOptions = getTypeOptions(t);
  const bedroomOptions = getBedroomOptions(t);

  const {
    searchParams,
    selectedRadio,
    selectedName,
    selectedType,
    selectedBeds,
    selectedPrice,
    selectedSize,
    selectedArea,
    reset,
    setMapObject,
    setFilter,
    toggleReset,
    clearFilters,
  } = useFilterStore();

  const handleFilterChange = (field: keyof FilterState, value: any) => {
    setFilter(field, value);
  };
  const handleClearFilter = () => {
    clearFilters();
    toggleReset();
  };

  console.log(
    selectedRadio,
    selectedName,
    selectedType,
    selectedBeds,
    selectedPrice,
    selectedSize,
    selectedArea
  );

  return (
    isClient &&
    (isMobile ? (
      <div className="filter-block-properties-mob-search container">
        <MapSearch
          handleSearch={value => handleFilterChange('searchParams', value)}
          handleNameChange={setMapObject}
          projectsNameData={projectsNameOptions}
          reset={reset}
        />
      </div>
    ) : (
      <div className="filter-block-properties">
        <div className="filter-block-properties-filters container">
          <div className="row1">
            <div className="radio">
              <HeroFilterRadioButtons
                radio1={t('hero.filter-radio1')}
                radio2={t('hero.filter-radio2')}
                selectedType={selectedRadio}
                action={(value: string) => handleFilterChange('selectedRadio', value)}
              />
            </div>
            <div className="search">
              <MapSearch
                handleSearch={value => handleFilterChange('searchParams', value)}
                handleNameChange={setMapObject}
                projectsNameData={projectsNameOptions}
                reset={reset}
              />
            </div>
            <button onClick={handleClearFilter} className="clear">
              <Image src="/assets/icons/clear.svg" alt="Clear Icon" width={20} height={20} />
              {t('clean')}
            </button>
          </div>

          <div className="row2">
            <div className="dropdown">
              <DropDawnCheckbox
                data={typeOptions}
                title={t('type_title')}
                value={selectedType}
                onChange={(values: string[]) => handleFilterChange('selectedType', values)}
              />
            </div>

            <div className="dropdown">
              <DropDawnCheckbox
                data={bedroomOptions}
                title={t('beds_title')}
                value={selectedBeds}
                onChange={(values: string[]) => handleFilterChange('selectedBeds', values)}
              />
            </div>

            <div className="dropdown combine">
              <DropDawnCombine
                data={priceOptions}
                title={t('price_title')}
                type="Price"
                valueNum={selectedPrice}
                onChange={(values: number[]) => handleFilterChange('selectedPrice', values)}
                reset={reset}
              />
            </div>

            <div className="dropdown combine">
              <DropDawnCombine
                data={sizeOptions}
                title={t('size_title')}
                type="Size"
                valueNum={selectedSize}
                onChange={(values: number[]) => handleFilterChange('selectedSize', values)}
                reset={reset}
              />
            </div>

            <div className="dropdown">
              <DropDawnCheckbox
                data={areasOptions}
                title={t('area_title')}
                value={selectedArea}
                onChange={(values: string[]) => handleFilterChange('selectedArea', values)}
              />
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export default FilterBlockProperties;
