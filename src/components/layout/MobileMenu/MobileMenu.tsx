import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { CustomIconBtn } from '@/components/CustomIconBtn';
import { CustomModal } from '@/components/CustomModal';
import { Logo } from '@/components/layout/Logo';

import { MobileMenuProps } from './types';

import './MobileMenu.scss';

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isMobile }) => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;
  const currentPathname = usePathname();

  const path = currentPathname === '/' || currentPathname === `/${currentLocale}`;

  const listLinksMobile = [
    {
      href: `/${currentLocale}/`,
      title: t('header.navlink-home'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 19.9983C21 20.2635 20.8946 20.5179 20.7071 20.7054C20.5196 20.893 20.2652 20.9983 20 20.9983H4C3.73478 20.9983 3.48043 20.893 3.29289 20.7054C3.10536 20.5179 3 20.2635 3 19.9983V9.48832C2.99989 9.33593 3.03462 9.18554 3.10152 9.04862C3.16841 8.9117 3.26572 8.79188 3.386 8.69832L11.386 2.47632C11.5615 2.33976 11.7776 2.26562 12 2.26562C12.2224 2.26562 12.4385 2.33976 12.614 2.47632L20.614 8.69832C20.7343 8.79188 20.8316 8.9117 20.8985 9.04862C20.9654 9.18554 21.0001 9.33593 21 9.48832V19.9983ZM7 14.9983V16.9983H17V14.9983H7Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/properties`,
      title: t('header.navlink-properties'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 19.0006H14V6.0006L20.394 8.74059C20.574 8.81776 20.7274 8.94607 20.8351 9.10962C20.9428 9.27317 21.0002 9.46475 21 9.66059V19.0006H23V21.0006H1V19.0006H3V5.6506C2.99998 5.45711 3.05608 5.26778 3.16151 5.10554C3.26695 4.94331 3.41718 4.81515 3.594 4.7366L11.297 1.3126C11.3732 1.27874 11.4567 1.26448 11.5398 1.27112C11.6229 1.27775 11.7031 1.30508 11.7729 1.3506C11.8428 1.39612 11.9002 1.45839 11.9398 1.53174C11.9795 1.6051 12.0002 1.68721 12 1.7706V19.0006Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/projects-map`,
      title: t('header.navlink-map'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.95 11.9501C17.7971 11.1037 18.4128 10.054 18.7381 8.90159C19.0634 7.74914 19.0875 6.53248 18.808 5.36807L21.303 4.29807C21.3791 4.26545 21.4621 4.25224 21.5445 4.25961C21.627 4.26698 21.7063 4.29471 21.7754 4.34031C21.8445 4.38591 21.9012 4.44795 21.9404 4.52087C21.9796 4.59378 22.0001 4.67528 22 4.75807V19.0001L15 22.0001L9 19.0001L2.697 21.7011C2.62091 21.7337 2.53792 21.7469 2.45547 21.7395C2.37301 21.7322 2.29368 21.7044 2.22459 21.6588C2.1555 21.6132 2.09881 21.5512 2.05961 21.4783C2.02041 21.4054 1.99993 21.3238 2 21.2411V7.00007L5.129 5.65907C4.90884 6.78465 4.96891 7.9471 5.30391 9.04399C5.6389 10.1409 6.23855 11.1385 7.05 11.9491L12 16.9001L16.95 11.9501ZM15.536 10.5361L12 14.0701L8.464 10.5351C7.76487 9.83575 7.2888 8.94484 7.09598 7.97497C6.90316 7.0051 7.00225 5.99983 7.38073 5.08628C7.75921 4.17272 8.40007 3.39191 9.22229 2.84256C10.0445 2.29321 11.0111 2 12 2C12.9889 2 13.9555 2.29321 14.7777 2.84256C15.5999 3.39191 16.2408 4.17272 16.6193 5.08628C16.9977 5.99983 17.0968 7.0051 16.904 7.97497C16.7112 8.94484 16.2351 9.83575 15.536 10.5351V10.5361Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/areas`,
      title: t('header.navlink-areas'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2 5L9 2L15 5L21.303 2.299C21.3791 2.26638 21.4621 2.25317 21.5445 2.26054C21.627 2.26792 21.7063 2.29565 21.7754 2.34124C21.8445 2.38684 21.9012 2.44888 21.9404 2.5218C21.9796 2.59471 22.0001 2.67622 22 2.759V19L15 22L9 19L2.697 21.701C2.62091 21.7336 2.53792 21.7468 2.45547 21.7395C2.37301 21.7321 2.29368 21.7044 2.22459 21.6588C2.1555 21.6132 2.09881 21.5511 2.05961 21.4782C2.02041 21.4053 1.99993 21.3238 2 21.241V5ZM6 11V13H8V11H6ZM10 11V13H12V11H10ZM16 10.94L14.763 9.702L13.702 10.762L14.939 12L13.702 13.237L14.762 14.298L16 13.061L17.237 14.298L18.298 13.238L17.061 12L18.298 10.763L17.238 9.702L16 10.939V10.94Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/consulting`,
      title: t('header.navlink-consulting'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/construction`,
      title: t('header.navlink-construction'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M10 10.111V1L21 7V21H3V7L10 10.111Z" fill="#C29773" />
        </svg>
      ),
    },
  ];

  const listLinksDesktopHome = [
    {
      href: `/${currentLocale}/`,
      title: t('header.navlink-home'),
    },
    {
      href: `/${currentLocale}/properties`,
      title: t('header.navlink-properties'),
    },
    {
      href: `/${currentLocale}/projects-map`,
      title: 'Map',
    },
    {
      href: `/${currentLocale}/areas`,
      title: t('header.navlink-areas'),
    },
    {
      href: `/${currentLocale}/consulting`,
      title: t('header.navlink-consulting'),
    },
    {
      href: `/${currentLocale}/services`,
      title: t('header.navlink-legal-services'),
    },
  ];

  const listLinksDesktopNotHome = [
    {
      href: `/${currentLocale}/`,
      title: t('header.navlink-home'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 19.9983C21 20.2635 20.8946 20.5179 20.7071 20.7054C20.5196 20.893 20.2652 20.9983 20 20.9983H4C3.73478 20.9983 3.48043 20.893 3.29289 20.7054C3.10536 20.5179 3 20.2635 3 19.9983V9.48832C2.99989 9.33593 3.03462 9.18554 3.10152 9.04862C3.16841 8.9117 3.26572 8.79188 3.386 8.69832L11.386 2.47632C11.5615 2.33976 11.7776 2.26562 12 2.26562C12.2224 2.26562 12.4385 2.33976 12.614 2.47632L20.614 8.69832C20.7343 8.79188 20.8316 8.9117 20.8985 9.04862C20.9654 9.18554 21.0001 9.33593 21 9.48832V19.9983ZM7 14.9983V16.9983H17V14.9983H7Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/properties`,
      title: t('header.navlink-properties'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 19.0006H14V6.0006L20.394 8.74059C20.574 8.81776 20.7274 8.94607 20.8351 9.10962C20.9428 9.27317 21.0002 9.46475 21 9.66059V19.0006H23V21.0006H1V19.0006H3V5.6506C2.99998 5.45711 3.05608 5.26778 3.16151 5.10554C3.26695 4.94331 3.41718 4.81515 3.594 4.7366L11.297 1.3126C11.3732 1.27874 11.4567 1.26448 11.5398 1.27112C11.6229 1.27775 11.7031 1.30508 11.7729 1.3506C11.8428 1.39612 11.9002 1.45839 11.9398 1.53174C11.9795 1.6051 12.0002 1.68721 12 1.7706V19.0006Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/projects-map`,
      title: t('header.navlink-map'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.95 11.9501C17.7971 11.1037 18.4128 10.054 18.7381 8.90159C19.0634 7.74914 19.0875 6.53248 18.808 5.36807L21.303 4.29807C21.3791 4.26545 21.4621 4.25224 21.5445 4.25961C21.627 4.26698 21.7063 4.29471 21.7754 4.34031C21.8445 4.38591 21.9012 4.44795 21.9404 4.52087C21.9796 4.59378 22.0001 4.67528 22 4.75807V19.0001L15 22.0001L9 19.0001L2.697 21.7011C2.62091 21.7337 2.53792 21.7469 2.45547 21.7395C2.37301 21.7322 2.29368 21.7044 2.22459 21.6588C2.1555 21.6132 2.09881 21.5512 2.05961 21.4783C2.02041 21.4054 1.99993 21.3238 2 21.2411V7.00007L5.129 5.65907C4.90884 6.78465 4.96891 7.9471 5.30391 9.04399C5.6389 10.1409 6.23855 11.1385 7.05 11.9491L12 16.9001L16.95 11.9501ZM15.536 10.5361L12 14.0701L8.464 10.5351C7.76487 9.83575 7.2888 8.94484 7.09598 7.97497C6.90316 7.0051 7.00225 5.99983 7.38073 5.08628C7.75921 4.17272 8.40007 3.39191 9.22229 2.84256C10.0445 2.29321 11.0111 2 12 2C12.9889 2 13.9555 2.29321 14.7777 2.84256C15.5999 3.39191 16.2408 4.17272 16.6193 5.08628C16.9977 5.99983 17.0968 7.0051 16.904 7.97497C16.7112 8.94484 16.2351 9.83575 15.536 10.5351V10.5361Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/areas`,
      title: t('header.navlink-areas'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2 5L9 2L15 5L21.303 2.299C21.3791 2.26638 21.4621 2.25317 21.5445 2.26054C21.627 2.26792 21.7063 2.29565 21.7754 2.34124C21.8445 2.38684 21.9012 2.44888 21.9404 2.5218C21.9796 2.59471 22.0001 2.67622 22 2.759V19L15 22L9 19L2.697 21.701C2.62091 21.7336 2.53792 21.7468 2.45547 21.7395C2.37301 21.7321 2.29368 21.7044 2.22459 21.6588C2.1555 21.6132 2.09881 21.5511 2.05961 21.4782C2.02041 21.4053 1.99993 21.3238 2 21.241V5ZM6 11V13H8V11H6ZM10 11V13H12V11H10ZM16 10.94L14.763 9.702L13.702 10.762L14.939 12L13.702 13.237L14.762 14.298L16 13.061L17.237 14.298L18.298 13.238L17.061 12L18.298 10.763L17.238 9.702L16 10.939V10.94Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/consulting`,
      title: t('header.navlink-consulting'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/consierge-services`,
      title: t('header.navlink-consierge'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 20H19V22H5V20ZM12 18C9.87827 18 7.84344 17.1571 6.34315 15.6569C4.84285 14.1566 4 12.1217 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 12.1217 19.1571 14.1566 17.6569 15.6569C16.1566 17.1571 14.1217 18 12 18Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/construction`,
      title: t('header.navlink-construction'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M10 10.111V1L21 7V21H3V7L10 10.111Z" fill="#C29773" />
        </svg>
      ),
    },
    {
      href: `/${currentLocale}/mortgage`,
      title: t('header.navlink-mortgage'),
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"
            fill="#C29773"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {isMobile && (
        <CustomModal
          isOpen={isOpen}
          classNameModal="modal-content__mobile"
          classNameBackdrop="backdrop__mobile"
          onClose={onClose}
        >
          <div className="modal-content__mobile__header">
            <h3>{t('header.menu-mobile')}</h3>
            <CustomIconBtn className="" onClick={onClose} ariaLabel="icon close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.14082 12.6716C5.89033 12.9221 5.8784 13.3694 6.14678 13.6259C6.40324 13.8943 6.8565 13.8823 7.10699 13.6319L9.99953 10.7393L12.8921 13.6319C13.1485 13.8883 13.5899 13.8943 13.8463 13.6259C14.1147 13.3694 14.1087 12.9221 13.8523 12.6657L10.9597 9.77314L13.8523 6.88656C14.1087 6.62415 14.1147 6.18281 13.8463 5.92636C13.5899 5.65798 13.1485 5.66394 12.8921 5.92039L9.99953 8.81294L7.10699 5.92039C6.8565 5.6699 6.40324 5.65798 6.14678 5.92636C5.8784 6.18281 5.89033 6.63011 6.14082 6.8806L9.03336 9.77314L6.14082 12.6716Z"
                  fill="currentColor"
                />
              </svg>
            </CustomIconBtn>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="tel:+34695113333"
            className="modal-content__mobile__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                fill="currentColor"
              />
            </svg>
            <div>
              <span>+34 695 113 333</span>
              <span>{t('header.tel-mobile')}</span>
            </div>
          </a>
          <ul>
            {listLinksMobile.map((item, index) => (
              <li key={index}>
                <Link href={item.href} onClick={onClose}>
                  <div>
                    {item.svg}
                    {item.title}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z"
                      fill="#8C8C8C"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </CustomModal>
      )}

      {!isMobile && path && (
        <CustomModal
          isOpen={isOpen}
          classNameModal={`modal-content__desktop ${isOpen ? 'open' : ''}`}
          classNameBackdrop={`backdrop__desktop ${isOpen ? 'open' : ''}`}
          onClose={onClose}
        >
          <div>
            <Logo onClick={onClose} className="modal-content__desktop-logo" />
            <CustomIconBtn
              className="modal-content__desktop-icon"
              onClick={onClose}
              ariaLabel="icon close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.14082 12.6716C5.89033 12.9221 5.8784 13.3694 6.14678 13.6259C6.40324 13.8943 6.8565 13.8823 7.10699 13.6319L9.99953 10.7393L12.8921 13.6319C13.1485 13.8883 13.5899 13.8943 13.8463 13.6259C14.1147 13.3694 14.1087 12.9221 13.8523 12.6657L10.9597 9.77314L13.8523 6.88656C14.1087 6.62415 14.1147 6.18281 13.8463 5.92636C13.5899 5.65798 13.1485 5.66394 12.8921 5.92039L9.99953 8.81294L7.10699 5.92039C6.8565 5.6699 6.40324 5.65798 6.14678 5.92636C5.8784 6.18281 5.89033 6.63011 6.14082 6.8806L9.03336 9.77314L6.14082 12.6716Z"
                  fill="currentColor"
                />
              </svg>
            </CustomIconBtn>
          </div>
          <ul>
            {listLinksDesktopHome.map((item, index) => (
              <li key={index}>
                <Link href={item.href} onClick={onClose}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="properties" onClick={onClose} className="modal-content__desktop-link">
            {t('header.link-in-header')}
          </Link>
        </CustomModal>
      )}

      {!isMobile && !path && (
        <CustomModal
          isOpen={isOpen}
          classNameModal="modal-content__desktop-notHome"
          classNameBackdrop="backdrop__desktop-notHome"
          onClose={onClose}
        >
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="tel:+34695113333"
            className="modal-content__mobile__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                fill="currentColor"
              />
            </svg>
            <div>
              <span>+34 695 113 333</span>
              <span>{t('header.tel-mobile')}</span>
            </div>
          </a>
          <ul className="modal-content__desktop-notHome-list">
            {listLinksDesktopNotHome.map((item, index) => (
              <li key={index}>
                <Link href={item.href} onClick={onClose}>
                  <div>
                    {item.svg}
                    {item.title}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z"
                      fill="#8C8C8C"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </CustomModal>
      )}
    </>
  );
};
