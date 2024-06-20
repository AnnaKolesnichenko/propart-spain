import { TFunction } from 'i18next';

export const getTypeOptions = (t: TFunction) => {
  return [
    { value: 'Apartment', label: t('type_options.Apartment') },
    { value: 'Townhouse', label: t('type_options.Townhouse') },
    { value: 'Villa', label: t('type_options.Villa') },
    { value: 'Duplex', label: t('type_options.Duplex') },
    { value: 'Flat', label: t('type_options.Flat') },
    { value: 'Penthouse', label: t('type_options.Penthouse') },
    { value: 'Ground floor', label: t('type_options.Ground floor') },
  ];
};

export const getBedroomOptions = (t: TFunction) => {
  return [
    { value: 'studio', label: t('beds_room') },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
  ];
};

export const priceOptions = [
  { value: 150000, label: '150,000' },
  { value: 250000, label: '250,000' },
  { value: 350000, label: '350,000' },
  { value: 450000, label: '450,000' },
  { value: 550000, label: '550,000' },
  { value: 650000, label: '650,000' },
  { value: 750000, label: '750,000' },
  { value: 850000, label: '850,000' },
  { value: 950000, label: '950,000' },
  { value: 1000000, label: '1,000,000' },
  { value: 1250000, label: '1,250,000' },
  { value: 1500000, label: '1,500,000' },
  { value: 2000000, label: '2,000,000' },
  { value: 2250000, label: '2,250,000' },
  { value: 2500000, label: '2,500,000' },
  { value: 2750000, label: '2,750,000' },
  { value: 3000000, label: '3,000,000' },
  { value: 3250000, label: '3,250,000' },
  { value: 3500000, label: '3,500,000' },
  { value: 4500000, label: '4,500,000' },
  { value: 5000000, label: '5,000,000' },
  { value: 10000000, label: '10,000,000' },
  { value: 15000000, label: '15,000,000' },
  { value: 25000000, label: '25,000,000' },
  { value: 50000000, label: '50,000,000' },
];

export const sizeOptions = [
  { value: 25, label: '25' },
  { value: 35, label: '35' },
  { value: 45, label: '45' },
  { value: 65, label: '65' },
  { value: 85, label: '85' },
  { value: 100, label: '100' },
  { value: 120, label: '120' },
  { value: 150, label: '150' },
  { value: 200, label: '200' },
  { value: 250, label: '250' },
  { value: 300, label: '300' },
  { value: 400, label: '400' },
  { value: 500, label: '500' },
];

export const areasOptions = [
  { value: 'Estepona', label: 'Estepona' },
  { value: 'Marbella', label: 'Marbella' },
  { value: 'Benahvis', label: 'Benahvis' },
  { value: 'Fuengirola', label: 'Fuengirola' },
  { value: 'Mijas', label: 'Mijas' },
  { value: 'Marbella East', label: 'Marbella East' },
  { value: 'Other', label: 'Other' },
  { value: 'New Golden Mile', label: 'New Golden Mile' },
  { value: 'The Golden Mile', label: 'The Golden Mile' },
  { value: 'Atalaya', label: 'Atalaya' },
  { value: 'Los Boliches', label: 'Los Boliches' },
  { value: 'La Cala de Mijas', label: 'La Cala de Mijas' },
  { value: 'Reserva de Marbella', label: 'Reserva de Marbella' },
  { value: 'Coin', label: 'Coin' },
  { value: 'Costalita', label: 'Costalita' },
  { value: 'Puerto Banus', label: 'Puerto Banus' },
  { value: 'Los Almendros', label: 'Los Almendros' },
  { value: 'La Cala Golf', label: 'La Cala Golf' },
  { value: 'Los Monteros', label: 'Los Monteros' },
  { value: 'Istan', label: 'Istan' },
  { value: 'Diana Park', label: 'Diana Park' },
  { value: 'Rio Verde', label: 'Rio Verde' },
  { value: 'El Madroñal', label: 'El Madroñal' },
  { value: 'Mijas Costa', label: 'Mijas Costa' },
  { value: 'Altos de los Monteros', label: 'Altos de los Monteros' },
  { value: 'Ojen', label: 'Ojen' },
  { value: 'El Presidente', label: 'El Presidente' },
  { value: 'Rio Real', label: 'Rio Real' },
  { value: 'El Paraiso', label: 'El Paraiso' },
  { value: 'Mijas Golf', label: 'Mijas Golf' },
  { value: 'Bahia de Marbella', label: 'Bahia de Marbella' },
  { value: 'Gaucin', label: 'Gaucin' },
  { value: 'Selwo', label: 'Selwo' },
  { value: 'Nagueles', label: 'Nagueles' },
  { value: 'La Quinta', label: 'La Quinta' },
  { value: 'El Rosario', label: 'El Rosario' },
  { value: 'Ronda', label: 'Ronda' },
  { value: 'Cancelada', label: 'Cancelada' },
  { value: 'Sierra Blanca', label: 'Sierra Blanca' },
  { value: 'La Zagaleta', label: 'La Zagaleta' },
  { value: 'Elviria', label: 'Elviria' },
  { value: 'Casares', label: 'Casares' },
  { value: 'San Pedro de Alcantara', label: 'San Pedro de Alcantara' },
  { value: 'Los Arqueros', label: 'Los Arqueros' },
  { value: 'La Mairena', label: 'La Mairena' },
  { value: 'Manilva', label: 'Manilva' },
  { value: 'Guadalmina Alta', label: 'Guadalmina Alta' },
  { value: 'Los Flamingos', label: 'Los Flamingos' },
  { value: 'Marbesa', label: 'Marbesa' },
  { value: 'Valle Romano', label: 'Valle Romano' },
  { value: 'Guadalmina Baja', label: 'Guadalmina Baja' },
  { value: 'Monte Halcones', label: 'Monte Halcones' },
  { value: 'Riviera del Sol', label: 'Riviera del Sol' },
  { value: 'El Pilar', label: 'El Pilar' },
  { value: 'Nueva Andalucia', label: 'Nueva Andalucia' },
  { value: 'Las Chapas', label: 'Las Chapas' },
  { value: 'La Duquesa', label: 'La Duquesa' },
  { value: 'El Padron', label: 'El Padron' },
  { value: 'Aloha', label: 'Aloha' },
  { value: 'Cortijo Blanco', label: 'Cortijo Blanco' },
  { value: 'Las Brisas', label: 'Las Brisas' },
  { value: 'La Cerquilla', label: 'La Cerquilla' },
  { value: 'Puerto de Cabopino', label: 'Puerto de Cabopino' },
  { value: 'Calahonda', label: 'Calahonda' },
  { value: 'Cabopino', label: 'Cabopino' },
];









export const bedroomOptions = [
  { value: 'studio', label: 'studio' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
];

import { FilterProjectNameType } from '@/types';
export const projectsNameOptions: FilterProjectNameType[] = [
  {
    id: '65e8a8f00b1178a2d68a2752',
    name: 'Marbella Lake',
    coordinates: [-4.9668502807617, 36.523515901986],
  },
  {
    id: '65e8a8f00b1178a2d68a2753',
    name: 'Albatros XV',
    coordinates: [-4.9711418151855, 36.504685561887],
  },
  {
    id: '65e8a8f00b1178a2d68a2754',
    name: 'Terrazas de Guadaiza',
    coordinates: [-4.9713134765625, 36.499819684589],
  },
  {
    id: '65e8a8f00b1178a2d68a2755',
    name: 'La Cornisa de Río Real Golf',
    coordinates: [-4.88562, 36.508976],
  },
  {
    id: '65e8a8f00b1178a2d68a2756',
    name: 'Marbesa 94',
    coordinates: [-4.7611570358276, 36.490146379793],
  },
  {
    id: '65e8a8f00b1178a2d68a2757',
    name: 'The List Río Real',
    coordinates: [-4.8506355285645, 36.517231009434],
  },
  {
    id: '65e8a8f00b1178a2d68a2758',
    name: 'Marbella Sunset',
    coordinates: [-4.7836875915527, 36.499028667571],
  },
  {
    id: '65e8a8f00b1178a2d68a2759',
    name: 'Dunique',
    coordinates: [-4.8316133022308, 36.50301404721],
  },
  {
    id: '65e8a8f00b1178a2d68a275a',
    name: 'Breeze Marbella',
    coordinates: [-4.9908828735352, 36.485091628308],
  },
  {
    id: '65e8a8f10b1178a2d68a275b',
    name: 'Buena Vista Hills',
    coordinates: [-4.8308944702148, 36.510080774257],
  },
  {
    id: '65e8a8f10b1178a2d68a275c',
    name: 'MedBlue',
    coordinates: [-4.822051967041, 36.523213745008],
  },
  {
    id: '65e8a8f10b1178a2d68a275d',
    name: 'Artola Homes',
    coordinates: [-4.746099, 36.494433],
  },
  {
    id: '65e8a8f10b1178a2d68a275e',
    name: 'Marein Natura',
    coordinates: [-4.9847030639648, 36.513572870632],
  },
  {
    id: '65e8a8f10b1178a2d68a275f',
    name: 'Jazmines 14',
    coordinates: [-4.910888671875, 36.519366905889],
  },
  {
    id: '65e8a8f10b1178a2d68a2760',
    name: 'Las Villas de Rio Real Golf',
    coordinates: [-4.8456573486328, 36.512148335486],
  },
  {
    id: '65e8a8f10b1178a2d68a2761',
    name: 'Terra',
    coordinates: [-4.9865738, 36.4748846],
  },
  {
    id: '65e8a8f10b1178a2d68a2762',
    name: 'Villa Alcala 41',
    coordinates: [-4.9750604, 36.5068914],
  },
  {
    id: '65e8a8f10b1178a2d68a2763',
    name: 'Villa Limon',
    coordinates: [-5.0060236, 36.4704892],
  },
  {
    id: '65e8a8f10b1178a2d68a2764',
    name: 'Golden 7',
    coordinates: [-4.9159141, 36.5104472],
  },
  {
    id: '65e8a8f10b1178a2d68a2765',
    name: 'Black Pearl',
    coordinates: [-4.7632632, 36.4875249],
  },
  {
    id: '65e8a8f10b1178a2d68a2766',
    name: 'Camojan Six',
    coordinates: [-4.9072864, 36.5286445],
  },
  {
    id: '65e8a8f10b1178a2d68a2767',
    name: 'Medblue Los Monteros',
    coordinates: [-4.833742, 36.525323],
  },
  {
    id: '65e8a8f10b1178a2d68a2768',
    name: 'Quintessence',
    coordinates: [-4.843846, 36.524048],
  },
  {
    id: '65e8a8f10b1178a2d68a2769',
    name: 'Lomas del Rey',
    coordinates: [-4.9302434921265, 36.509680043273],
  },
  {
    id: '65e8a8f10b1178a2d68a276a',
    name: 'Moderna villa con vistas',
    coordinates: [-4.88562, 36.508976],
  },
  {
    id: '65e8a8f10b1178a2d68a276b',
    name: 'Epic',
    coordinates: [-4.88562, 36.508976],
  },
  {
    id: '65e8a8f10b1178a2d68a276c',
    name: 'Apartamento con fantásticas vistas al mar',
    coordinates: [-4.88562, 36.508976],
  },
  {
    id: '65e8a8f10b1178a2d68a276d',
    name: 'Aloha Hill Club',
    coordinates: [-4.88562, 36.508976],
  },
  {
    id: '65e8a9f3ec484920c0f4a1a9',
    name: 'Jardines de las Lagunas II',
    coordinates: [-4.6417236328125, 36.543454184264],
  },
  {
    id: '65e8a9f3ec484920c0f4a1aa',
    name: 'Suite Mijas',
    coordinates: [-4.6499633789063, 36.554071667986],
  },
  {
    id: '65e8a9f3ec484920c0f4a1ab',
    name: 'Calanova Collection',
    coordinates: [-4.7118023698585, 36.51356398222],
  },
  {
    id: '65e8a9f3ec484920c0f4a1ac',
    name: 'Myramar Costa',
    coordinates: [-4.6513795852661, 36.512106292735],
  },
  {
    id: '65e8a9f3ec484920c0f4a1ad',
    name: 'Castillo del Cerrado',
    coordinates: [-4.6646443, 36.5301635],
  },
  {
    id: '65e8a9f3ec484920c0f4a1ae',
    name: 'Dream Golf',
    coordinates: [-4.6915054321289, 36.506865436102],
  },
  {
    id: '65e8a9f3ec484920c0f4a1af',
    name: 'One Bali Villas',
    coordinates: [-4.7108396, 36.5112115],
  },
  {
    id: '65e8a9f3ec484920c0f4a1b0',
    name: 'Solaris',
    coordinates: [-4.6719360351563, 36.528688976876],
  },
  {
    id: '65e8a9f3ec484920c0f4a1b1',
    name: 'Solana Village La Cala Golf',
    coordinates: [-4.6992301940918, 36.526703955313],
  },
  {
    id: '65e8a9f4ec484920c0f4a1b2',
    name: 'Oxygen',
    coordinates: [-4.7242069244385, 36.490190579714],
  },
  {
    id: '65e8a9f4ec484920c0f4a1b3',
    name: 'Residencial los Lirios',
    coordinates: [-4.6355438232422, 36.534291726847],
  },
  {
    id: '65e8a9f4ec484920c0f4a1b4',
    name: 'Belaria',
    coordinates: [-4.637519, 36.595747],
  },
  {
    id: '65e8a9f4ec484920c0f4a1b5',
    name: 'Fairways La Cala Golf',
    coordinates: [-4.7292002295459, 36.543214177981],
  },
  {
    id: '65e8a9f4ec484920c0f4a1b6',
    name: 'Mijasol',
    coordinates: [-4.6513710200869, 36.539164221822],
  },
  {
    id: '65e8a9f4ec484920c0f4a1b7',
    name: 'Monterrey Residencial',
    coordinates: [-4.6404542773962, 36.514138783428],
  },
  {
    id: '65e8a9f4ec484920c0f4a1b8',
    name: 'Aalto Riviera',
    coordinates: [-4.6892738342285, 36.527585567386],
  },
  {
    id: '65e8a9f4ec484920c0f4a1b9',
    name: 'Las Farolas Playa',
    coordinates: [-4.6479034423828, 36.508549261449],
  },
  {
    id: '65e8a9f4ec484920c0f4a1ba',
    name: 'Caravelle Residencial',
    coordinates: [-4.6397447, 36.536077],
  },
  {
    id: '65e8a9f4ec484920c0f4a1bb',
    name: 'Villa en Parcela 90',
    coordinates: [-4.6093345, 36.5931996],
  },
  {
    id: '65e8a9f4ec484920c0f4a1bc',
    name: 'Residencial Mijasol',
    coordinates: [-4.6456505, 36.5386984],
  },
  {
    id: '65e8a9f4ec484920c0f4a1bd',
    name: 'Residencial La Cala de Mijas',
    coordinates: [-4.6876141, 36.5310482],
  },
  {
    id: '65e8a9f4ec484920c0f4a1be',
    name: 'Lagoon Residence',
    coordinates: [-4.6381769, 36.5371238],
  },
  {
    id: '65e8a9f4ec484920c0f4a1bf',
    name: 'Edificio Cadiz',
    coordinates: [-4.6312811, 36.5501571],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c0',
    name: 'Los Altos de Campo Mijas',
    coordinates: [-4.6369096, 36.5605238],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c1',
    name: 'IPANEMA',
    coordinates: [-4.637519, 36.595747],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c2',
    name: 'VITANIA II - RESORT',
    coordinates: [-4.6888129, 36.5280946],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c3',
    name: 'Cala Serena Sun',
    coordinates: [-4.68163, 36.51416],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c4',
    name: 'One Residences',
    coordinates: [-4.712233543396, 36.514432544549],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c5',
    name: 'Harmony Apartments',
    coordinates: [-4.6384620666504, 36.592806214031],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c6',
    name: 'Residencial Inbisa',
    coordinates: [-4.637519, 36.595747],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c7',
    name: 'Sun Valley',
    coordinates: [-4.637519, 36.595747],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c8',
    name: 'Aria',
    coordinates: [-4.637519, 36.595747],
  },
  {
    id: '65e8a9f4ec484920c0f4a1c9',
    name: 'El Lagar',
    coordinates: [-4.637519, 36.595747],
  },
  {
    id: '65e8a9f4ec484920c0f4a1ca',
    name: 'Grand View',
    coordinates: [-4.637519, 36.595747],
  },
  {
    id: '65e8aac823962bcead590309',
    name: 'Carat',
    coordinates: [-4.5984649658203, 36.566129098695],
  },
  {
    id: '65e8aac823962bcead59030a',
    name: 'Villas Higueron',
    coordinates: [-4.6000103, 36.5800242],
  },
  {
    id: '65e8aac823962bcead59030b',
    name: 'Higueron Beach Residence',
    coordinates: [-4.5966625213623, 36.573356533958],
  },
  {
    id: '65e8aac823962bcead59030c',
    name: 'El Castaño',
    coordinates: [-4.6025848388672, 36.570355611241],
  },
  {
    id: '65e8aac823962bcead59030d',
    name: 'La Corniche',
    coordinates: [-4.6130561828613, 36.575985346241],
  },
  {
    id: '65e8aac823962bcead59030e',
    name: 'Aura Higueron Fase II',
    coordinates: [-4.6022415161133, 36.57914868478],
  },
  {
    id: '65e8aac823962bcead59030f',
    name: 'Nova Marina',
    coordinates: [-4.6203088760376, 36.541796358081],
  },
  {
    id: '65e8aac823962bcead590310',
    name: 'Pine Hill Residences',
    coordinates: [-4.6049880981445, 36.57680377177],
  },
  {
    id: '65e8aac823962bcead590311',
    name: 'Valley Collection',
    coordinates: [-4.5979499816895, 36.579214934943],
  },
  {
    id: '65e8aac823962bcead590312',
    name: 'Blanca Hills',
    coordinates: [-4.6118545532227, 36.571768168532],
  },
  {
    id: '65e8aac823962bcead590313',
    name: 'Edificio Carmen',
    coordinates: [-4.6278190612793, 36.544137552573],
  },
  {
    id: '65e8aac823962bcead590314',
    name: 'Alto Horizonte',
    coordinates: [-4.6014979, 36.5666324],
  },
  {
    id: '65e8aac923962bcead590315',
    name: 'Med Hills',
    coordinates: [-4.6110224396808, 36.575343181248],
  },
  {
    id: '65e8aac923962bcead590316',
    name: 'Jade Tower',
    coordinates: [-4.6257591247559, 36.532845151982],
  },
  {
    id: '65e8aac923962bcead590317',
    name: 'Core Higueron',
    coordinates: [-4.5987219, 36.582119],
  },
  {
    id: '65e8aac923962bcead590318',
    name: 'Edificio Nácar',
    coordinates: [-4.6256863, 36.5357304],
  },
  {
    id: '65e8aac923962bcead590319',
    name: 'The Kos',
    coordinates: [-4.5973685, 36.5716793],
  },
  {
    id: '65e8aac923962bcead59031a',
    name: 'CARAT SKY VILLAS',
    coordinates: [-4.5927044, 36.571886],
  },
  {
    id: '65e8aac923962bcead59031b',
    name: 'Residencial San Vicente',
    coordinates: [-4.625734, 36.5386754],
  },
  {
    id: '65e8aac923962bcead59031c',
    name: 'Pine Hill Residencial',
    coordinates: [-4.6101303, 36.5749382],
  },
  {
    id: '65e8aac923962bcead59031d',
    name: 'Sunset Views',
    coordinates: [-4.6196812, 36.5682383],
  },
  {
    id: '65e8aac923962bcead59031e',
    name: 'Garden Home',
    coordinates: [-4.61438, 36.56141],
  },
  {
    id: '65e8aac923962bcead59031f',
    name: 'Middel Views III',
    coordinates: [-4.603351594389, 36.56869170125],
  },
  {
    id: '65e8aac923962bcead590320',
    name: 'Maravilloso Ático en pleno centro',
    coordinates: [-4.623335, 36.538778],
  },
  {
    id: '65e8aac923962bcead590321',
    name: 'Higuerón Oeste',
    coordinates: [-4.623335, 36.538778],
  },
  {
    id: '65e8aac923962bcead590322',
    name: 'Monte Paraíso',
    coordinates: [-4.623335, 36.538778],
  },
  {
    id: '65e8aac923962bcead590323',
    name: 'Pareado Moderno Torreblanca',
    coordinates: [-4.623335, 36.538778],
  },
  {
    id: '65e8aac923962bcead590324',
    name: 'Panoramica',
    coordinates: [-4.623335, 36.538778],
  },
  {
    id: '65e8aac923962bcead590325',
    name: 'The Wave Collection',
    coordinates: [-4.623335, 36.538778],
  },
  {
    id: '65e8aac923962bcead590326',
    name: 'Bluewave Torreblanca',
    coordinates: [-4.623335, 36.538778],
  },
  {
    id: '65e8aac923962bcead590327',
    name: 'Middel Views',
    coordinates: [-4.623335, 36.538778],
  },
  {
    id: '65e8aca1f560cbda0f43b2fa',
    name: 'ABY Estepona',
    coordinates: [-5.2164459228516, 36.400164654468],
  },
  {
    id: '65e8aca1f560cbda0f43b2fb',
    name: 'El Duende',
    coordinates: [-5.1754188537598, 36.417837602441],
  },
  {
    id: '65e8aca1f560cbda0f43b2fc',
    name: 'Zaretia Homes Cancelada',
    coordinates: [-5.0562858581543, 36.460079757936],
  },
  {
    id: '65e8aca2f560cbda0f43b2fd',
    name: 'Green Golf',
    coordinates: [-5.2140426635742, 36.409036893643],
  },
  {
    id: '65e8aca2f560cbda0f43b2fe',
    name: 'Sanctuary Villas II',
    coordinates: [-5.0236701965332, 36.47401369436],
  },
  {
    id: '65e8aca2f560cbda0f43b2ff',
    name: 'The Heights',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca2f560cbda0f43b300',
    name: 'Residencial Huerta Hierro',
    coordinates: [-5.1529741287231, 36.432266567203],
  },
  {
    id: '65e8aca2f560cbda0f43b301',
    name: 'Estepona Plaza',
    coordinates: [-5.1564502716064, 36.419609237071],
  },
  {
    id: '65e8aca2f560cbda0f43b302',
    name: 'LIF3',
    coordinates: [-5.16357421875, 36.421873119023],
  },
  {
    id: '65e8aca2f560cbda0f43b303',
    name: 'Cassia Estepona',
    coordinates: [-5.1561069488525, 36.433026096664],
  },
  {
    id: '65e8aca2f560cbda0f43b304',
    name: 'The Edge',
    coordinates: [-5.1893158977135, 36.405510949697],
  },
  {
    id: '65e8aca2f560cbda0f43b305',
    name: 'Alexia Life II',
    coordinates: [-5.1613426208496, 36.421152474269],
  },
  {
    id: '65e8aca2f560cbda0f43b306',
    name: 'Agra Residencial',
    coordinates: [-5.0354895181954, 36.469044123661],
  },
  {
    id: '65e8aca2f560cbda0f43b307',
    name: 'Alexia Life III',
    coordinates: [-5.1627159118652, 36.425843984588],
  },
  {
    id: '65e8aca2f560cbda0f43b308',
    name: 'Azahar de Estepona',
    coordinates: [-5.1880359649658, 36.410928496777],
  },
  {
    id: '65e8aca2f560cbda0f43b309',
    name: 'Ventura Estepona',
    coordinates: [-5.1407861709595, 36.427640181808],
  },
  {
    id: '65e8aca2f560cbda0f43b30a',
    name: 'Alchemist Residences',
    coordinates: [-5.2091073989868, 36.398075272964],
  },
  {
    id: '65e8aca2f560cbda0f43b30b',
    name: 'Mesas Homes II',
    coordinates: [-5.161624, 36.420272],
  },
  {
    id: '65e8aca2f560cbda0f43b30c',
    name: 'Living Estepona',
    coordinates: [-5.15132188797, 36.420031631234],
  },
  {
    id: '65e8aca2f560cbda0f43b30d',
    name: 'Isidora Living',
    coordinates: [-5.1558387279511, 36.421188552389],
  },
  {
    id: '65e8aca2f560cbda0f43b30e',
    name: 'Mesas Homes',
    coordinates: [-5.160672, 36.422662],
  },
  {
    id: '65e8aca2f560cbda0f43b30f',
    name: 'Velaya',
    coordinates: [-5.0878336004704, 36.44815185891],
  },
  {
    id: '65e8aca2f560cbda0f43b310',
    name: 'Darya Estepona',
    coordinates: [-5.149546424507, 36.421301737651],
  },
  {
    id: '65e8aca2f560cbda0f43b311',
    name: 'Mirador del Golf',
    coordinates: [-5.2114677429199, 36.409127049154],
  },
  {
    id: '65e8aca2f560cbda0f43b312',
    name: 'Silk',
    coordinates: [-5.0580024719238, 36.468101783662],
  },
  {
    id: '65e8aca2f560cbda0f43b313',
    name: 'Estepona Gardens',
    coordinates: [-5.1441601, 36.4333363],
  },
  {
    id: '65e8aca2f560cbda0f43b314',
    name: 'Habitat Valle Romano',
    coordinates: [-5.1994839, 36.4331113],
  },
  {
    id: '65e8aca2f560cbda0f43b315',
    name: 'LAGUMARE41',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca2f560cbda0f43b316',
    name: 'Agra Residencial',
    coordinates: [-5.0354895181954, 36.469044123661],
  },
  {
    id: '65e8aca2f560cbda0f43b317',
    name: 'Alexia Life II',
    coordinates: [-5.1613426208496, 36.421152474269],
  },
  {
    id: '65e8aca2f560cbda0f43b318',
    name: 'The Edge',
    coordinates: [-5.1893158977135, 36.405510949697],
  },
  {
    id: '65e8aca2f560cbda0f43b319',
    name: 'Isea Estepona Malaga',
    coordinates: [-5.1929417252541, 36.406740600634],
  },
  {
    id: '65e8aca2f560cbda0f43b31a',
    name: 'South Bay Las Mesas III',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca2f560cbda0f43b31b',
    name: 'Scenic',
    coordinates: [-5.1602041350896, 36.422301886833],
  },
  {
    id: '65e8aca2f560cbda0f43b31c',
    name: 'Mirador de Estepona Hills',
    coordinates: [-5.1510880135789, 36.440477431104],
  },
  {
    id: '65e8aca2f560cbda0f43b31d',
    name: 'Atica Homes',
    coordinates: [-5.156581, 36.432942],
  },
  {
    id: '65e8aca2f560cbda0f43b31e',
    name: 'Oasis Estepona Golf',
    coordinates: [-5.2104377746582, 36.409273528666],
  },
  {
    id: '65e8aca2f560cbda0f43b31f',
    name: 'Villa Eco Modelo Agua',
    coordinates: [-5.1943406, 36.4249313],
  },
  {
    id: '65e8aca2f560cbda0f43b320',
    name: 'Stone Home',
    coordinates: [-5.1944416, 36.4254315],
  },
  {
    id: '65e8aca3f560cbda0f43b321',
    name: 'Green Mountain',
    coordinates: [-5.1525519, 36.4324284],
  },
  {
    id: '65e8aca3f560cbda0f43b322',
    name: 'San Antonio Houses',
    coordinates: [-5.1450777053833, 36.426894564224],
  },
  {
    id: '65e8aca3f560cbda0f43b323',
    name: 'Zenity Indigo',
    coordinates: [-5.1220363807517, 36.4365675895],
  },
  {
    id: '65e8aca3f560cbda0f43b324',
    name: 'El Campanario Hills',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b325',
    name: 'Marqués de Guadalmina',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b326',
    name: 'Apartamento de lujo con diseño moderno',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b327',
    name: 'One80 Residence',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b328',
    name: 'Las Mesas Homes',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b329',
    name: 'Ático de lujo con vistas panorámicas',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b32a',
    name: 'Los Miradores del Sol',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b32b',
    name: 'Apartamento de lujo con jardines exteriores',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b32c',
    name: 'Vanian Green Village',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b32d',
    name: 'Residencia Moderna Las Olas',
    coordinates: [-5.18331, 36.41054],
  },
  {
    id: '65e8aca3f560cbda0f43b32e',
    name: 'Oasis 325',
    coordinates: [-5.0760269165039, 36.469272912279],
  },
  {
    id: '65e8aca3f560cbda0f43b32f',
    name: 'Serenity Views',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b330',
    name: 'Las Olas Estepona',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b331',
    name: 'Apartamento con vistas espectaculares',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b332',
    name: 'Moderno apartamento con vistas al mar',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b333',
    name: 'Apartamento con impresionantes vistas al mar',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b334',
    name: 'Bermuda Beach 510232',
    coordinates: [-5.146848, 36.426807],
  },
  {
    id: '65e8aca3f560cbda0f43b335',
    name: 'Insur Scala',
    coordinates: [-5.1549926, 36.4323604],
  },
  {
    id: '65e8b34814adac92310e4ed3',
    name: 'Be Lagom',
    coordinates: [-5.0361726433039, 36.493129068374],
  },
  {
    id: '65e8b34914adac92310e4ed4',
    name: 'Tiara',
    coordinates: [-4.99891, 36.519922],
  },
  {
    id: '65e8b34914adac92310e4ed5',
    name: 'Olivos Real de la Quinta',
    coordinates: [-5.044107, 36.522274],
  },
  {
    id: '65e8b34914adac92310e4ed6',
    name: 'Botanic',
    coordinates: [-5.044107, 36.522274],
  },
  {
    id: '65e8b34914adac92310e4ed7',
    name: 'Atalaya Hills',
    coordinates: [-5.044107, 36.522274],
  },
  {
    id: '65e8b34914adac92310e4ed8',
    name: 'La Quinta Hills',
    coordinates: [-5.044107, 36.522274],
  },
  {
    id: '65e8b34914adac92310e4ed9',
    name: 'Apartamento de diseño elegante',
    coordinates: [-5.044107, 36.522274],
  },
  {
    id: '65e8b34914adac92310e4eda',
    name: 'Moderno bajo con vistas al campo de golf',
    coordinates: [-5.044107, 36.522274],
  },
  {
    id: '65e8b34914adac92310e4edb',
    name: 'Byu Hills',
    coordinates: [-5.044107, 36.522274],
  },
];
