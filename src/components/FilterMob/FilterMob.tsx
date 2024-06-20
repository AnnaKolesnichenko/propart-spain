'use client';
import { useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { DropDawnCheckboxMob } from '@/components/ui/MapDropdownCheckboxMob/DropDawnCheckboxMob';
import DropDawnCombineMob from '@/components/ui/MapDropDownCombineMob/DropDawnCombineMob';
import MapSearch from '@/components/ui/MapSearch/MapSearch';
import HeroFilterRadioButtons from '../mainPage/Hero/HeroFilterRadiButtons/HeroFilterRadioButtons';
import { useTranslation } from 'react-i18next';
import useFilterStore from '@/store/filterStore';
import { FilterState } from '@/store/filterStore';
import './FilterMob.scss';

import {
  getTypeOptions,
  getBedroomOptions,
  priceOptions,
  sizeOptions,
  areasOptions,
  projectsNameOptions,
} from '@/constants/filters';

interface FilterMobProps {
  onClose: () => void;
}

const FilterMob = ({ onClose }: FilterMobProps) => {
  const dropdownTypeRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('map-filters');
  const currentPathname = usePathname();
  const router = useRouter();
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
    setFilter,
    toggleReset,
    clearFilters,
  } = useFilterStore();

  console.log(
    selectedRadio,
    selectedName,
    selectedType,
    selectedBeds,
    selectedPrice,
    selectedSize,
    selectedArea
  );

  const handleFilterChange = (field: keyof FilterState, value: any) => {
    setFilter(field, value);
  };
  const handleClearFilter = () => {
    clearFilters();
    toggleReset();
  };

  const handleSubmitFilter = () => {
    // Перевірка URL і відповідно до цього перенаправлення на різні сторінки
    const propertiesRegex = /\/properties/;
    const projectsMapRegex = /\/projects-map/;
    if (!propertiesRegex.test(currentPathname) && !projectsMapRegex.test(currentPathname)) {
      router.push('/properties');
    }
    onClose();
  };

  return (
    <div className="filter-mob">
      <div className="modal-content__filter">
        <div className="filters-block-mob-header">
          <button onClick={onClose} className="filters-block-mob-header-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.828 11.0007H20V13.0007L7.828 13.0007L13.192 18.3647L11.778 19.7787L4 12.0007L11.778 4.22266L13.192 5.63666L7.828 11.0007Z"
                fill="#09121F"
              ></path>
            </svg>
          </button>
          <button onClick={handleClearFilter} className="filters-block-mob-clear-filter">
            {t('mob_clear')}
            <Image src="/assets/icons/clear.svg" alt="Clear Icon" width={20} height={20} />
          </button>
        </div>

        <h3 className="filters-block-mob-title">{t('mob_title')}</h3>

        <div className="filter-block-mob-form">
          <div className="filter-block-mob-form-radio">
            <HeroFilterRadioButtons
              radio1={t('hero.filter-radio1')}
              radio2={t('hero.filter-radio2')}
              selectedType={selectedRadio}
              action={(value: string) => handleFilterChange('selectedRadio', value)}
            />
          </div>
          <div className="search-mob">
            <MapSearch
              handleSearch={value => handleFilterChange('searchParams', value)}
              handleNameChange={(name: string, coordinates: [number, number]) =>
                handleFilterChange('selectedName', name)
              }
              projectsNameData={projectsNameOptions}
              reset={reset}
            />
          </div>
          <div className="dropdown-mob">
            <DropDawnCheckboxMob
              data={typeOptions}
              title={t('type_title')}
              value={selectedType}
              onChange={(values: string[]) => handleFilterChange('selectedType', values)}
            />
          </div>
          <div className="dropdown-mob">
            <DropDawnCheckboxMob
              data={bedroomOptions}
              title={t('beds_title')}
              value={selectedBeds}
              onChange={(values: string[]) => handleFilterChange('selectedBeds', values)}
            />
          </div>
          <div className="dropdown-mob">
            <DropDawnCheckboxMob
              data={areasOptions}
              title={t('area_title')}
              value={selectedArea}
              onChange={(values: string[]) => handleFilterChange('selectedArea', values)}
            />
          </div>
          <div className="dropdown-combine-mob">
            <DropDawnCombineMob
              data={priceOptions}
              title={t('price_title')}
              type="Price"
              valueNum={selectedPrice}
              onChange={(values: number[]) => handleFilterChange('selectedPrice', values)}
              reset={reset}
            />
          </div>
          <div className="dropdown-combine-mob">
            <DropDawnCombineMob
              data={sizeOptions}
              title={t('size_title')}
              type="Size"
              valueNum={selectedSize}
              onChange={(values: number[]) => handleFilterChange('selectedSize', values)}
              reset={reset}
            />
          </div>
          <button className="filters-block-mob-submit" onClick={handleSubmitFilter}>
            {t('mob_submit')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterMob;

/*
 <DropDawnCheckboxMob
              data={typeOptions}
              title={t('type_title')}
              value={selectedType}
              onChange={(values: string[]) => handleFilterChange('selectedType', values)}
            />

*/
