'use client';

import { useEffect, useState } from 'react';

import { DynamicConsultingContent } from '@/components/consultingPage/DynamicConsultingContent';
import { HeaderConsulting } from '@/components/consultingPage/HeaderConsulting';
import { ListLinks } from '@/components/consultingPage/ListLinks';
import { ListPartners } from '@/components/consultingPage/ListPartners';

import './MainConsulting.scss';

export const MainConsulting = () => {
  const [isActiveItem, setIsActiveItem] = useState<number>(0);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  const handleBtnClick = (index: number) => {
    setIsActiveItem(index);
    localStorage.setItem('activeItem', index.toString());
  };

  useEffect(() => {
    const savedIndex = localStorage.getItem('activeItem');
    if (savedIndex !== null) {
      setIsActiveItem(parseInt(savedIndex));
    }
  }, []);

  useEffect(() => {
    const handleResizeTablet = () => {
      const isTabletView = window.innerWidth < 1024;
      setIsTablet(isTabletView);
    };
    handleResizeTablet();

    window.addEventListener('resize', handleResizeTablet);

    return () => {
      window.removeEventListener('resize', handleResizeTablet);
    };
  }, []);

  return (
    <>
      <HeaderConsulting
        handleBtnClick={handleBtnClick}
        isActiveItem={isActiveItem}
        isTablet={isTablet}
      />
      <DynamicConsultingContent isActiveItem={isActiveItem} />
      <ListPartners />
      <ListLinks />
    </>
  );
};
