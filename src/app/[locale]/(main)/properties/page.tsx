import FilterBlockProperties from '@/components/properties-page/FilterBlockProperties/FilterBlockProperties';
import AreasList from '@/components/properties-page/AreasList';
import OffersList from '@/components/properties-page/OffersList';
import HelpForm from '@/components/properties-page/HelpForm';
import { OfferCardT } from '@/components/properties-page/OfferCard/OfferCard';
import { areasData } from '@/constants/areasData';
import './Properties.scss';

const offersData: OfferCardT[] = [
  {
    id: '1',
    beds: [3, 4],
    costPerSquareMeter: 3236,
    currency: 'eur',
    flors: 5,
    price: '725,000', // Temp, make number
    title: 'Oasis 325',
    image: '/assets/images/offers/salvia.jpg',
    location: 'San Pedro Alcantara',
  },
  {
    id: '2',
    beds: [2, 3],
    costPerSquareMeter: 2560,
    currency: 'eur',
    flors: 4,
    price: '348,000',
    title: 'Capri',
    image: '/assets/images/offers/capri.jpg',
    location: 'Estepona, Spain',
  },
  {
    id: '3',
    beds: [2, 3],
    costPerSquareMeter: 3833,
    currency: 'eur',
    flors: 4,
    price: '414,000',
    title: 'Oasis 325',
    image: '/assets/images/offers/oasis.jpg',
    location: 'Marbella, Spain',
  },
  {
    id: '4',
    beds: [4],
    costPerSquareMeter: 4233,
    currency: 'eur',
    flors: 1,
    price: '414,000',
    title: 'Marein Nat',
    image: '/assets/images/offers/mareln.jpg',
    location: 'Estepona',
  },
  {
    id: '6',
    beds: [2],
    costPerSquareMeter: 4259,
    currency: 'eur',
    flors: 1,
    price: '2,100,000',
    title: 'The Edge',
    image: '/assets/images/offers/edge.jpg',
    location: 'Marbella, Spain',
  },
  {
    id: '7',
    beds: [7],
    costPerSquareMeter: 4780,
    currency: 'eur',
    flors: 2,
    price: '7,900,000',
    title: 'Camojan Si',
    image: '/assets/images/offers/camojan.jpg',
    location: 'San Pedro Alcantara',
  },
  {
    id: '8',
    beds: [4, 5, 6],
    costPerSquareMeter: 2727,
    currency: 'eur',
    flors: 2,
    price: '1,890,000',
    title: 'Villas Hig',
    image: '/assets/images/offers/villas.jpg',
    location: 'San Pedro Alcantara',
  },
  {
    id: '9',
    beds: [4, 5],
    costPerSquareMeter: 4233,
    currency: 'eur',
    flors: 1,
    price: '1,200,000',
    title: 'Restaurant',
    image: '/assets/images/offers/rest.jpg',
    location: 'San Pedro Alcantara',
  },
  {
    id: '10',
    beds: [3, 5],
    costPerSquareMeter: 2327,
    currency: 'eur',
    flors: 2,
    price: '845,000',
    title: 'Estrella d',
    image: '/assets/images/offers/estrrela.jpg',
    location: 'San Pedro Alcantara',
  },
  {
    id: '11',
    beds: [4, 5],
    costPerSquareMeter: 4500,
    currency: 'eur',
    flors: 2,
    price: '3,600,000',
    title: 'Las Villas',
    image: '/assets/images/offers/las.jpg',
    location: 'San Pedro Alcantara',
  },
];

const Properties = () => {
  return (
    <>
      <FilterBlockProperties />
      <div className="properties container">
        <OffersList hideButtons={false} offersData={offersData} />
        <AreasList title="Areas in Costa de Sol" areasData={areasData} />
        <HelpForm />
      </div>
    </>
  );
};

export default Properties;
