import SavedProjectsContainer from '@/components/saved-projects/SavedProjectsContainer';
import { Header } from '@/layout/Header';
import './SavedProjects.scss';
const SavedProjects = async () => {
  return (
    <div className='saved-projects-page'>
      <div className="saved-projects-header">
        <Header />
      </div>
      <SavedProjectsContainer />
    </div>
  );
};

export default SavedProjects;
