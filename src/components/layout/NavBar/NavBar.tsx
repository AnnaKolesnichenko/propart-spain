import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CreateNavbarListHome, CreateNavbarListNotHome } from '@/constants/layout';

import { NavBarProps } from './types';

import './NavBar.scss';

export const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  const { i18n } = useTranslation('layout');
  const currentLocale = i18n.language;
  const currentPathname = usePathname();

  const navbarListHome = CreateNavbarListHome();
  const navbarListNotHome = CreateNavbarListNotHome();

  const navbarList =
    currentPathname === '/' ||
    currentPathname === '/en' ||
    currentPathname === '/ru' ||
    currentPathname === '/uk' ||
    currentPathname === '/da' ||
    currentPathname === '/fr' ||
    currentPathname === '/no' ||
    currentPathname === '/sw' ||
    currentPathname === '/de' ||
    currentPathname === '/es' ||
    currentPathname === '/pl' ||
    currentPathname === '/it'
      ? navbarListHome
      : navbarListNotHome;

  const path =
    currentPathname === '/' ||
    currentPathname === '/en' ||
    currentPathname === '/ru' ||
    currentPathname === '/uk' ||
    currentPathname === '/da' ||
    currentPathname === '/fr' ||
    currentPathname === '/no' ||
    currentPathname === '/sw' ||
    currentPathname === '/de' ||
    currentPathname === '/es' ||
    currentPathname === '/pl' ||
    currentPathname === '/it';

  return (
    <ul className={`list ${className}`}>
      {navbarList.map((item, index) => (
        <li key={index}>
          {path ? (
            <Link
              href={item.href}
              className={`list-link ${
                item.href === `/${currentLocale}/` ? 'active-home' : 'list-link__home'
              }`}
            >
              {item.title}
            </Link>
          ) : (
            <Link
              href={item.href}
              className={`list-link ${
                currentPathname === `${item.href}` ? 'active-notHome' : 'list-link__notHome'
              }`}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
