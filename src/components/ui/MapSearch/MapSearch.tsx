'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useClickOutside } from '@/utils/useClickOutside';
import { useMediaQuery } from 'react-responsive';
import { FilterProjectNameType } from '@/types';
import './MapSearch.scss';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  projectsNameData: FilterProjectNameType[];
  reset: boolean;
  //виконується при кліку по елементу списку
  handleNameChange: (name: string, coordinates: [number, number], zoom: number) => void;
  //виконується при зміні значення input
  handleSearch: (value: string) => void;
}

const MapSearch = ({ handleNameChange, handleSearch, projectsNameData, reset }: SearchBarProps) => {
  const { t } = useTranslation('map-filters');
  const currentPathname = usePathname();
  const router = useRouter();
  const [data, setData] = useState<FilterProjectNameType[]>(projectsNameData);
  const [visible, setVisible] = useState(false);
  const tablet = useMediaQuery({ maxWidth: 1150 });
  const searchRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  useClickOutside(visible, [searchRef], () => setVisible(false));
  const activeVisible = () => {
    if (!visible && tablet) {
      setVisible(true);
    }
  };
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  //очистити інпут та оновити дані мапи
  const handleClearQuery = () => {
    handleNameChange('', [-4.883333, 36.516666], 11);
    setQuery('');
    handleSearch('');
    setVisible(false);
  };
  //клік по обраному елементу списку
  const handleProjectChoise = (name: string, coordinates: [number, number], id: string) => {
    //реалізувати перевірку, якщо сторінка карти одна функція, або інша
    const projectsMapRegex = /\/projects-map/;
    if (projectsMapRegex.test(currentPathname)) {
      handleNameChange(name, coordinates, 15); //оновлює карту
    }
    //якщо сторінка проперті треба реалізувати щоб відбувався перехід по id
    else {
      router.push(`/properties/${id}`);
    }
    setQuery(name);
    setVisible(false);
  };
  //
  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    handleSearch(event.target.value);
  };

  // Очищення query при функції reset
  useEffect(() => {
    setQuery('');
    handleSearch('');
    //eslint-disable-next-line
  }, [reset]);
  //фільтрація даних списку
  useEffect(() => {
    const filteredData = projectsNameData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  }, [query, projectsNameData]);

  return (
    <div className="map-search-block-container" ref={searchRef} onClick={activeVisible}>
      <form
        className={`map-search-block-form ${tablet && visible ? 'active' : ''}`}
        onSubmit={handleSearchSubmit}
      >
        <span className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M13.5233 12.4628L16.7355 15.6743L15.6743 16.7355L12.4628 13.5233C11.2678 14.4812 9.7815 15.0022 8.25 15C4.524 15 1.5 11.976 1.5 8.25C1.5 4.524 4.524 1.5 8.25 1.5C11.976 1.5 15 4.524 15 8.25C15.0022 9.7815 14.4812 11.2678 13.5233 12.4628ZM12.0188 11.9063C12.9706 10.9274 13.5022 9.61532 13.5 8.25C13.5 5.349 11.1503 3 8.25 3C5.349 3 3 5.349 3 8.25C3 11.1503 5.349 13.5 8.25 13.5C9.61532 13.5022 10.9274 12.9706 11.9063 12.0188L12.0188 11.9063V11.9063Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>

        <input
          className="map-search-block-input"
          value={query}
          onChange={e => handleSearchQuery(e)}
          placeholder={t('search_placeholder')}
          type="text"
          onFocus={() => setVisible(true)}
        />
        {query.length > 0 && (
          <button
            className={`map-search-block-input-close ${tablet && visible ? 'active' : ''}`}
            onClick={handleClearQuery}
          >
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              fill="currentColor"
              data-category="application"
            >
              <path d="M2.784 2.089l.069.058 5.146 5.147 5.146-5.147a.5.5 0 01.765.638l-.058.069L8.705 8l5.147 5.146a.5.5 0 01-.638.765l-.069-.058-5.146-5.147-5.146 5.147a.5.5 0 01-.765-.638l.058-.069L7.293 8 2.146 2.854a.5.5 0 01.638-.765z"></path>
            </svg>
          </button>
        )}
      </form>

      {visible && (
        <div className="map-search-block-searchList">
          {Array.isArray(data) && data.length > 0 ? (
            <ul className="map-search-block-searchList-ul">
              {data.map((item, i) => (
                <li
                  className={query === item.name ? 'active' : ''}
                  onClick={() => {
                    handleProjectChoise(item.name, item.coordinates, item.id);
                  }}
                  key={i}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="map-search-block-searchList-error">{t('search_list_error')}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapSearch;
