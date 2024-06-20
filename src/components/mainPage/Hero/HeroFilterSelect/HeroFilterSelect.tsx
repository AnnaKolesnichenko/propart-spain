'use client'
import { useState, useRef } from 'react';
import { useClickOutside } from '@/utils/useClickOutside';
import './HeroFilterSelect.scss';

interface AreaItem {
  value: string;
  label: string;
}

interface HeroFilterSelectProps {
  action: (value: string[]) => void;
  areasData: AreaItem[];
  selectedAreas: string[];
  value: string;
}

const HeroFilterSelect = ({ action, areasData, selectedAreas, value }: HeroFilterSelectProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [showAreas, setShowAreas] = useState(false);
  useClickOutside(showAreas, [triggerRef, menuRef], () => setShowAreas(false));

  const handleAreaClick = (area: string) => {
    let updatedSelectedAreas;
    if (selectedAreas.includes(area)) {
      // Видалити якщо є у selectedAreas
      updatedSelectedAreas = selectedAreas.filter(selected => selected !== area);
    } else {
      // Додати якщо нема у selectedAreas
      updatedSelectedAreas = [...selectedAreas, area];
    }
    action(updatedSelectedAreas);
  };

  return (
    <>
      <button
        ref={triggerRef}
        className="hero-dropdownList__trigger"
        onClick={event => {
          event.preventDefault();
          setShowAreas(!showAreas);
        }}
      >
        <span className="text"> {selectedAreas.length > 0 ? selectedAreas.join(', ') : value}</span>
        <span className={`icon ${showAreas ? 'active' : ''}`}>
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.8538 7.8351L14.2835 1.20467C14.6847 0.79094 14.4415 0 13.9131 0H1.0537C0.525289 0 0.282089 0.79094 0.683299 1.20467L7.113 7.8351C7.3261 8.0549 7.6407 8.0549 7.8538 7.8351Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>

      <div ref={menuRef} className={`hero-dropdownList__menu  ${showAreas ? 'active' : ''}`}>
        {areasData && Array.isArray(areasData) && areasData.length > 0 && (
          <ul>
            {areasData.map((item, index) => (
              <li
                className="hero-dropdownList__list__item"
                onClick={() => handleAreaClick(item.label)}
                key={index}
              >
                {item.label}
                <span
                  className={`icon ${selectedAreas.includes(item.label) ? 'selected' : ''}`}
                ></span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default HeroFilterSelect;
