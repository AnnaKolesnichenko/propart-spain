import Hero from '@/components/mainPage/Hero/Hero';
import TopProjects from '@/components/mainPage/TopProjects/TopProjects';
import AreasSwiper from '@/components/mainPage/AreasSwiper3/AreasSwiper';
import AttentionSection from '@/components/mainPage/AttentionSection4/AttentionSection';
import OurServices from '@/components/mainPage/OurServices5/OurServices';
import Projects from '@/components/mainPage/Projects6/Projects';
import ZoomForm from '@/components/mainPage/ZoomForm7/ZoomForm';
import MainMap from '@/components/mainPage/MainMap8/MainMap';
import Requirements from '@/components/mainPage/Requirements10/Requirements';
import RequirementsList from '@/components/mainPage/RequirementsList11/RequirementsList';
import SelectedSwiper from '@/components/mainPage/SelectedSwiper9/SelectedSwiper';

export default async function Home({ params: { locale } }: any) {

  return (
    <>
      <Hero locale={locale} />
      <TopProjects />
      <div className="reverce-phone container">
        <AreasSwiper />
        <AttentionSection locale={locale} />
      </div>
      <OurServices locale={locale} />
      <Projects locale={locale} />
      <ZoomForm />
      <MainMap/>
      <SelectedSwiper />
      <Requirements locale={locale} />
      <RequirementsList locale={locale} />
    </>
  );
}
