import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import i18nConfig from '@/i18nConfig';

import { DropdownLangIcons } from '@/components/layout/DropdownLangIcons';

import { DropdownLangHomeProps } from './types';

import './DropdownLang.scss';

export const DropdownLang: React.FC<DropdownLangHomeProps> = ({
  onClick,
  isOpenDropdownLang,
  handleChange,
  path,
}) => {
  const { i18n } = useTranslation();
  const currentLocation = i18n.language;
  const languages = i18nConfig.locales;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredLanguages = languages.filter((lang: string) => lang !== currentLocation);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClick();
      }
    };

    if (isOpenDropdownLang) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenDropdownLang, onClick]);

  return (
    <>
      {path ? (
        <div className="dropdown-home" ref={dropdownRef}>
          <button type="button" onClick={onClick} className="dropdown-home__btn">
            {currentLocation}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className={isOpenDropdownLang ? 'dropdown-btn__icon-active' : 'dropdown-btn__icon'}
            >
              <path d="M12.4734 16L6.47339 10H18.4734L12.4734 16Z" fill="white" />
            </svg>
          </button>

          {isOpenDropdownLang && (
            <div className="home-last">
              {filteredLanguages.map((lang: any) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleChange(lang)}
                  className="last-home__btn"
                >
                  {lang}
                  <DropdownLangIcons lang={lang} />
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="dropdown-Nothome" ref={dropdownRef}>
          <button type="button" onClick={onClick} className="dropdown-Nothome__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0001 1C14.971 1 19.0003 5.02922 19 10C19.0003 14.9711 14.9707 19.0006 9.99986 19C5.0287 19.0003 0.999711 14.9711 1 10.0003C0.999132 5.02922 5.0287 1 10.0001 1Z"
                stroke="#DBA77B"
                strokeMiterlimit="10"
              />
              <path d="M9.64062 1V19" stroke="#DBA77B" strokeMiterlimit="10" />
              <path d="M19 10.0039H1" stroke="#DBA77B" strokeMiterlimit="10" />
              <path
                d="M9.6325 1C9.6325 1 5.3125 4.19355 5.3125 10C5.3125 15.8065 9.6325 19 9.6325 19"
                stroke="#DBA77B"
                strokeMiterlimit="10"
              />
              <path
                d="M10.3594 1C10.3594 1 14.6794 4.19355 14.6794 10C14.6794 15.8065 10.3594 19 10.3594 19"
                stroke="#DBA77B"
                strokeMiterlimit="10"
              />
              <path
                d="M3.17188 4.46094C3.17188 4.46094 4.59687 7.23017 10.0119 7.23017C15.4269 7.23017 16.8519 4.46094 16.8519 4.46094"
                stroke="#DBA77B"
                strokeMiterlimit="10"
              />
              <path
                d="M3.17188 15.5388C3.17188 15.5388 4.59687 12.7695 10.0119 12.7695C15.4269 12.7695 16.8519 15.5388 16.8519 15.5388"
                stroke="#DBA77B"
                strokeMiterlimit="10"
              />
            </svg>
            {currentLocation}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={isOpenDropdownLang ? 'dropdown-btn__icon-active' : 'dropdown-btn__icon'}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.183057 0.662717C0.427138 0.445761 0.822864 0.445761 1.06695 0.662717L5.00001 4.15879L8.93308 0.662717C9.17714 0.445761 9.57289 0.445761 9.81695 0.662717C10.061 0.879679 10.061 1.23144 9.81695 1.4484L5.44195 5.33729C5.19788 5.55424 4.80213 5.55424 4.55807 5.33729L0.183057 1.4484C-0.0610188 1.23144 -0.0610188 0.879679 0.183057 0.662717Z"
                fill="#DBA77B"
              />
            </svg>
          </button>

          {isOpenDropdownLang && (
            <div className="Nothome-last">
              {filteredLanguages.map((lang: any) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleChange(lang)}
                  className="last-Nothome__btn"
                >
                  <DropdownLangIcons lang={lang} />
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
