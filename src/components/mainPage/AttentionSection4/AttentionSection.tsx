import { SquarePeg } from '@/fonts';
import './AttentionSection.scss';
import initTranslations from '@/app/i18n';
import Image from 'next/image';
const AttentionSection = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <section className="attentionSection">
      <div className="content">
        <h2 className="title">{t('attention.title')}</h2>
        <p>{t('attention.description')}</p>
        <div className={`${SquarePeg.className} exclusive`}>Exclusive selection from Pro Part</div>
        <button className="button">{t('attention.button')}</button>
      </div>
      <div className="image">
        <Image src='/main/section4attention/Mockup1.png' fill sizes='100%' alt='sd'/>
      </div>
      <div className="contentMobile">
        <h2 className="titlemobile">{t('attention.title-mob')}</h2>
        <button className="buttonmobile">{t('attention.button-mob')}</button>
      </div>
    </section>
  );
};

export default AttentionSection;
