import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';

import '../visa/ConsultingPage.scss';

const RepairAndFurnishings = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-repairs-and-furnishings']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle
        title={t('pageTitle')}
        description={t('pageDescription')}
        url={'nota-simple'}
      />

      <div className="consulting-content">
        <section className="text-content">
          <h2 className="regular-text">{t('section_description')}</h2>

          <p className="regular-text bold">{t('cosmetic_title')}</p>
          <p className="regular-text margin-top">{t('cosmetic_text')}</p>

          <h3 className="regular-text bold">{t('development_title')}</h3>
          <p className="regular-text margin-top">{t('development_text')}</p>

          <p className="regular-text bold">{t('full_service_title')}</p>
          <p className="regular-text margin-top">{t('full_service_text')}</p>

          <p className="regular-text bold">{t('importance_title')}</p>
          <p className="regular-text margin-top">{t('importance_text1')}</p>
          <p className="regular-text">{t('importance_text2')}</p>

          <p className="regular-text bold">{t('local_title')}</p>
          <p className="regular-text margin-top">{t('local_text')}</p>

          <h3 className="regular-text bold">{t('benefit_title')}</h3>
          <p className="regular-text margin-top">{t('benefit_text')}</p>

          <p className="regular-text bold">{t('cooperation_title')}</p>
          <p className="regular-text margin-top">{t('cooperation_text')}</p>

          <p className="regular-text bold">{t('adaptation_title')}</p>
          <p className="regular-text margin-top">{t('adaptation_text')}</p>

          <p className="regular-text bold">{t('integration_title')}</p>
          <p className="regular-text margin-top">{t('integration_text1')}</p>
          <p className="regular-text">{t('integration_text2')}</p>

          <p className="regular-text bold">{t('direct_title')}</p>
          <p className="regular-text margin-top">{t('direct_text')}</p>

          <p className="regular-text bold">{t('choice_title')}</p>
          <p className="regular-text margin-top">{t('choice_text')}</p>

          <p className="regular-text bold">{t('logistic_title')}</p>
          <p className="regular-text margin-top">{t('logistic_text')}</p>

          <p className="regular-text bold">{t('criteria_title')}</p>
          <p className="regular-text margin-top">{t('criteria_text')}</p>

          <p className="regular-text bold">{t('project_management_title')}</p>
          <p className="regular-text margin-top">{t('project_management_text')}</p>

          <p className="regular-text bold">{t('quality_title')}</p>
          <p className="regular-text margin-top">{t('quality_text')}</p>

          <p className="regular-text bold">{t('conclusion_title')}</p>
          <p className="regular-text margin-top">{t('conclusion_text')}</p>

          <p className="regular-text bold">{t('portfolio_title')}</p>
          <p className="regular-text margin-top">{t('portfolio_text')}</p>

          <p className="regular-text bold">{t('portfolio2_title')}</p>
          <p className="regular-text margin-top">{t('portfolio2_text')}</p>

          <p className="regular-text bold">{t('visualization_title')}</p>
          <p className="regular-text margin-top">{t('visualization_text')}</p>

          <p className="regular-text bold">{t('customized_title')}</p>
          <p className="regular-text margin-top">{t('customized_text')}</p>

          <p className="regular-text bold">{t('transparency_title')}</p>
          <p className="regular-text margin-top">{t('transparency_text')}</p>

          <p className="regular-text bold">{t('adaptation2_title')}</p>
          <p className="regular-text margin-top">{t('adaptation2_text')}</p>

          <p className="regular-text bold">{t('conclusion2_title')}</p>
          <p className="regular-text margin-top">{t('conclusion2_text')}</p>

          <p className="regular-text bold">{t('importance2_title')}</p>
          <p className="regular-text margin-top">{t('importance2_text')}</p>

          <p className="regular-text bold">{t('obtaining_title')}</p>
          <p className="regular-text margin-top">{t('obtaining_text')}</p>

          <p className="regular-text bold">{t('nota_simple_title')}</p>
          <p className="regular-text margin-top">{t('nota_simple_text')}</p>

          <p className="regular-text bold">{t('legal_title')}</p>
          <p className="regular-text margin-top">{t('legal_text')}</p>

          <p className="regular-text bold">{t('transaction_title')}</p>
          <p className="regular-text margin-top">{t('transaction_text')}</p>

          <p className="regular-text bold">{t('conclusion3_title')}</p>
          <p className="regular-text margin-top">{t('conclusion3_text')}</p>
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
export default RepairAndFurnishings;
