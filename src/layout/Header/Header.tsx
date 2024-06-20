'use client';

import { CustomIconBtn } from '@/components/CustomIconBtn';
import FilterMob from '@/components/FilterMob/FilterMob';
import { DropdownLang } from '@/components/layout/DropdownLang';
import { Logo } from '@/components/layout/Logo';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { NavBar } from '@/components/layout/NavBar';
import { ScrollHeader } from '@/components/layout/ScrollHeader';
// @ts-ignore
import i18nConfig from '@/i18nConfig';
import useBodyScrollLock from '@/utils/useBodyScrollLock';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';

export const Header = () => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;
  const currentPathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [isOpenMobileFilter, setIsOpenMobileFilter] = useState<boolean>(false);
  const [isOpenSortMenu, setIsOpenSortMenu] = useState<boolean>(false);
  const [isOpenDropdownLang, setIsOpenDropdownLang] = useState<boolean>(false);

  const [savedProjects, setSavedProjects] = useState(0);

  const updateSavedProjects = () => {
    const savedData = localStorage.getItem('selected');
    const updateSaved = savedData ? JSON.parse(savedData) : [];
    setSavedProjects(updateSaved.length);
  };

  useEffect(() => {
    updateSavedProjects();

    const handleStorageChange = (event: any) => {
      if (event.key === 'selected') {
        updateSavedProjects();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localStorageUpdated', updateSavedProjects);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageUpdated', updateSavedProjects);
    };
  }, []);

  const toggleDropdownLang = () => {
    setIsOpenDropdownLang(!isOpenDropdownLang);
  };

  const handleChange = (newLocale: any) => {
    setIsOpenDropdownLang(false);
    i18n.changeLanguage(newLocale);

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isTop = scrollTop === 0;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isBottom = windowHeight + scrollTop >= documentHeight;
      setIsScrolled(!isTop && !isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onToggleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const onToggleMobileFilter = () => {
    setIsOpenMobileFilter(!isOpenMobileFilter);
  };
  const onCloseMobileMenu = () => {
    setIsOpenMobileMenu(false);
  };

  const onToggleSortMenu = () => {
    setIsOpenSortMenu(!isOpenSortMenu);
  };

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

  //прибираю скрол при відкритому мобільному фільтрі
  useBodyScrollLock(isOpenMobileFilter);
  return (
    <header className={path ? 'header-home' : 'header'}>
      <div
        className={`header-container container ${
          currentPathname === `/${currentLocale}/projects-map` ? 'map-padding' : ''
        }`}
      >
        <div className={path ? 'header-links__home' : 'header-links'}>
          <Logo
            onClick={onCloseMobileMenu}
            className={path ? 'header-links__logo-home' : 'header-links__logo'}
          />
          {!isTablet && <NavBar className={path ? 'header-nav' : ''} />}
        </div>
        <div className={path ? 'header-btns__home' : 'header-btns'}>
          <div className="header-btns__Nothome-wrapper">
            {!isMobile && (
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="tel:+34695113333"
                className={`phone ${path ? 'header-btns__link-home' : 'header-btns__link-Nothome'}`}
              >
                {path ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/srsgifqc.json"
                    colors="primary:#DBA77B"
                    trigger="hover"
                    target=".phone"
                    style={{ width: '22px', height: '22px' }}
                  ></lord-icon>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M11.5649 9.39417V11.3095C11.565 11.4466 11.5131 11.5787 11.4196 11.679C11.3261 11.7793 11.198 11.8405 11.0612 11.8501C10.8245 11.8663 10.6311 11.875 10.4816 11.875C5.6949 11.875 1.81494 7.99504 1.81494 3.20833C1.81494 3.05883 1.82307 2.86546 1.83986 2.62875C1.84946 2.49195 1.91059 2.36388 2.01092 2.27039C2.11125 2.1769 2.2433 2.12494 2.38044 2.125H4.29577C4.36296 2.12493 4.42778 2.14984 4.47763 2.19489C4.52748 2.23993 4.55881 2.3019 4.56552 2.36875C4.57798 2.49333 4.58936 2.59246 4.60019 2.66775C4.70784 3.419 4.92844 4.14966 5.25453 4.83496C5.30598 4.94329 5.2724 5.07275 5.1749 5.14208L4.00598 5.97733C4.72069 7.64269 6.0478 8.96977 7.71315 9.6845L8.54732 8.51775C8.58139 8.47008 8.63117 8.4359 8.68788 8.42117C8.74459 8.40638 8.80472 8.41202 8.85769 8.43704C9.5429 8.76253 10.2734 8.98255 11.0244 9.08975C11.0997 9.10058 11.1988 9.1125 11.3223 9.12442C11.389 9.13124 11.4509 9.16266 11.4958 9.21249C11.5407 9.26233 11.5651 9.32705 11.5649 9.39417Z"
                      fill="#DBA77B"
                    />
                  </svg>
                )}
                +34 695 113 333
              </a>
            )}
            <DropdownLang
              onClick={toggleDropdownLang}
              isOpenDropdownLang={isOpenDropdownLang}
              handleChange={handleChange}
              path={path}
            />
          </div>
          <div className="header-btns__Nothome-wrapper">
            {!path && !isMobile && (
              <Link href={`/${currentLocale}/properties`} className="header-btns__btn">
                {t('header.link-in-header')}
              </Link>
            )}
            {!path && !isMobile && !isTablet && savedProjects !== 0 && (
              <Link href={`/${currentLocale}/saved-projects`} className="header-btns__saved">
                <svg
                  width="31"
                  height="33"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2334 10.0206V15.4301C20.2334 18.7847 20.2334 20.462 19.4381 21.1949C19.0588 21.5445 18.5801 21.764 18.0701 21.8224C17.0007 21.9448 15.752 20.8403 13.2544 18.6312C12.1504 17.6548 11.5984 17.1665 10.9597 17.0379C10.6453 16.9746 10.3215 16.9746 10.0071 17.0379C9.36841 17.1665 8.81639 17.6548 7.71241 18.6312C5.21484 20.8403 3.96609 21.9448 2.89672 21.8224C2.38672 21.764 1.90796 21.5445 1.52868 21.1949C0.733399 20.462 0.733398 18.7847 0.733398 15.4301V10.0206C0.733398 5.37459 0.733399 3.05157 2.16125 1.60825C3.58911 0.164917 5.88721 0.164917 10.4834 0.164917C15.0796 0.164917 17.3777 0.164917 18.8055 1.60825C20.2334 3.05157 20.2334 5.37459 20.2334 10.0206ZM6.4209 4.49826C6.4209 4.04952 6.78469 3.68576 7.2334 3.68576H13.7334C14.1821 3.68576 14.5459 4.04952 14.5459 4.49826C14.5459 4.94696 14.1821 5.31076 13.7334 5.31076H7.2334C6.78469 5.31076 6.4209 4.94696 6.4209 4.49826Z"
                    fill="#dba77b"
                  />
                </svg>
                <span className="header-btns__saved-span">{savedProjects}</span>
              </Link>
            )}
          </div>
          {isTablet && !isMobile && !isOpenMobileMenu && (
            <CustomIconBtn
              onClick={onToggleMobileMenu}
              ariaLabel="open mobile menu"
              className={path ? 'header-btns__burger-home' : 'header-btns__burger-notHome'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path d="M3.48315 4H21.4832V6H3.48315V4ZM3.48315 11H21.4832V13H3.48315V11ZM3.48315 18H21.4832V20H3.48315V18Z" />
              </svg>
            </CustomIconBtn>
          )}
          {!path && isOpenMobileMenu && (
            <CustomIconBtn
              className="modal-content__desktop-notHome-btn"
              onClick={onToggleMobileMenu}
              ariaLabel="icon close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.14082 12.6716C5.89033 12.9221 5.8784 13.3694 6.14678 13.6259C6.40324 13.8943 6.8565 13.8823 7.10699 13.6319L9.99953 10.7393L12.8921 13.6319C13.1485 13.8883 13.5899 13.8943 13.8463 13.6259C14.1147 13.3694 14.1087 12.9221 13.8523 12.6657L10.9597 9.77314L13.8523 6.88656C14.1087 6.62415 14.1147 6.18281 13.8463 5.92636C13.5899 5.65798 13.1485 5.66394 12.8921 5.92039L9.99953 8.81294L7.10699 5.92039C6.8565 5.6699 6.40324 5.65798 6.14678 5.92636C5.8784 6.18281 5.89033 6.63011 6.14082 6.8806L9.03336 9.77314L6.14082 12.6716Z"
                  fill="currentColor"
                />
              </svg>
            </CustomIconBtn>
          )}
          {isOpenMobileMenu && (
            <MobileMenu
              isOpen={isOpenMobileMenu}
              onClose={onToggleMobileMenu}
              isMobile={isMobile}
            />
          )}
          {isOpenMobileFilter && <FilterMob onClose={onToggleMobileFilter} />}
          {isMobile && currentPathname === `/${currentLocale}/properties` && (
            <CustomIconBtn onClick={onToggleSortMenu} className="header-btns__filter">
              {t('header.btnSort')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3 5.5H8.625" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" />
                <path
                  d="M4.25 8.625H8.625"
                  stroke="#222222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M5.5 11.75H8.625"
                  stroke="#222222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.125 13V3L13 5.5"
                  stroke="#222222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </CustomIconBtn>
          )}
        </div>
        {currentPathname === `/${currentLocale}/projects-map` && isMobile && (
          <ScrollHeader
            isMobile={isMobile}
            onClick={onToggleMobileMenu}
            onClickFilter={onToggleMobileFilter}
            savedProjects={savedProjects}
          />
        )}
        {isScrolled && (
          <ScrollHeader
            isMobile={isMobile}
            onClick={onToggleMobileMenu}
            onClickFilter={onToggleMobileFilter}
            savedProjects={savedProjects}
          />
        )}
      </div>
      <Script src="https://cdn.lordicon.com/lordicon.js" />
    </header>
  );
};
