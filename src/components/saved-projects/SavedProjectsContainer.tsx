'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SelectedSwiperCardTypes } from '@/types';
import SelectedSwiperCard from '../mainPage/SelectedSwiper9/SelectedSwiperCard/SelectedSwiperCard';
import '../../app/[locale]/saved-projects/SavedProjects.scss';
import SavedProjectsForm from './SavedProjectsForm/SavedProjectsForm';
import { useTranslation } from 'react-i18next';

const SavedProjectsContainer = () => {
  const { t } = useTranslation('saved-projects');

  const [savedProjects, setSavedProjects] = useState<SelectedSwiperCardTypes[]>([]);
  useEffect(() => {
    const savedData = localStorage.getItem('selected');
    if (savedData) {
      setSavedProjects(JSON.parse(savedData));
    }
  }, []);
  const savedProjectsId = savedProjects.map(project => project.id);
  //видалення проекта
  const handleRemoveProject = (id: number) => {
    const updatedProjects = savedProjects.filter(project => project.id !== id);
    setSavedProjects(updatedProjects);
    localStorage.setItem('selected', JSON.stringify(updatedProjects));
  };
  //видалення всіх проектів
  const clearLocalStorage = () => {
    const savedData = localStorage.getItem('selected');
    if (savedData) {
      localStorage.removeItem('selected');
      setSavedProjects([]);
    }
  };
  return (
    <main className="saved-projects-container container">
      <Link href="/properties" className="saved-projects-back-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
        >
          <path
            d="M8 2L1.70711 8.29289C1.31658 8.68342 1.31658 9.31658 1.70711 9.70711L8 16"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
          ></path>
        </svg>
      </Link>
      <div className="saved-projects-container-head">
        <h1 className="saved-projects-title">{t('title')}</h1>
        <p className="saved-projects-description">{t('description')}</p>
        <button onClick={clearLocalStorage} className="saved-projects-clear-all">
          {t('clear-all')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.8042 8.62021C9.47726 8.29326 8.94716 8.29326 8.62021 8.62021C8.29326 8.94717 8.29326 9.47726 8.62021 9.80419L10.8189 12.0029L8.62023 14.2017C8.29329 14.5285 8.29329 15.0586 8.62023 15.3856C8.94718 15.7125 9.47728 15.7125 9.8042 15.3856L12.0029 13.187L14.2016 15.3856C14.5285 15.7125 15.0586 15.7125 15.3856 15.3856C15.7126 15.0586 15.7126 14.5285 15.3856 14.2015L13.1869 12.0029L15.3856 9.80419C15.7126 9.47728 15.7126 8.94719 15.3856 8.62024C15.0586 8.29329 14.5285 8.29329 14.2016 8.62024L12.0029 10.8189L9.8042 8.62021Z"
              fill="#FF5959"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6275 5.37258 24 12 24C18.6275 24 24 18.6275 24 12C24 5.37258 18.6275 0 12 0ZM1.67442 12C1.67442 6.29734 6.29734 1.67442 12 1.67442C17.7026 1.67442 22.3256 6.29734 22.3256 12C22.3256 17.7026 17.7026 22.3256 12 22.3256C6.29734 22.3256 1.67442 17.7026 1.67442 12Z"
              fill="#FF5959"
            ></path>
          </svg>
        </button>
      </div>
      <div className="saved-projects-container-block">
        <section className="saved-list">
          {savedProjects && Array.isArray(savedProjects) && savedProjects.length > 0 ? (
            savedProjects.map((slide, i) => (
              <div className="selected-card" key={i}>
                <SelectedSwiperCard cardData={slide} />
                <button className="remove-button" onClick={() => handleRemoveProject(slide.id)}>
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.2334 10.0206V15.4301C20.2334 18.7847 20.2334 20.462 19.4381 21.1949C19.0588 21.5445 18.5801 21.764 18.0701 21.8224C17.0007 21.9448 15.752 20.8403 13.2544 18.6312C12.1504 17.6548 11.5984 17.1665 10.9597 17.0379C10.6453 16.9746 10.3215 16.9746 10.0071 17.0379C9.36841 17.1665 8.81639 17.6548 7.71241 18.6312C5.21484 20.8403 3.96609 21.9448 2.89672 21.8224C2.38672 21.764 1.90796 21.5445 1.52868 21.1949C0.733399 20.462 0.733398 18.7847 0.733398 15.4301V10.0206C0.733398 5.37459 0.733399 3.05157 2.16125 1.60825C3.58911 0.164917 5.88721 0.164917 10.4834 0.164917C15.0796 0.164917 17.3777 0.164917 18.8055 1.60825C20.2334 3.05157 20.2334 5.37459 20.2334 10.0206ZM6.4209 4.49826C6.4209 4.04952 6.78469 3.68576 7.2334 3.68576H13.7334C14.1821 3.68576 14.5459 4.04952 14.5459 4.49826C14.5459 4.94696 14.1821 5.31076 13.7334 5.31076H7.2334C6.78469 5.31076 6.4209 4.94696 6.4209 4.49826Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className='saved-projects-no-selected'>{t('no-selected')}</p>
          )}
        </section>
        <div className="form">
          <h2 className="title">{t('form-title')}</h2>
          <SavedProjectsForm savedProjectsId={savedProjectsId} />
        </div>
      </div>
    </main>
  );
};

export default SavedProjectsContainer;
