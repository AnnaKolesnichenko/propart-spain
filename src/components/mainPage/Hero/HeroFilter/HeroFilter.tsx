'use client';
import HeroFilterSelect from '../HeroFilterSelect/HeroFilterSelect';
import HeroFilterRadioButtons from '../HeroFilterRadiButtons/HeroFilterRadioButtons';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { areasOptions } from '@/constants/filters';
import useFilterStore from '@/store/filterStore';
import { FilterState } from '@/store/filterStore';
import './HeroFilter.scss';

const HeroFilter = () => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const { selectedRadio, selectedArea, setFilter } = useFilterStore();
  const areasData = areasOptions;

  const handleFilterChange = (field: keyof FilterState, value: any) => {
    setFilter(field, value);
  };

  //відправка форми
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/properties');
  };

  return (
    <form className="hero-filter" onSubmit={handleSubmit}>
      <HeroFilterSelect
        areasData={areasData}
        selectedAreas={selectedArea}
        action={(values: string[]) => handleFilterChange('selectedArea', values)}
        value={t('hero.filter-select')}
      />
      <HeroFilterRadioButtons
        radio1={t('hero.filter-radio1')}
        radio2={t('hero.filter-radio2')}
        selectedType={selectedRadio}
        action={(values: string) => handleFilterChange('selectedRadio', values)}
      />

      <button className="hero-filter__button opacity" type="submit">
        {t('hero.filter-submit')}
      </button>
    </form>
  );
};
export default HeroFilter;
