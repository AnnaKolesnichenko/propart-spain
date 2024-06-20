import Link from 'next/link';
import './Requirements.scss';
import initTranslations from '@/app/i18n';
const Requirements = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['home']);
  return (
    <section className="container">
      <div className="main-requirements">
        <h2 className="requirements-title">{t('requirements.requirements-title')}</h2>
        <div className="requirements-text">{t('requirements.requirements-description')}</div>
        <div className="requirements-container">
          <Link href="/visa" className="requirement">
            <span className="req-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 19.9995V21.9995H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8175L13.879 16.9495L12.464 18.3635L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <div className="req-title">
              <mark>{t('requirements.requirements1-title')}</mark>
            </div>
            <p>{t('requirements.requirements1-description')}</p>
          </Link>
          <Link href="/select-construction" className="requirement">
            <span className="req-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 19.9995V21.9995H2V19.9995H14ZM14.586 0.685547L22.364 8.46355L20.95 9.87955L19.89 9.52555L17.413 11.9995L23.07 17.6565L21.656 19.0705L16 13.4135L13.596 15.8175L13.879 16.9495L12.464 18.3635L4.686 10.5855L6.101 9.17155L7.231 9.45355L13.525 3.16055L13.172 2.10055L14.586 0.685547Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <div className="req-title">
              <mark>{t('requirements.requirements2-title')}</mark>
            </div>
            <p>{t('requirements.requirements2-description')}</p>
          </Link>
          <Link href="/student-visa" className="requirement">
            <span className="req-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 2.992V21.008C20.9979 21.2706 20.8926 21.5219 20.7068 21.7075C20.521 21.8931 20.2696 21.9982 20.007 22H3.993C3.72981 22 3.47739 21.8955 3.2912 21.7095C3.105 21.5235 3.00027 21.2712 3 21.008V2.992C3.00209 2.72938 3.10742 2.47813 3.29322 2.29251C3.47902 2.1069 3.73038 2.00183 3.993 2H20.007C20.555 2 21 2.444 21 2.992V2.992ZM19 4H5V20H19V4ZM11.293 13.121L15.536 8.879L16.95 10.293L11.293 15.95L7.403 12.06L8.818 10.646L11.293 13.121V13.121Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <div className="req-title">
              <mark>{t('requirements.requirements3-title')}</mark>
            </div>
            <p>{t('requirements.requirements3-description')}</p>
          </Link>
          <Link href="/tourist-license" className="requirement">
            <span className="req-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM10.05 11C10.1366 10.5747 10.3325 10.1792 10.6184 9.85258C10.9042 9.52593 11.2702 9.27933 11.6803 9.13706C12.0903 8.99478 12.5304 8.96172 12.9571 9.04114C13.3839 9.12056 13.7826 9.30972 14.114 9.59L15.815 8.457C15.2309 7.82076 14.476 7.36606 13.6405 7.14717C12.805 6.92829 11.9242 6.95447 11.1031 7.22259C10.2821 7.49072 9.55559 7.98945 9.01031 8.65926C8.46502 9.32907 8.12402 10.1417 8.028 11H7V13H8.027C8.12285 13.8586 8.46382 14.6714 9.00916 15.3414C9.55451 16.0114 10.2812 16.5103 11.1024 16.7784C11.9236 17.0466 12.8047 17.0727 13.6404 16.8536C14.476 16.6345 15.2309 16.1796 15.815 15.543L14.114 14.409C13.7826 14.6893 13.384 14.8785 12.9573 14.9579C12.5307 15.0374 12.0907 15.0044 11.6806 14.8623C11.2705 14.7201 10.9046 14.4736 10.6186 14.1471C10.3327 13.8206 10.1368 13.4252 10.05 13L15 13.001V11.001H10.05V11Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <div className="req-title">
              <mark>{t('requirements.requirements4-title')}</mark>
            </div>
            <p>{t('requirements.requirements4-description')}</p>
          </Link>
          <Link href="/consierge-services" className="requirement">
            <span className="req-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.7173 1.94727L17.4513 3.38127L16.7343 5.24827L15.8003 4.88927L15.0543 6.83427C15.8333 7.29627 16.4983 7.92827 16.9993 8.68027L18.9023 7.83327L18.4953 6.91927L20.3223 6.10627L21.9493 9.76027L20.1223 10.5733L19.7153 9.66027L17.8133 10.5073C17.9353 10.9843 18.0003 11.4853 18.0003 12.0003C18.0003 12.4063 17.9603 12.8033 17.8833 13.1873L19.8273 13.9333L20.1853 13.0003L22.0533 13.7173L20.6193 17.4513L18.7523 16.7343L19.1103 15.8013L17.1663 15.0543C16.7043 15.8333 16.0723 16.4983 15.3203 16.9993L16.1673 18.9023L17.0813 18.4953L17.8943 20.3223L14.2403 21.9493L13.4273 20.1223L14.3403 19.7153L13.4933 17.8133C13.0163 17.9353 12.5153 18.0003 12.0003 18.0003C11.5933 18.0003 11.1963 17.9603 10.8123 17.8823L10.0663 19.8273L11.0003 20.1853L10.2833 22.0533L6.54927 20.6193L7.26627 18.7523L8.19827 19.1103L8.94627 17.1663C8.16727 16.7043 7.50227 16.0723 7.00027 15.3203L5.09727 16.1673L5.50427 17.0813L3.67727 17.8943L2.05027 14.2403L3.87727 13.4273L4.28327 14.3413L6.18627 13.4933C6.06527 13.0163 6.00027 12.5153 6.00027 12.0003C6.00027 11.5943 6.04027 11.1973 6.11727 10.8133L4.17227 10.0673L3.81527 11.0003L1.94727 10.2833L3.38127 6.55027L5.24827 7.26727L4.88927 8.20027L6.83427 8.94727C7.29627 8.16727 7.92827 7.50227 8.68027 7.00027L7.83327 5.09727L6.91927 5.50427L6.10627 3.67727L9.76027 2.05127L10.5733 3.87827L9.66027 4.28527L10.5073 6.18727C10.9843 6.06527 11.4853 6.00027 12.0003 6.00027C12.4063 6.00027 12.8033 6.04027 13.1873 6.11727L13.9323 4.17227L13.0003 3.81527L13.7173 1.94727V1.94727ZM10.1343 13.2323C9.85827 13.7103 10.0223 14.3223 10.5003 14.5983C10.9783 14.8743 11.5903 14.7103 11.8663 14.2323C12.1423 13.7543 11.9783 13.1423 11.5003 12.8663C11.0223 12.5903 10.4103 12.7543 10.1343 13.2323ZM14.0003 11.0003C13.4483 11.0003 13.0003 11.4483 13.0003 12.0003C13.0003 12.5523 13.4483 13.0003 14.0003 13.0003C14.5523 13.0003 15.0003 12.5523 15.0003 12.0003C15.0003 11.4483 14.5523 11.0003 14.0003 11.0003ZM10.5003 9.40227C10.0223 9.67827 9.85827 10.2903 10.1343 10.7683C10.4103 11.2463 11.0223 11.4103 11.5003 11.1343C11.9783 10.8583 12.1423 10.2463 11.8663 9.76827C11.5903 9.29027 10.9783 9.12627 10.5003 9.40227Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <div className="req-title">
              <mark>{t('requirements.requirements5-title')}</mark>
            </div>
            <p>{t('requirements.requirements5-description')}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
