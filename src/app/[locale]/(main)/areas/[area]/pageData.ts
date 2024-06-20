import { OfferCardT } from '@/components/properties-page/OfferCard/OfferCard';

const rec1 = '/assets/images/area/estapona/recomend1.png';
const rec2 = '/assets/images/area/estapona/recomend2.png';
const rec3 = '/assets/images/area/estapona/recomend3.png';
const rec4 = '/assets/images/area/estapona/recomend4.png';

const beachBar4 = '/assets/images/area/estapona/beach4.png';
const beachBar7 = '/assets/images/area/estapona/beach7.png';
const beachBar8 = '/assets/images/area/estapona/beach8.png';
const beachBar9 = '/assets/images/area/estapona/beach9.png';

const estSlide1 = '/assets/images/area/estapona/slide1.png';
const estSlide2 = '/assets/images/area/estapona/slide2.png';
const estSlide3 = '/assets/images/area/estapona/slide3.png';
const estSlide4 = '/assets/images/area/estapona/slide4.jpeg';

// const estUpTo1 = '/assets/images/area/estapona/upTo1.jpeg';
// const estUpTo2 = '/assets/images/area/estapona/upTo2.jpeg';
// const estUpTo3 = '/assets/images/area/estapona/upTo3.png';
// const estUpTo4 = '/assets/images/area/estapona/upTo4.jpeg';
// const estUpTo5 = '/assets/images/area/estapona/upTo5.jpeg';

const MainEstapona = '/assets/images/area/estapona/MaiinEstapona.png';
const MainEstaponas = '/assets/images/area/estapona/MaiinEstaponas.png';

const t = (str: string) => str;

export const areaData = [
  {
    areaName: 'estepona',
    coords: { lat: '36.42764', lng: '-5.14589' },
    title: 'Estepona - Costa de sol',
    prices: ['€500K', '€1.2M', '€1.5M', '€1.7M', '€2M'],
    slideImages: [estSlide1, estSlide2, estSlide3, estSlide4, estSlide3],
    // hoverImages: [estUpTo1, estUpTo2, estUpTo3, estUpTo4, estUpTo5],
    destination: {
      plane: [
        {
          time: '2,55',
          city: 'London, UK',
        },
        {
          time: '10,55',
          city: 'Dubai, UAE',
        },
        {
          time: '9,35',
          city: 'New York, USA',
        },
        {
          time: '1,15',
          city: 'Madrid, ESP',
        },
      ],
      car: [
        {
          time: '55',
          city: 'Malaga, ESP',
        },
        {
          time: '2,40',
          city: 'Sevilla, ESP',
        },
      ],
    },
    geographicalInfo: [
      'Estepona, a charming town located on the Costa del Sol in the province of Malaga, Spain, is a hidden gem that beautifully balances tradition with modernity.',
      'Known for its captivating old town, stunning beaches, and vibrant cultural scene, Estepona has become an increasingly popular destination for both tourists and expatriates seeking the authentic Spanish lifestyle.',
      'You can explore the traditional whitewashed houses, adorned with colorful geraniums, and discover hidden squares where locals gather. The old town retains its Andalusian charm, with inviting tapas bars, boutique shops, and art galleries.',
      'Esteponas allure extends beyond its historic charm and coastal beauty. The town boasts modern amenities and infrastructure, including world-class golf courses, marinas, and luxury resorts, making it an ideal destination for those seeking a harmonious blend of tradition and sophistication.',
      'Nestled between the Mediterranean Sea and the Sierra Bermeja mountains, Estepona offers a diverse range of outdoor activities, from water sports and hiking to cycling and horseback riding, providing endless opportunities for adventure and exploration.',
    ],
    aboutLocation: {
      gallery: [MainEstapona, MainEstaponas],
      paragraphs: [
        'Golfing fans are in for a treat since there are no less than eight golf courses in Estepona. These include the established El Paraiso Golf Club and Estepona Golf plus the up-and-coming Valle Romano course. Estepona is also within easy reach of the many. golf courses in Marbella and Benahavis, and just a short drive from the world-famous Valderrama Golf, host of the Ryder Cup.',
        'And Finca Cortesin Golf is just a 10-minute drive to the west of Estepona, famous for being host to the Volvo World Match Play Championship in recent years.',
        'Estepona also offers a range of water sports including sailing, jet ski-ing and scuba diving. Many of these activities are based at Estepona Marina.',
        'For those seeking a golfing experience beyond Estepona, the towns proximity to Marbella, Benahavis, and the renowned Valderrama Golf course opens up a world of possibilities for avid golfers looking to explore different courses and challenges.',
        'In addition to traditional water sports, Esteponas coastline offers opportunities for more adventurous activities such parasailing, kite surfing, and paddleboarding, providing excitement and thrills for water sports enthusiasts of all levels.',
      ],
    },
    recommendation: [
      {
        title: 'El Paraiso Golf Club',
        subTitle: '7:00 AM - 7:30 PM',
        photo: rec1,
      },
      {
        title: 'Atalaya Golf Club',
        subTitle: '8:00 AM - 8:00 PM',
        photo: rec2,
      },
      {
        title: 'Valle Romano Golf Club',
        subTitle: '8:00 AM - 8:30 PM',
        photo: rec3,
      },
      {
        title: 'Estepona Golf Club',
        subTitle: '8:00 AM - 7:00 PM',
        photo: rec4,
      },
    ],
    entertainment: [
      {
        title: 'La Rada and El Cristo Beach',
        photo: beachBar8,
        modalText:
          'The beaches of Nueva Andalucía offer a serene escape from the bustling atmosphere of Puerto Banús. With golden sands and calm waters, Playa Nueva Andalucía is perfect for sunbathing and swimming. Visitors can enjoy amenities such as beachfront restaurants and water sports facilities.Beyond sunbathing and swimming, Playa Nueva Andalucía provides a range of activities for the adventurous spirit. Visitors can indulge in paddleboarding, jet skiing, and parasailing, experiencing the thrill of water sports against the stunning coastal backdrop.For those seeking a more relaxed experience, the beach offers luxurious sun loungers and private cabanas where visitors can unwind with a refreshing cocktail in hand while soaking up the Mediterranean sun.The beachfront promenade is lined with an array of restaurants, cafes, and bars, serving delicious local and international cuisine. From freshly grilled seafood to artisanal gelato, theres something to tantalize every taste bud.Families will appreciate the designated play areas and the calm, shallow waters, providing a safe and enjoyable environment for children to splash around and build sandcastles.As the sun sets, Playa Nueva Andalucía transforms into a lively social hub. Beach clubs host live music events and themed parties, offering visitors the chance to dance the night away under the stars, making it a memorable seaside destination for all.',
      },
      {
        title: 'El Saladillo Beach',
        photo: beachBar9,
        modalText:
          'It invites visitors into a tranquil haven characterized by its pristine sands and the soothing melody of the Mediterranean waves. Unassuming and less crowded than some of its counterparts, El Saladillo exudes a sense of natural serenity. The expansive shoreline, adorned with occasional dunes and vegetation, offers a laid-back setting for sun-seekers to unwind.A mix of locals and discerning tourists frequent this beach, drawn to its relaxed ambiance and the simplicity of coastal beauty. El Saladillo encapsulates the essence of a peaceful retreat, providing a respite from the bustling world and allowing visitors to immerse themselves in the unhurried charm of Esteponas coastal treasures.El Saladillo Beachs unspoiled beauty and tranquil atmosphere make it an ideal spot for activities such as beachcombing, shell collecting, and peaceful walks along the shore, allowing visitors to connect with nature and unwind amidst the coastal scenery.In addition to its natural charm, El Saladillo Beach offers convenient amenities such as beach bars and chiringuitos, where visitors can enjoy refreshing drinks and local delicacies while taking in the breathtaking views of the Mediterranean Sea.',
      },
      {
        title: ' Purobeach',
        photo: beachBar7,
        modalText:
          'This exclusive beach club, known for its chic design and upscale ambiance, offers a fusion of relaxation and sophistication. With a pristine pool overlooking the sea, stylish cabanas, and a trendy lounge area, Purobeach provides an oasis of serenity.The Mediterranean-inspired cuisine and crafted cocktails add to the allure, making it a haven for those who appreciate a refined and cosmopolitan beach experience. Purobeach stands as a symbol of contemporary luxury, inviting guests to unwind in style against the breathtaking backdrop of the Costa del Sol.Purobeach also offers a range of wellness services, including yoga sessions, massage treatments, and beachfront meditation classes, providing guests with opportunities for relaxation and rejuvenation amidst the luxurious surroundings.In the evenings, Purobeach transforms into a lively entertainment venue, with live music performances, DJ sets, and themed events, creating a vibrant atmosphere for guests to enjoy cocktails and socialize while watching the sunset over the Costa del Sol.',
      },
      {
        title: 'Nueva Andalucia Beach',
        photo: beachBar4,
        modalText:
          'Nueva Andalucia Beach offers a peaceful retreat with unspoiled views of the Mediterranean Sea. Visitors can relish the serene atmosphere while having convenient access to the amenities and services available in the nearby Nueva Andalucia district.The beach provides an idyllic setting for those seeking a more secluded and intimate beach experience away from the bustling crowds.Nueva Andalucia Beach is also popular among nature lovers and photographers, who appreciate its unspoiled beauty and stunning sunsets over the Mediterranean horizon, creating memorable moments against the backdrop of the serene sea.In addition to its tranquility, Nueva Andalucia Beach offers opportunities for recreational activities such as beach volleyball, paddleboarding, and picnicking, catering to visitors looking for both relaxation and outdoor fun.',
      },
    ],
    market: {
      economic: `Marbella is situated in 
          the province of Malaga and is 
          renowned for its upscale amenities, 
          including golf courses, luxury resorts, a
          nd a vibrant cultural scene. 
          The citys economy is heavily reliant on tourism, with a 
          significant influx of visitors seeking the high-end lifestyle that 
          Marbella offers. Marbellas strategic location on the Costa del Sol not only 
          provides stunning coastal views but also facilitates easy access to nearby attractions such 
          as Gibraltar and Morocco, contributing to its appeal as a hub for international travelers. 
          In addition to tourism, Marbellas economy benefits from a thriving real estate sector, 
          with luxury properties and developments attracting investors from around the world, 
          further solidifying its status as a premier destination for luxury living.`,

      trends: `The Marbella real estate market is diverse, 
        offering a range of properties such as beachfront villas, 
        apartments, and golf course residences. Over the past few years, 
        there has been a growing trend towards sustainable and eco-friendly developments, 
        reflecting a global shift towards more environmentally conscious living. 
        In addition to traditional property types, 
        Marbellas real estate market also features innovative architectural designs, 
        such as contemporary villas with eco-friendly features like solar panels, 
        rainwater harvesting systems, and energy-efficient materials. 
        The growing demand for sustainable and eco-friendly properties in 
        Marbella reflects a broader societal awareness of environmental issues and a desire among 
        buyers to invest in properties that align with their values of sustainability and 
        responsible living.
      `,
    },
  },
];
export const areasData = [
  {
    image: '/assets/images/areas/Fuengirola.png',
    infoText:
      'A picturesque town by the sea with beautiful beaches, a water park and many restaurants.',
    title: 'Fuengirola',
    userChoise: true,
    url: 'fuengirola',
  },
  {
    image: '/assets/images/areas/estepona.png',
    infoText: 'A beautiful city on the coast with cozy beaches and an old historical center.',
    title: 'Estepona',
    userChoise: false,
    url: 'estepona',
  },
  {
    image: '/assets/images/areas/benahvis.png',
    infoText:
      'A small town known for its historical monuments, local restaurants and beautiful mountain scenery.',
    title: 'Benahvis',
    userChoise: false,
    url: 'benahvis',
  },
];
export const offersData: OfferCardT[] = [
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
];
