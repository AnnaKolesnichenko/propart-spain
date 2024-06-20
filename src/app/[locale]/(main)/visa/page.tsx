import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';
import initTranslations from '@/app/i18n';

import './ConsultingPage.scss';

const Visa = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-visa']);
  return (
    <div className="consulting-page container">
      <ConsultingTitle
        title={t('consultTitle.title')}
        description={t('consultTitle.description')}
        url={'visa'}
      />

      <div className="consulting-content">
        <section className="text-content">
          <h2 className="titleH2">{t('textBlocks.titles.goldenVisa')}</h2>
          <p className="regular-text">{t('textBlocks.paragraphs.goldenVisa')}</p>

          <h2 className="titleH2">{t('textBlocks.titles.rightsHolder')}</h2>
          {t('textBlocks.paragraphs.rights', { returnObjects: true }).map(
            (text: string, index: string) => (
              <div key={index} className="regular-text">
                {text}
              </div>
            )
          )}

          <h3 className="titleH3">{t('textBlocks.titles.obtainingVisa')}</h3>
          {t('textBlocks.paragraphs.obtainingVisa', { returnObjects: true }).map(
            (text: string, index: string) => (
              <div key={index} className="regular-text">
                {text}
              </div>
            )
          )}

          <h3 className="titleH3">{t('textBlocks.titles.investmentAmounts')}</h3>
          {t('textBlocks.paragraphs.investmentAmounts', { returnObjects: true }).map(
            (text: string, index: string) => (
              <p key={index} className="regular-text">
                {text}
              </p>
            )
          )}

          <h3 className="titleH3">{t('textBlocks.titles.residencePermit')}</h3>
          {t('textBlocks.paragraphs.residencePermit', { returnObjects: true }).map(
            (text: string, index: string) => (
              <p key={index} className="regular-text">
                {text}
              </p>
            )
          )}

          <h4 className="regular-text underline">{t('textBlocks.titles.faq')}</h4>
          {t('textBlocks.paragraphs.faq', { returnObjects: true }).map(
            (text: string, index: string) => (
              <p key={index} className="regular-text">
                {text}
              </p>
            )
          )}
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
export default Visa;
