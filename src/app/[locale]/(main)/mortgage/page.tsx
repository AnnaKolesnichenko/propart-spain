import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';
import '../visa/ConsultingPage.scss';

const Mortgage = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-mortgage']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle title={t('pageTitle')} description={t('pageDescription')} url={'mortgage'} />

      <div className="consulting-content">
        <section className="text-content">

          <h2 className="regular-text bold">{t('section_title')}</h2>
          <p className="regular-text">{t('section_description')}</p>

          <h3 className="regular-text bold">{t('benefits_title')}</h3>
          <ul className="consulting-list ">
            {t('benefits_list', { returnObjects: true }).map(
              (item: string, index: number) => (
                <li className='bold' key={index}>{item}</li>
              )
            )}
          </ul>

          <h3 className="regular-text bold">{t('process_title')}</h3>
          <ul className="consulting-list ">
            {t('process_list', { returnObjects: true }).map(
              (item: string, index: number) => (
                <li className='bold' key={index}>{item}</li>
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
export default Mortgage;
