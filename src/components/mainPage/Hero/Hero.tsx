import initTranslations from '@/app/i18n';
import './Hero.scss';
import HeroFilter from './HeroFilter/HeroFilter';
import HeroSwiper from './HeroSwiper/HeroSwiper';

const Hero = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['home']);

  return (
    <section className="hero">
      <HeroSwiper />
      <div className="hero-content">
        <h1 className="hero-content__title">{t('hero.h1')}</h1>
        <p className="hero-content__description">{t('hero.description')}</p>
      </div>
      <HeroFilter />
    </section>
  );
};
export default Hero;
