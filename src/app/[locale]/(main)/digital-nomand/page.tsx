import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';
import '../visa/ConsultingPage.scss';
interface ListItemsTextType {
  title: string;
  text: string;
}
const DigitalNomand = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-digital-nomand']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle
        title={t('pageTitle')}
        description={t('pageDescription')}
        url={'digital-nomand'}
      />

      <div className="consulting-content">
        <section className="text-content">
          <p className="regular-text">{t('section_description')}</p>

          <p className="regular-text bold">{t('what_is_title')}</p>
          <p className="regular-text margin-top">{t('what_is_text')}</p>

          <h2 className="regular-text bold">{t('conditions_title')}</h2>
          <ul className="consulting-list margin-top">
            {t('conditions_list', { returnObjects: true }).map(
              (item: ListItemsTextType, index: number) => (
                <li key={index}>
                  <p className="regular-text margin-top">{item.title}</p>
                  <p className="regular-text margin-top">{item.text}</p>
                </li>
              )
            )}
          </ul>

          <h3 className="regular-text bold">{t('digital_nomad_title')}</h3>
          <ul className="consulting-list">
            {t('digital_nomad_list', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="regular-text bold">{t('process_title')}</h3>
          <ul className="consulting-list">
            {t('process_list', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
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
export default DigitalNomand;
