import React from 'react';
import Amenities from '@/components/Areas/AreasMapAmenities/AreasMapAmenities';
import Sights from '@/components/Areas/Sights/Sights';
import AreaHeader from '@/components/Areas/AreaHeader/AreaHeader';
import './page.scss';

// interface Props {
//   params: { locale: string };
// }

const Areas: React.FC = ({ params: { locale } }: any) => {
  return (
    <div className="areas container">
      <AreaHeader locale={locale} />
      <Amenities locale={locale} />
      <Sights locale={locale} />
    </div>
  );
};

export default Areas;
