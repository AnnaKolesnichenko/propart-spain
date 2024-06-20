import Link from 'next/link';
import './RequirementsList.scss';
import initTranslations from '@/app/i18n';
const RequirementsList = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <section className="container">
      <div className="requirements-list">
        <h2 className="requirements-list__title">{t('requirements-list.requirements-title')}</h2>
        <Link href="/consulting" className="item-container">
          <div className="image-block">
            <span className="icon mob-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path d="M20 20.222V2L42 14V42H6V14L20 20.222Z" fill="currentColor" />
              </svg>
            </span>
          </div>
          <div className="text">
            <span className="title"> {t('requirements-list.requirements1-title')}</span>
            <p>{t('requirements-list.requirements1-description')}</p>
          </div>
        </Link>
        <Link href="/services" className="item-container reverce">
          <div className="image-block">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M18 26V32H30V26H44V40C44 40.5304 43.7893 41.0391 43.4142 41.4142C43.0391 41.7893 42.5304 42 42 42H6C5.46957 42 4.96086 41.7893 4.58579 41.4142C4.21071 41.0391 4 40.5304 4 40V26H18ZM22 22H26V28H22V22ZM14 10V4C14 3.46957 14.2107 2.96086 14.5858 2.58579C14.9609 2.21071 15.4696 2 16 2H32C32.5304 2 33.0391 2.21071 33.4142 2.58579C33.7893 2.96086 34 3.46957 34 4V10H42C42.5304 10 43.0391 10.2107 43.4142 10.5858C43.7893 10.9609 44 11.4696 44 12V22H30V18H18V22H4V12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10H14ZM18 6V10H30V6H18Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="text">
            <span className="title"> {t('requirements-list.requirements2-title')}</span>
            <p>{t('requirements-list.requirements2-description')}</p>
          </div>
        </Link>
        <Link href="/mortgage" className="item-container">
          <div className="image-block">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M42 15.9998C43.0609 15.9998 44.0783 16.4212 44.8284 17.1714C45.5786 17.9215 46 18.9389 46 19.9998V27.9998C46 29.0607 45.5786 30.0781 44.8284 30.8282C44.0783 31.5784 43.0609 31.9998 42 31.9998H39.876C39.3884 35.8664 37.5065 39.4222 34.5835 41.9998C31.6605 44.5774 27.8972 45.9997 24 45.9998V41.9998C27.1826 41.9998 30.2348 40.7355 32.4853 38.4851C34.7357 36.2346 36 33.1824 36 29.9998V17.9998C36 14.8172 34.7357 11.765 32.4853 9.51452C30.2348 7.26408 27.1826 5.9998 24 5.9998C20.8174 5.9998 17.7652 7.26408 15.5147 9.51452C13.2643 11.765 12 14.8172 12 17.9998V31.9998H6C4.93913 31.9998 3.92172 31.5784 3.17157 30.8282C2.42143 30.0781 2 29.0607 2 27.9998V19.9998C2 18.9389 2.42143 17.9215 3.17157 17.1714C3.92172 16.4212 4.93913 15.9998 6 15.9998H8.124C8.61206 12.1336 10.4942 8.57835 13.4171 6.00115C16.3401 3.42396 20.1031 2.00195 24 2.00195C27.8969 2.00195 31.6599 3.42396 34.5829 6.00115C37.5058 8.57835 39.3879 12.1336 39.876 15.9998H42ZM15.52 31.5698L17.64 28.1778C19.5462 29.3719 21.7507 30.0034 24 29.9998C26.2493 30.0034 28.4538 29.3719 30.36 28.1778L32.48 31.5698C29.9385 33.1621 26.9991 34.0044 24 33.9998C21.0009 34.0044 18.0615 33.1621 15.52 31.5698Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="text">
            <span className="title"> {t('requirements-list.requirements3-title')}</span>
            <p>{t('requirements-list.requirements3-description')}</p>
          </div>
        </Link>
        <Link href="/insurance" className="item-container reverce">
          <div className="image-block">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M24 28V44H8C8 39.7565 9.68571 35.6869 12.6863 32.6863C15.6869 29.6857 19.7565 28 24 28V28ZM36 43L30.122 46.09L31.244 39.546L26.49 34.91L33.062 33.954L36 28L38.94 33.954L45.51 34.91L40.756 39.546L41.876 46.09L36 43ZM24 26C17.37 26 12 20.63 12 14C12 7.37 17.37 2 24 2C30.63 2 36 7.37 36 14C36 20.63 30.63 26 24 26Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="text">
            <span className="title"> {t('requirements-list.requirements4-title')}</span>
            <p>{t('requirements-list.requirements4-description')}</p>
          </div>
        </Link>
        <Link href="/services" className="item-container">
          <div className="image-block">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M26.0018 4V6.556L36.0018 9.892L43.2658 7.472L44.5317 11.264L38.4678 13.286L44.6598 30.31C42.4758 32.584 39.4018 34 36.0018 34C32.5998 34 29.5278 32.584 27.3438 30.31L33.5317 13.286L26.0018 10.774V38H34.0018V42H14.0017V38H22.0018V10.774L14.4657 13.286L20.6577 30.31C18.4757 32.584 15.4018 34 12.0017 34C8.59975 34 5.52775 32.584 3.34375 30.31L9.53175 13.286L3.47175 11.266L4.73775 7.47L12.0017 9.89L22.0018 6.556V4H26.0018ZM36.0018 18.206L33.1658 26H38.8358L36.0018 18.206ZM12.0017 18.206L9.16575 26H14.8357L12.0017 18.206Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="text">
            <span className="title"> {t('requirements-list.requirements5-title')}</span>
            <p>{t('requirements-list.requirements5-description')}</p>
          </div>
        </Link>
        <Link href="/visa" className="item-container reverce">
          <div className="image-block">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M10 6V38H42V42H6V6H10ZM39.88 11.88L44.12 16.12L32 28.244L26 22.244L18.12 30.124L13.88 25.88L26 13.76L32 19.76L39.88 11.88V11.88Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="text">
            <span className="title"> {t('requirements-list.requirements6-title')}</span>
            <p>{t('requirements-list.requirements6-description')}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default RequirementsList;
