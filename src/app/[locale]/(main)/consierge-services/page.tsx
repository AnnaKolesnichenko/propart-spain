import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';

import '../visa/ConsultingPage.scss';
interface ListItemTextType {
  title: string;
  text: string;
}
const ConsiergeServices = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-consierge-services']);
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

          <p className="regular-text bold">{t('real_estate_title')}</p>
          <p className="regular-text margin-top">{t('real_estate_text')}</p>

          <p className="regular-text bold">{t('personalized_title')}</p>
          <p className="regular-text margin-top">{t('personalized_text')}</p>

          <p className="regular-text bold">{t('transportation_title')}</p>
          <p className="regular-text margin-top">{t('transportation_text')}</p>

          <p className="regular-text bold">{t('caring_title')}</p>
          <p className="regular-text margin-top">{t('caring_text')}</p>

          <p className="regular-text">{t('one_of_the_key')}</p>

          <p className="regular-text bold">{t('access_title')}</p>
          <p className="regular-text margin-top">{t('access_text')}</p>

          <p className="regular-text bold">{t('personal_title')}</p>
          <p className="regular-text margin-top">{t('personal_text')}</p>

          <p className="regular-text bold">{t('cultural_title')}</p>
          <p className="regular-text margin-top">{t('cultural_text')}</p>

          <p className="regular-text bold">{t('conclusion_title')}</p>
          <p className="regular-text margin-top">{t('conclusion_text')}</p>

          <h2 className="titleH2">{t('who_the')}</h2>

          <p className="regular-text">{t('text1')}</p>
          <p className="regular-text">{t('text1')}</p>
          <p className="regular-text">{t('text1')}</p>
          <p className="regular-text">{t('text1')}</p>

          <p className="regular-text">{t('complete_title')}</p>
          <ul className="consulting-list">
            {t('complete_list', { returnObjects: true }).map(
              (item: ListItemTextType, index: number) => (
                <li key={index}>
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                  <p>{item.text}</p>
                </li>
              )
            )}
          </ul>

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
export default ConsiergeServices;
