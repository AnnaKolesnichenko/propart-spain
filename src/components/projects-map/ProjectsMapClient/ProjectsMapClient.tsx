'use client';
import TopProjects from '@/components/mainPage/TopProjects/TopProjects';
import '@/app/[locale]/projects-map/projects-map.scss';

const ProjectsMapClient = () => {
  return (
    <div className="projects-map__top-projects">
      <TopProjects />
    </div>
  );
};

export default ProjectsMapClient;
