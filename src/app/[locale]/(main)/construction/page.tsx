import { ConstructionContent } from '@/components/consultingPage/ConstructionContent';
import ConsultingSlider from '@/components/consultingPage/ConsultingSlider/ConsultingSlider';
import ConsultingTitle from '@/components/consultingPage/ConsultingTitle/ConsultingTitle';
import ListLinksClient from '@/components/consultingPage/ListLincsClient';

import initTranslations from '@/app/i18n';

import '@/app/[locale]/(main)/visa/ConsultingPage.scss';

const Construction = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['consulting-construction']);

  return (
    <div className="consulting-page container">
      <ConsultingTitle
        title={t('consultTitle.title')}
        description={t('consultTitle.description')}
        url={'construction'}
      />
      <div className="consulting-content">
        <ConstructionContent locale={locale} />
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

export default Construction;
