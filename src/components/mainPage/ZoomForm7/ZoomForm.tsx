'use client'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import './ZoomForm.scss';

const ZoomForm = () => {
  const { t } = useTranslation('home');
  return (
    <section className="container">
      <div className="zoom-form ">
        <div className="content">
          <div className="broker-img">
            <Image src="/main/section7form/broker-img.png" fill sizes='100%' alt="broker photo" />
          </div>

          <div className="form">
            <div className="title">
              <Image src="/main/section7form/ava.png" width={96} height={96} alt="zoom logo" />
              <div className='text'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="151"
                  height="50"
                  viewBox="0 -0.22536098966569895 84.762 20.903060594657283"
                >
                  <path
                    d="M69.012 6.414c.324.559.43 1.195.465 1.91l.046.953v6.664l.047.954c.094 1.558 1.243 2.71 2.813 2.808l.949.047V9.277l.047-.953c.039-.707.144-1.355.473-1.918a3.806 3.806 0 0 1 6.59.012c.324.559.425 1.207.464 1.906l.047.95v6.667l.047.954c.098 1.566 1.238 2.718 2.813 2.808l.949.047V8.324a7.62 7.62 0 0 0-7.617-7.62 7.6 7.6 0 0 0-5.715 2.581A7.61 7.61 0 0 0 65.715.703c-1.582 0-3.05.48-4.266 1.309-.742-.828-2.402-1.309-3.355-1.309V19.75l.953-.047c1.594-.105 2.746-1.226 2.808-2.808l.051-.954V9.277l.047-.953c.04-.719.14-1.351.465-1.914a3.816 3.816 0 0 1 3.297-1.898 3.81 3.81 0 0 1 3.297 1.902zM3.809 19.704l.953.046h14.285L19 18.8c-.129-1.566-1.238-2.71-2.809-2.812l-.953-.047h-8.57l11.426-11.43-.047-.949C17.973 1.98 16.817.837 15.238.75l-.953-.043L0 .703l.047.953c.125 1.551 1.25 2.719 2.808 2.809l.954.047h8.57L.953 15.942l.047.953c.094 1.57 1.227 2.707 2.809 2.808zM54.355 3.491a9.523 9.523 0 0 1 0 13.469 9.53 9.53 0 0 1-13.472 0c-3.719-3.719-3.719-9.75 0-13.469a9.518 9.518 0 0 1 6.73-2.789 9.525 9.525 0 0 1 6.742 2.79zM51.66 6.188a5.717 5.717 0 0 1 0 8.082 5.717 5.717 0 0 1-8.082 0 5.717 5.717 0 0 1 0-8.082 5.717 5.717 0 0 1 8.082 0zM27.625.702a9.518 9.518 0 0 1 6.73 2.79c3.72 3.718 3.72 9.75 0 13.468a9.53 9.53 0 0 1-13.472 0c-3.719-3.719-3.719-9.75 0-13.469a9.518 9.518 0 0 1 6.73-2.789h.012zm4.035 5.484a5.717 5.717 0 0 1 0 8.083 5.717 5.717 0 0 1-8.082 0 5.717 5.717 0 0 1 0-8.082 5.717 5.717 0 0 1 8.082 0z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>
                <div>{t('zoom.title')}</div>
              </div>
            </div>

            <div className="input-form">
              <div className="input-field">
                <input type="text" placeholder={t('zoom.name-input')}  />
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                  <path
                    d="M19.3126 21.5898H4.58594V19.6719C4.58594 18.4001 5.07079 17.1805 5.93386 16.2814C6.79692 15.3821 7.96747 14.8769 9.18802 14.8769H14.7105C15.9311 14.8769 17.1017 15.3821 17.9647 16.2814C18.8277 17.1805 19.3126 18.4001 19.3126 19.6719V21.5898ZM11.9493 12.959C11.2241 12.959 10.506 12.8101 9.8359 12.521C9.16589 12.2318 8.55708 11.808 8.04427 11.2737C7.53146 10.7394 7.12468 10.1051 6.84714 9.40699C6.56961 8.7089 6.42677 7.96068 6.42677 7.20507C6.42677 6.44946 6.56961 5.70124 6.84714 5.00315C7.12468 4.30506 7.53146 3.67075 8.04427 3.13645C8.55708 2.60215 9.16589 2.17832 9.8359 1.88916C10.506 1.6 11.2241 1.45117 11.9493 1.45117C13.4139 1.45117 14.8186 2.05738 15.8542 3.13645C16.89 4.21552 17.4718 5.67904 17.4718 7.20507C17.4718 8.7311 16.89 10.1946 15.8542 11.2737C14.8186 12.3528 13.4139 12.959 11.9493 12.959Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="input-field">
                <input type="text" placeholder={t('zoom.phone-input')} />
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                  <path
                    d="M20.2394 16.2387V19.6297C20.2395 19.8725 20.1512 20.1063 19.9923 20.2839C19.8335 20.4615 19.6159 20.5698 19.3834 20.5867C18.9812 20.6155 18.6526 20.6308 18.3985 20.6308C10.2648 20.6308 3.67188 13.7616 3.67188 5.28711C3.67188 5.02243 3.68568 4.68007 3.71421 4.261C3.73052 4.01879 3.8344 3.79206 4.00488 3.62654C4.17537 3.46102 4.39976 3.36904 4.63279 3.36914H7.88738C8.00155 3.36902 8.11169 3.41312 8.19639 3.49287C8.2811 3.57262 8.33434 3.68233 8.34575 3.80068C8.36692 4.02125 8.38625 4.19674 8.40466 4.33004C8.58757 5.66008 8.96243 6.95366 9.51652 8.16693C9.60396 8.35873 9.5469 8.58793 9.38122 8.71068L7.39496 10.1894C8.6094 13.1378 10.8645 15.4873 13.6943 16.7527L15.1117 14.6871C15.1696 14.6027 15.2542 14.5422 15.3506 14.5161C15.447 14.4899 15.5491 14.4999 15.6391 14.5442C16.8035 15.1204 18.0447 15.51 19.3208 15.6997C19.4487 15.7189 19.6172 15.74 19.827 15.7611C19.9404 15.7732 20.0455 15.8288 20.1219 15.9171C20.1982 16.0053 20.2396 16.1199 20.2394 16.2387Z"
                    fill="white"
                  />
                </svg>
              </div>
              <button className="select-button">
              {t('zoom.button')}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.0046 15.1715L19.1966 5.97852L20.6116 7.39252L10.0046 17.9995L3.64062 11.6355L5.05463 10.2215L10.0046 15.1715Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoomForm;
