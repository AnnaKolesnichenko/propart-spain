'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DropDawnCheckbox } from '@/components/ui/MapDropdownCheckbox/DropDawnCheckbox';
import DropDawnCombine from '@/components/ui/MapDropDownCombine/DropDawnCombine';
import MapSearch from '@/components/ui/MapSearch/MapSearch';
import { useTranslation } from 'react-i18next';
import useFilterStore from '@/store/filterStore';
import { FilterState } from '@/store/filterStore';
import './FilterBlockMap.scss';

import {
  getTypeOptions,
  getBedroomOptions,
  priceOptions,
  sizeOptions,
  areasOptions,
  projectsNameOptions,
} from '@/constants/filters';

const FilterBlockMap = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { t } = useTranslation('map-filters');
  const typeOptions = getTypeOptions(t);
  const bedroomOptions = getBedroomOptions(t);

  const {
    polygonData,
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
    polygonData,
    searchParams,
    selectedRadio,
    selectedName,
    selectedType,
    selectedBeds,
    selectedPrice,
    selectedSize,
    selectedArea
  );
  return (
    isClient && (
      <div className="filter-block-map container">
        <div className="search">
          <MapSearch
            handleSearch={value => handleFilterChange('searchParams', value)}
            handleNameChange={setMapObject}
            projectsNameData={projectsNameOptions}
            reset={reset}
          />
        </div>

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

        <div className="dropdown">
          <DropDawnCombine
            data={priceOptions}
            title={t('price_title')}
            type="Price"
            valueNum={selectedPrice}
            onChange={(values: number[]) => handleFilterChange('selectedPrice', values)}
            reset={reset}
          />
        </div>

        <div className="dropdown">
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

        <button onClick={handleClearFilter} className="clear">
          <Image src="/assets/icons/clear.svg" alt="Clear Icon" width={20} height={20} />
          {t('clean')}
        </button>
      </div>
    )
  );
};

export default FilterBlockMap;


/*
'use client'
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname,  useSearchParams } from 'next/navigation';

const FilterBlockMap = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPathname = usePathname();

  const [searchParamsState, setSearchParamsState] = useState(searchParams.get('searchParams') || '');
  const [selectedRadio, setSelectedRadio] = useState(searchParams.get('selectedRadio') || '');
  const [selectedType, setSelectedType] = useState(searchParams.get('selectedType') || '');
  const [selectedBeds, setSelectedBeds] = useState(searchParams.get('selectedBeds') || '');
  const [selectedPrice, setSelectedPrice] = useState(searchParams.get('selectedPrice') || '');
  const [selectedSize, setSelectedSize] = useState(searchParams.get('selectedSize') || '');
  const [selectedArea, setSelectedArea] = useState(searchParams.get('selectedArea') || '');

  const updateFilters = () => {
    const newSearchParams = new URLSearchParams({
      searchParams: searchParamsState,
      selectedRadio,
      selectedType,
      selectedBeds,
      selectedPrice,
      selectedSize,
      selectedArea,
    });

    router.push(`${currentPathname}?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    updateFilters();
    //eslint-disable-next-line
  }, [searchParamsState, selectedRadio, selectedType, selectedBeds, selectedPrice, selectedSize, selectedArea]);

  return (
    <div>
      <input type="text" value={searchParamsState} onChange={(e) => setSearchParamsState(e.target.value)} placeholder="Search Params" />
      <input type="text" value={selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)} placeholder="Selected Radio" />
      <input type="text" value={selectedType} onChange={(e) => setSelectedType(e.target.value)} placeholder="Selected Type" />
      <input type="text" value={selectedBeds} onChange={(e) => setSelectedBeds(e.target.value)} placeholder="Selected Beds" />
      <input type="text" value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} placeholder="Selected Price" />
      <input type="text" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} placeholder="Selected Size" />
      <input type="text" value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} placeholder="Selected Area" />
    </div>
  );
};

export default FilterBlockMap;

*/
