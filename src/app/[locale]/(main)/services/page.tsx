import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';

import '../visa/ConsultingPage.scss';

interface Competency {
  title: string;
  description: string;
}


const Services = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-services']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle title={t('pageTitle')} description={t('pageDescription')} url={'services'} />

      <div className="consulting-content">
        <section className="text-content">
          <p className="regular-text">{t('sections.realEstate.title')}</p>

          <h2 className="regular-text">{t('sections.realEstate.competenciesTitle')}</h2>
          <ul className="consulting-list">
            {t('sections.realEstate.competencies', { returnObjects: true }).map(
              (item: Competency, index: number) => (
                <li key={index}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </li>
              )
            )}
          </ul>

          <div className="regular-text">{t('sections.realEstate.commitment')}</div>

          <h2 className="titleH2 underline">{t('sections.taxAdvice.title')}</h2>
          <p className="regular-text">{t('sections.taxAdvice.description')}</p>
          <p className="regular-text">{t('sections.taxAdvice.optimization')}</p>

          <h2 className="regular-text">{t('sections.taxAdvice.servicesTitle')}</h2>
          <ul className="consulting-list ">
            {t('sections.taxAdvice.services', { returnObjects: true }).map(
              (service: string, index: number) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>

          <h3 className="titleH4 underline">{t('sections.companyAdministration.title')}</h3>
          <p className="regular-text">{t('sections.companyAdministration.description')}</p>
          <p className="regular-text">
            {t('sections.companyAdministration.administrativeServices')}
          </p>

          <h3 className="regular-text">{t('sections.companyAdministration.servicesTitle')}</h3>
          <ul className="consulting-list">
            {t('sections.companyAdministration.services', { returnObjects: true }).map(
              (service: Competency, index: number) => (
                <li key={index}>
                  <p>{service.title}</p>
                  <p>{service.description}</p>
                </li>
              )
            )}
          </ul>

          <h3 className="titleH4 underline">{t('sections.laborLaw.title')}</h3>
          <p className="regular-text">{t('sections.laborLaw.description')}</p>

          <p className="regular-text">{t('sections.laborLaw.servicesTitle')}</p>
          <ul className="consulting-list">
            {t('sections.laborLaw.services', { returnObjects: true }).map(
              (service: Competency, index: number) => (
                <li key={index}>
                  <p>{service.title}</p>
                  <p>{service.description}</p>
                </li>
              )
            )}
          </ul>

          <p className="regular-text">{t('sections.bankAccount.title')}</p>
          <h3 className="titleH2">{t('sections.bankAccount.description')}</h3>
          <p className="regular-text">{t('sections.bankAccount.content')}</p>
          <p className="regular-text">{t('sections.bankAccount.difficulty')}</p>

          <p className="regular-text">{t('sections.bankAccount.support')}</p>

          <ul className="consulting-list">
            {t('sections.bankAccount.steps', { returnObjects: true }).map(
              (step: string, index: number) => (
                <li key={index}>{step}</li>
              )
            )}
          </ul>

          <p className="regular-text">{t('sections.bankAccount.note')}</p>
          <p className="regular-text">{t('sections.bankAccount.additionalQuestions')}</p>
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
export default Services;
