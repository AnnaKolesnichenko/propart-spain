import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';

import '../visa/ConsultingPage.scss';

const Insurance = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-insurance']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle title={t('pageTitle')} description={t('pageDescription')} url={'insurance'} />

      <div className="consulting-content">
        <section className="text-content">
          <h2 className="titleH2">{t('blockTitle')}</h2>
          <p className="regular-text">{t('blockDescription')}</p>

          <p className="regular-text bold">{t('why_insure_real_estate_title')}</p>
          <p className="regular-text">{t('why_insure_real_estate_text')}</p>

          <p className="regular-text bold">{t('main_types_real_estate_insurance_title')}</p>
          <ul className="consulting-list ">
            {t('main_types_real_estate_insurance', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text bold">{t('choose_insurance_title')}</p>
          <p className="regular-text">{t('choose_insurance_description')}</p>
          <ul className="consulting-list ">
            {t('choose_insurance_factors', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text bold">{t('peculiarities_real_estate_insurance_title')}</p>
          <p className="regular-text">{t('peculiarities_real_estate_insurance_description')}</p>
          <ul className="consulting-list ">
            {t('peculiarities_real_estate_insurance', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text bold">{t('conclusion_title')}</p>
          <p className="regular-text">{t('conclusion_text')}</p>

          <h2 className="titleH2">{t('health_insurance_title')}</h2>
          <p className="regular-text">{t('health_insurance_text')}</p>

          <p className="regular-text bold">{t('general_healthcare_system_title')}</p>
          <p className="regular-text">{t('general_healthcare_system_text')}</p>

          <p className="regular-text bold">{t('private_health_insurance_title')}</p>
          <p className="regular-text">{t('private_health_insurance_description')}</p>
          <ul className="consulting-list ">
            {t('private_health_insurance', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text bold">{t('choose_health_insurance_title')}</p>
          <p className="regular-text">{t('choose_health_insurance_description')}</p>
          <ul className="consulting-list ">
            {t('choose_health_insurance_factors', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text bold">{t('benefits_private_health_insurance_title')}</p>
          <p className="regular-text">{t('benefits_private_health_insurance_description')}</p>
          <ul className="consulting-list ">
            {t('benefits_private_health_insurance', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text bold">{t('conclusion_health_insurance_title')}</p>
          <p className="regular-text">{t('conclusion_health_insurance_text')}</p>

          <h2 className="titleH2">{t('student_visa_insurance_title')}</h2>
          <p className="regular-text">{t('student_visa_insurance_text')}</p>
          <ul className="consulting-list ">
            {t('student_visa_insurance_aspects', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text">{t('stay_safe_text1')}</p>
          <p className="regular-text">{t('stay_safe_text2')}</p>
          <p className="regular-text">{t('stay_safe_text3')}</p>
          <p className="regular-text">{t('stay_safe_text4')}</p>
          <p className="regular-text">{t('stay_safe_text5')}</p>
          <p className="regular-text">{t('stay_safe_text6')}</p>
          <p className="regular-text">{t('stay_safe_text7')}</p>

          <p className="regular-text bold">{t('why_need_insurance_title')}</p>
          <p className="regular-text">{t('why_need_insurance_description')}</p>

          <p className="regular-text bold">{t('main_type_insurance_title')}</p>
          <ul className="consulting-list ">
            {t('main_type_insurance_list', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text">{t('car_insurance_text')}</p>

          <p className="regular-text bold">{t('legal_requirements_title')}</p>
          <p className="regular-text">{t('legal_requirements_description')}</p>

          <p className="regular-text bold">{t('legal_type_insurance_title')}</p>
          <ul className="consulting-list ">
            {t('legal_type_insurance_list', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text bold">{t('factor_cost_insurance_title')}</p>
          <ul className="consulting-list ">
            {t('factor_cost_insurance_list', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="regular-text">{t('students_insurance_text')}</p>
          <ul className="consulting-list ">
            {t('students_insurance_list', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <p className="titleH3">{t('insurance_includes_text')}</p>
          <ul className="consulting-list ">
            {t('insurance_includes_list', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>
          <p className="regular-text">{t('insurance_finale')}</p>
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
export default Insurance;
