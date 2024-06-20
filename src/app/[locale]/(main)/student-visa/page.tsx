import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';
import '../visa/ConsultingPage.scss';

const StudentVisa = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-student-visa']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle
        title={t('pageTitle')}
        description={t('pageDescription')}
        url={'student-visa'}
      />

      <div className="consulting-content">
        <section className="text-content">
          <h2 className="regular-text bold">{t('section_title')}</h2>
          <p className="regular-text margin-top">{t('section_description')}</p>

          <h3 className="regular-text bold">{t('compulsory_title')}</h3>
          <p className="regular-text margin-top">{t('compulsory_text')}</p>

          <p className="regular-text bold">{t('training_title')}</p>
          <p className="regular-text margin-top">{t('training_text')}</p>

          <h3 className="regular-text bold">{t('benefits_title')}</h3>
          <p className="regular-text margin-top">{t('benefits_text')}</p>
          <ul className="consulting-list ">
            {t('benefits_list', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="regular-text bold">{t('important_title')}</p>
          <p className="regular-text margin-top">{t('important_text1')}</p>
          <p className="regular-text">{t('important_text2')}</p>

          <h3 className="regular-text bold">{t('process_title')}</h3>
          <p className="regular-text margin-top">{t('process_text')}</p>
          <ul className="consulting-list ">
            {t('process_list', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="regular-text bold">{t('consultation_title')}</p>
          <ul className="consulting-list ">
            {t('consultation_list', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="regular-text bold">{t('translation_title')}</p>
          <ul className="consulting-list ">
            {t('translation_list', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="regular-text bold">{t('recommendations_title')}</p>
          <p className="regular-text margin-top">{t('recommendations_text')}</p>

          <p className="regular-text bold">{t('lack_title')}</p>
          <p className="regular-text margin-top">{t('lack_text')}</p>

          <p className="regular-text bold">{t('additional_title')}</p>
          <p className="regular-text margin-top">{t('additional_text')}</p>

          <p className="regular-text bold">{t('application_title')}</p>
          <p className="regular-text margin-top">{t('application_text')}</p>
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
export default StudentVisa;
