import ProjectsMapContainer from '@/components/projects-map/ProjectsMapContainer/ProjectsMapContainer';
import TopProjects from '@/components/mainPage/TopProjects/TopProjects';
import Sights from '@/components/Areas/Sights/Sights';
import initTranslations from '@/app/i18n';
import './projects-map.scss';

const ProjectsMap = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['projects-map']);
  return (
    <>
      <ProjectsMapContainer />
      <div className="projects-map__top-projects">
        <TopProjects />
      </div>
      <div className="projects-map__areas container">
        <h2 className="map-areas-title">{t('map-areas-title')}</h2>
        <Sights locale={locale} />
      </div>
    </>
  );
};

export default ProjectsMap;

/*
import ProjectsMapContainer from '@/components/projects-map/ProjectsMapContainer/ProjectsMapContainer';
import TopProjects from '@/components/mainPage/TopProjects/TopProjects';
import Sights from '@/components/Areas/Sights/Sights';
import initTranslations from '@/app/i18n';
import './projects-map.scss';




export const getServerSideProps = async ({ query, params: { locale } }: any) => {
  const { searchParams, selectedRadio, selectedType, selectedBeds, selectedPrice, selectedSize, selectedArea } = query;

  // Ініціалізація перекладів
  const { t } = await initTranslations(locale, ['projects-map']);

  // Виконання запиту з урахуванням параметрів
  const res = await fetch(`http://localhost:3000/api/projects?searchParams=${searchParams}&selectedRadio=${selectedRadio}&selectedType=${selectedType}&selectedBeds=${selectedBeds}&selectedPrice=${selectedPrice}&selectedSize=${selectedSize}&selectedArea=${selectedArea}`);
  const data = await res.json();

  // Передача даних та перекладів у пропси
  return {
    props: {
      data,
      t,
      locale,
      query,
    },
  };
};




const ProjectsMap = async ({ params: { locale } }: any) => {
  const { t } = await initTranslations(locale, ['projects-map']);
  return (
    <>
      <ProjectsMapContainer />
      <div className="projects-map__top-projects">
        <TopProjects />
      </div>
      <div className="projects-map__areas container">
        <h2 className="map-areas-title">{t('map-areas-title')}</h2>
        <Sights locale={locale} />
      </div>
    </>
  );
};

export default ProjectsMap;



*/
