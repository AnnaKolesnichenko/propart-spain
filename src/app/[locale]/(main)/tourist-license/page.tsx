import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';

import '../visa/ConsultingPage.scss';

const TouristLicense = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-tourist-license']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle
        title={t('pageTitle')}
        description={t('pageDescription')}
        url={'tourist-license'}
      />

      <div className="consulting-content">
        <section className="text-content">
          <p className="regular-text">{t('section_description')}</p>

          <p className="regular-text bold">{t('obtaining_title')}</p>
          <p className="regular-text margin-top">{t('obtaining_text')}</p>

          <p className="regular-text">{t('before_applying')}</p>

          <p className="regular-text bold">{t('required_title')}</p>
          <p className="regular-text margin-top">{t('required_text')}</p>
          <ul className="consulting-list ">
            {t('required_list', { returnObjects: true }).map((text: string, index: number) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <p className="regular-text bold">{t('lendlors_title')}</p>
          <p className="regular-text margin-top">{t('lendlors_text')}</p>
          <ul className="consulting-list ">
            {t('lendlors_list', { returnObjects: true }).map((text: string, index: number) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <p className="regular-text bold">{t('posible_title')}</p>
          <p className="regular-text margin-top">{t('posible_text')}</p>

          <p className="regular-text bold">{t('conclusion_title')}</p>
          <p className="regular-text margin-top">{t('conclusion_text')}</p>

          <h2 className="titleH2">{t('tourist_license')}</h2>

          <h3 className="titleH3">{t('important_title')}</h3>
          <ul className="consulting-list ">
            {t('important_list', { returnObjects: true }).map((text: string, index: number) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <h3 className="titleH3">{t('what_get_title1')}</h3>
          <ul className="consulting-list ">
            {t('what_get_list1', { returnObjects: true }).map((text: string, index: number) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <h3 className="titleH3">{t('what_get_title2')}</h3>
          <ul className="consulting-list ">
            {t('what_get_list2', { returnObjects: true }).map((text: string, index: number) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <h3 className="titleH3">{t('technical_title')}</h3>
          <ul className="consulting-list ">
            {t('technical_list', { returnObjects: true }).map((text: string, index: number) => (
              <li key={index}>{text}</li>
            ))}
          </ul>

          <p className="regular-text italic">{t('finaly')}</p>
        </section>
        <div className="slider-block">
          <ConsultingSlider />
        </div>
      </div>
      <div className="list-links">
        <ListLinksClient />
      </div>
    </div>
  );
};
export default TouristLicense;
