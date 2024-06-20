import Link from 'next/link';
import './OurServices.scss';
import initTranslations from '@/app/i18n';
const OurServices = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['home']);
  return (
    <section className="container">
      <div className="our-services">
        <h2 className="title">
          <span className="row">
            <span className="large">{t('our-services.title1')}</span>
            <span className="text">{t('our-services.description')}</span>
          </span>
          <span className="large">{t('our-services.title2')}</span>
        </h2>

        <div className="links">
          <div className="row">
            <Link href="/insurance" className="advantage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 1L20.217 2.826C20.674 2.928 21 3.333 21 3.802V13.789C21 15.795 19.997 17.669 18.328 18.781L12 23L5.672 18.781C4.002 17.668 3 15.795 3 13.79V3.802C3 3.333 3.326 2.928 3.783 2.826L12 1ZM16.452 8.222L11.502 13.171L8.674 10.343L7.26 11.757L11.503 16L17.867 9.636L16.452 8.222V8.222Z"
                  fill="#DBA77B"
                />
              </svg>
              <div className="text">
                <span>{t('our-services.insurance')}</span>
                <p>{t('our-services.insurance-text')}</p>
              </div>
            </Link>
            <Link href="/services" className="advantage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12H15C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12H7Z"
                  fill="#DBA77B"
                />
              </svg>
              <div className="text">
                <span>{t('our-services.mortgage')}</span>
                <p>{t('our-services.mortgage-text')}</p>
              </div>
            </Link>
            <Link href="/services" className="advantage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 19.9995V21.9995H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8175L13.879 16.9495L12.464 18.3635L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547Z"
                  fill="#DBA77B"
                />
              </svg>
              <div className="text">
                <span>{t('our-services.legal-services')}</span>
                <p>{t('our-services.legal-services-text')}</p>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link href="/construction" className="advantage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 21H13V18H11V21H9V19H7V21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V17H5V15H3V13H6V11H3V9H5V7H3V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10C10.2652 3 10.5196 3.10536 10.7071 3.29289C10.8946 3.48043 11 3.73478 11 4V13H20C20.2652 13 20.5196 13.1054 20.7071 13.2929C20.8946 13.4804 21 13.7348 21 14V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H17V19H15V21Z"
                  fill="#DBA77B"
                />
              </svg>
              <div className="text">
                <span>{t('our-services.construction')}</span>
                <p>{t('our-services.construction-text')}</p>
              </div>
            </Link>
            <Link href="/properties" className="advantage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 5V2C7 1.73478 7.10536 1.48043 7.29289 1.29289C7.48043 1.10536 7.73478 1 8 1H16C16.2652 1 16.5196 1.10536 16.7071 1.29289C16.8946 1.48043 17 1.73478 17 2V5H21C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5H7ZM6 13V7H4V13H6ZM8 7V13H11V11H13V13H16V7H8ZM18 13H20V7H18V13ZM9 3V5H15V3H9Z"
                  fill="#DBA77B"
                />
              </svg>
              <div className="text">
                <span>{t('our-services.real-estate')}</span>
                <p>{t('our-services.real-estate-text')}</p>
              </div>
            </Link>
            <Link href="/visa" className="advantage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0009 18.26L4.94789 22.208L6.52289 14.28L0.587891 8.792L8.61489 7.84L12.0009 0.5L15.3869 7.84L23.4139 8.792L17.4789 14.28L19.0539 22.208L12.0009 18.26Z"
                  fill="#DBA77B"
                />
              </svg>
              <div className="text">
                <span>{t('our-services.golden-visa')}</span>
                <p>{t('our-services.golden-visa-text')}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurServices;
