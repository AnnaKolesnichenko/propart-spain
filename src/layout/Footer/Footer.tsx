'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ListFooter } from '@/components/layout/ListFooter';
import { Logo } from '@/components/layout/Logo';
import { SocialsListFooter } from '@/components/layout/SocialsListFooter';

import {
  CreateFooterListConsulting,
  CreateFooterListProperties,
  CreateFooterListServices,
} from '@/constants/layout';

import './Footer.scss';

export const Footer = () => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;
  const listProperties = CreateFooterListProperties();
  const listConsulting = CreateFooterListConsulting();
  const listServices = CreateFooterListServices();

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResizeTablet = () => {
      const isTabletView = window.innerWidth < 1024;
      setIsTablet(isTabletView);
    };
    const handleResizeMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };
    handleResizeTablet();
    handleResizeMobile();

    window.addEventListener('resize', handleResizeTablet);
    window.addEventListener('resize', handleResizeMobile);

    return () => {
      window.removeEventListener('resize', handleResizeTablet);
      window.removeEventListener('resize', handleResizeMobile);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper__top">
          <div className="footer-contacts">
            <Logo className="footer-contacts__logo" />
            <a
              href="https://www.google.com.ua/maps/search/Pl.+de+la+Iglesia,+3,+office+1-D,+29670,+San+Pedro+de+Alcantara,+Malaga/@36.4871745,-4.9907757,18.01z?hl=ru&entry=ttu"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="footer-contacts__location"
            >
              {t('footer.location')}
            </a>
            <SocialsListFooter />
            <p>&copy; 2024 {t('footer.rights')}</p>
          </div>
          <ul className="footer-list">
            <li>
              <h3>{t('footer.list-properties')}</h3>
              <p>{t('footer.list-properties-subtitle')}</p>
              <ListFooter list={listProperties} />
            </li>
            <li>
              <h3>{t('footer.list-consulting')}</h3>
              <p>{t('footer.list-consulting-subtitle')}</p>
              <ListFooter list={listConsulting} />
            </li>
            <li>
              <h3>{t('footer.list-services')}</h3>
              <p>{t('footer.list-services-subtitle')}</p>
              <ListFooter list={listServices} className="list-wrap__mobile" />
            </li>
          </ul>
        </div>
        <div className="footer-tablet">
          {isTablet && (
            <Link
              href={
                pathname === `/${currentLocale}/properties` || pathname === '/properties'
                  ? `/${currentLocale}/projects-map`
                  : `/${currentLocale}/properties`
              }
              className="footer-tablet__link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.4832 13H4.48315V11H12.4832V4L20.4832 12L12.4832 20V13Z"
                  fill="currentColor"
                />
              </svg>
              {pathname === `/${currentLocale}/properties` || pathname === '/properties'
                ? t('footer.btnMap')
                : t('footer.btnProperty')}
            </Link>
          )}
          <div className="footer-tablet__wrapper-mobile">
            <p>&copy; 2024 {t('footer.rights')}</p>
            {isMobile && (
              <>
                <span>{t('footer.privacyPolicy')}</span>
                <span>{t('footer.termsOfUse')}</span>
              </>
            )}
          </div>
          <div className="footer-tablet__wrapper-desktop">
            {!isMobile && (
              <>
                <span>{t('footer.privacyPolicy')}</span>
                <span>{t('footer.termsOfUse')}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
