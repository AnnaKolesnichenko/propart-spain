import { CustomIconBtn } from '@/components/CustomIconBtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './ScrollHeader.scss';
import { ScrollHeaderProps } from './types';

import { CreateNavbarListHome } from '@/constants/layout';

export const ScrollHeader: React.FC<ScrollHeaderProps> = ({
  isMobile,
  onClick,
  onClickFilter,
  savedProjects,
}) => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;
  const pathname = usePathname();

  const listLinks = CreateNavbarListHome();

  const path =
    pathname === '/projects-map' ||
    pathname === '/en/projects-map' ||
    pathname === '/ru/projects-map' ||
    pathname === '/uk/projects-map' ||
    pathname === '/da/projects-map' ||
    pathname === '/fr/projects-map' ||
    pathname === '/no/projects-map' ||
    pathname === '/sw/projects-map' ||
    pathname === '/de/projects-map' ||
    pathname === '/es/projects-map' ||
    pathname === '/pl/projects-map' ||
    pathname === '/it/projects-map';

  return (
    <>
      {isMobile ? (
        <div className="scroll-header__mobile">
          <CustomIconBtn className="scroll-header__mobile-btn" onClick={onClickFilter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <path
                d="M11.7305 18H15.7305V16H11.7305V18ZM4.73047 6V8H22.7305V6H4.73047ZM7.73047 13H19.7305V11H7.73047V13Z"
                fill="currentColor"
              />
            </svg>
            {t('header.filter')}
          </CustomIconBtn>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="tel:+34695113333"
            className="scroll-header__mobile-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.75 16.42V19.956C21.7501 20.2092 21.6542 20.453 21.4816 20.6382C21.309 20.8234 21.0726 20.9363 20.82 20.954C20.383 20.984 20.026 21 19.75 21C10.913 21 3.75 13.837 3.75 5C3.75 4.724 3.765 4.367 3.796 3.93C3.81372 3.67744 3.92658 3.44101 4.1118 3.26841C4.29703 3.09581 4.54082 2.99989 4.794 3H8.33C8.45404 2.99987 8.5737 3.04586 8.66573 3.12902C8.75776 3.21218 8.8156 3.32658 8.828 3.45C8.851 3.68 8.872 3.863 8.892 4.002C9.09073 5.38892 9.498 6.73783 10.1 8.003C10.195 8.203 10.133 8.442 9.953 8.57L7.795 10.112C9.11445 13.1865 11.5645 15.6365 14.639 16.956L16.179 14.802C16.2419 14.714 16.3338 14.6509 16.4385 14.6237C16.5432 14.5964 16.6542 14.6068 16.752 14.653C18.017 15.2539 19.3656 15.6601 20.752 15.858C20.891 15.878 21.074 15.9 21.302 15.922C21.4252 15.9346 21.5394 15.9926 21.6224 16.0846C21.7053 16.1766 21.7502 16.2961 21.75 16.42Z"
                fill="currentColor"
              />
            </svg>
            {t('header.call')}
          </a>
          <Link
            href={path ? `/${currentLocale}/properties` : `/${currentLocale}/projects-map`}
            className="scroll-header__mobile-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <path
                d="M14.2299 21.0004H19.2299V23.0004H7.2299V21.0004H12.2299V19.9504C10.6444 19.7912 9.11984 19.2555 7.78326 18.3879C6.44668 17.5202 5.33674 16.3458 4.5459 14.9624L6.2829 13.9704C6.89368 15.0377 7.74227 15.9497 8.76275 16.6358C9.78323 17.3219 10.9481 17.7635 12.167 17.9263C13.3858 18.0891 14.6258 17.9688 15.7906 17.5746C16.9554 17.1805 18.0136 16.5231 18.8831 15.6536C19.7526 14.7841 20.41 13.7259 20.8041 12.5611C21.1983 11.3963 21.3186 10.1563 21.1558 8.93748C20.993 7.71864 20.5514 6.55374 19.8653 5.53326C19.1792 4.51278 18.2672 3.66419 17.1999 3.05341L18.1919 1.31641C19.7229 2.19095 20.9954 3.45491 21.8802 4.98004C22.765 6.50517 23.2307 8.2372 23.2299 10.0004C23.2299 15.1854 19.2829 19.4494 14.2299 19.9504V21.0004ZM13.2299 17.0004C12.3107 17.0004 11.4004 16.8193 10.5511 16.4676C9.70183 16.1158 8.93016 15.6002 8.28015 14.9502C7.63014 14.3001 7.11452 13.5285 6.76274 12.6792C6.41096 11.8299 6.2299 10.9197 6.2299 10.0004C6.2299 9.08115 6.41096 8.1709 6.76274 7.32162C7.11452 6.47234 7.63014 5.70067 8.28015 5.05066C8.93016 4.40065 9.70183 3.88503 10.5511 3.53325C11.4004 3.18147 12.3107 3.00041 13.2299 3.00041C15.0864 3.00041 16.8669 3.7379 18.1797 5.05066C19.4924 6.36341 20.2299 8.14389 20.2299 10.0004C20.2299 11.8569 19.4924 13.6374 18.1797 14.9502C16.8669 16.2629 15.0864 17.0004 13.2299 17.0004ZM13.2299 15.0004C14.556 15.0004 15.8278 14.4736 16.7654 13.5359C17.7031 12.5983 18.2299 11.3265 18.2299 10.0004C18.2299 8.67432 17.7031 7.40255 16.7654 6.46487C15.8278 5.52719 14.556 5.00041 13.2299 5.00041C11.9038 5.00041 10.632 5.52719 9.69436 6.46487C8.75668 7.40255 8.2299 8.67432 8.2299 10.0004C8.2299 11.3265 8.75668 12.5983 9.69436 13.5359C10.632 14.4736 11.9038 15.0004 13.2299 15.0004Z"
                fill="currentColor"
              />
            </svg>
            {path ? t('header.navlink-properties') : t('header.map')}
          </Link>
          <CustomIconBtn className="scroll-header__mobile-burger" onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M3.25 4H21.25V6H3.25V4ZM3.25 11H21.25V13H3.25V11ZM3.25 18H21.25V20H3.25V18Z"
                fill="#222222"
              />
            </svg>
          </CustomIconBtn>
        </div>
      ) : (
        <div className="scroll-header__desktop">
          <ul className="scroll-header__desktop-list">
            {listLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="scroll-header__desktop-list-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="tel:+34695113333"
              className="scroll-header__desktop-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0001 10.8641 14 10.9467Z"
                  fill="currentColor"
                />
              </svg>
              {t('header.tel')}
            </a>
            {savedProjects !== 0 && (
              <Link
                href={`/${currentLocale}/saved-projects`}
                className="scroll-header__desktop-link__second"
              >
                {t('header.saved')}
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
