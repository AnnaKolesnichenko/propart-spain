import './Area.scss';
import OffersList from '@/components/properties-page/OffersList';
import ZoomForm from '@/components/mainPage/ZoomForm7/ZoomForm';
import AreasList from '@/components/properties-page/AreasList';
import { areaData, offersData, areasData } from './pageData';
import AreaHead from '@/components/area-page/blocks/head';
import AreaMap from '@/components/area-page/blocks/map';
import AreaAbout from '@/components/area-page/blocks/about';
import AreaRecomendation from '@/components/area-page/blocks/recomendation';
import AreaEntarteiment from '@/components/area-page/blocks/entarteiment';

interface AreaPageProps {
  params: {
    locale: string;
    area: string;
  };
}

const AreaPage = async ({ params }: AreaPageProps) => {
  const { area, locale } = params;
  console.log(locale, area);

  const currentArea = areaData.find(item => item.areaName === 'estepona');

  if (!currentArea) return null; // make message component
  const {
    areaName,
    title,
    slideImages,
    coords: { lat, lng },
    destination,
    market: { economic, trends },
    geographicalInfo,
    aboutLocation,
    recommendation,
    entertainment,
  } = currentArea;

  return (
    <div className="area container">
      <AreaHead
        areaUrl={area}
        lat={lat}
        lng={lng}
        destination={destination}
        slideImages={slideImages}
        title={title}
      />

      <AreaMap
        //
        geographicalInfo={geographicalInfo}
        lat={lat}
        lng={lng}
      />

      <AreaAbout
        //
        aboutLocation={aboutLocation}
        areaName={areaName}
        areaUrl={area}
      />

      <AreaRecomendation
        //
        data={recommendation}
      />

      <AreaEntarteiment
        //
        data={entertainment}
        areaName={areaName}
      />

      <div className="area__properties">
        <h2 className="section-title--projects">Top projects in {title}</h2>
        <OffersList hideButtons={true} offersData={offersData} />
      </div>

      <div className="area__zoom-form">
        <ZoomForm />
      </div>

      <div className="area__market">
        <div className="economic">
          <h3>Geographical and Economic Context</h3>
          <p className="text">{economic}</p>
        </div>
        <div className="trends">
          <h3>Property type and trends</h3>
          <p className="text">{trends}</p>
        </div>
      </div>

      <div className="area__other-areas">
        <AreasList title="Other areas" areasData={areasData} />
      </div>
    </div>
  );
};

export default AreaPage;
