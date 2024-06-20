import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';

import '../visa/ConsultingPage.scss';

const NotaSimple = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-nota-simple']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle
        title={t('pageTitle')}
        description={t('pageDescription')}
        url={'nota-simple'}
      />

      <div className="consulting-content">
        <section className="text-content">
          <p className="regular-text">{t('section_description')}</p>

          <p className="regular-text">
            <strong>{t('proof_title')}</strong>
            {t('proof_text')}
          </p>

          
          <p className="regular-text">
            <strong>{t('information_title')}</strong>
            {t('information_text')}
          </p>

          <p className="regular-text">
            <strong>{t('property_title')}</strong>
            {t('property_text')}
          </p>

          <h2 className="regular-text bold">{t('process_title')}</h2>
          <p className="regular-text margin-top">{t('process_text')}</p>

          <p className="regular-text">
            <strong>{t('gathering_title')}</strong>
            {t('gathering_text')}
          </p>

          <p className="regular-text">
            <strong>{t('submitting_title')}</strong>
            {t('submitting_text')}
          </p>

          <h3 className="regular-text bold">{t('legal_title')}</h3>
          <p className="regular-text margin-top">{t('legal_text')}</p>

          <p className="regular-text">{t('finaly')}</p>

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
export default NotaSimple;
