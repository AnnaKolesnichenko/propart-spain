import { useTranslation } from 'react-i18next';

export const CreateBtns = () => {
  const { t } = useTranslation('consulting');

  return [
    {
      title: t('btn1'),
    },
    {
      title: t('btn2'),
    },
    {
      title: t('btn3'),
    },
    {
      title: t('btn4'),
    },
    {
      title: t('btn5'),
    },
    {
      title: t('btn6'),
    },
  ];
};

export const CreateListInfo = () => {
  const { t } = useTranslation('consulting');

  return [
    {
      title: t('list-info-title1'),
      hrefTitle: 'visa',
      subtitle1: t('list-info-1subtitle1'),
      subtitle2: t('list-info-2subtitle1'),
      services: t('services'),
      servicesLink1: t('services-student-visa'),
      servicesLinkHref1: 'student-visa',
      servicesLink2: t('services-concierge'),
      servicesLinkHref2: 'consierge-services',
      servicesLink3: t('services-digital-nomad-visa'),
      servicesLinkHref3: 'digital-nomand',
      btnTitle: t('btn-title'),
      btn1: t('btn-title1'),
      hrefBtn1: 'area/marbella',
      hrefBtn2: 'area/benahavis',
      btn2: t('btn-title2'),
      img: '/images/consulting/visa.jpg',
      alt: 'image visa',
      imgDescription: t('img-description1'),
      imgLink: t('img-link'),
    },
    {
      title: t('list-info-title2'),
      hrefTitle: 'services',
      subtitle1: t('list-info-1subtitle2'),
      subtitle2: t('list-info-2subtitle2'),
      services: t('services'),
      servicesLink1: t('services-student-visa'),
      servicesLinkHref1: 'student-visa',
      servicesLink2: t('services-concierge'),
      servicesLinkHref2: 'consierge-services',
      servicesLink3: t('services-mortgage'),
      servicesLinkHref3: 'mortgage',
      btnTitle: t('btn-title'),
      btn1: t('btn-title1'),
      hrefBtn1: 'area/marbella',
      hrefBtn2: 'area/benahavis',
      btn2: t('btn-title2'),
      img: '/images/consulting/LegalServices.jpg',
      alt: 'image legal services',
      imgDescription: t('img-description1'),
      imgLink: t('img-link'),
    },
    {
      title: t('list-info-title3'),
      hrefTitle: 'insurance',
      subtitle1: t('list-info-1subtitle3'),
      subtitle2: t('list-info-2subtitle3'),
      services: t('services'),
      servicesLink1: t('services-student-visa'),
      servicesLinkHref1: 'student-visa',
      servicesLink2: t('services-visa'),
      servicesLinkHref2: 'visa',
      servicesLink3: t('services-tourist-license'),
      servicesLinkHref3: 'tourist-license',
      btnTitle: t('btn-title'),
      btn1: t('btn-title1'),
      hrefBtn1: 'area/marbella',
      hrefBtn2: 'area/benahavis',
      btn2: t('btn-title2'),
      img: '/images/consulting/Insurance.jpeg',
      alt: 'image insurance',
      imgDescription: t('img-description2'),
      imgLink: t('img-link'),
    },
    {
      title: t('list-info-title4'),
      hrefTitle: 'student-visa',
      subtitle1: t('list-info-1subtitle4'),
      subtitle2: t('list-info-2subtitle4'),
      services: t('services'),
      servicesLink1: t('services-repairs-and-furnishings'),
      servicesLinkHref1: 'repairs-and-furnishings',
      servicesLink2: t('services-visa'),
      servicesLinkHref2: 'visa',
      servicesLink3: t('services-digital-nomad-visa'),
      servicesLinkHref3: 'digital-nomand',
      btnTitle: t('btn-title'),
      btn1: t('btn-title1'),
      hrefBtn1: 'area/marbella',
      hrefBtn2: 'area/benahavis',
      btn2: t('btn-title2'),
      img: '/images/consulting/student-visa.jpeg',
      alt: 'image student visa',
      imgDescription: t('img-description2'),
      imgLink: t('img-link'),
    },
    {
      title: t('list-info-title5'),
      hrefTitle: 'construction',
      subtitle1: t('list-info-1subtitle5'),
      subtitle2: t('list-info-2subtitle5'),
      services: t('services'),
      servicesLink1: t('services-insurance'),
      servicesLinkHref1: 'insurance',
      servicesLink2: t('services-repairs-and-furnishings'),
      servicesLinkHref2: 'repairs-and-furnishings',
      servicesLink3: t('services-legal-services'),
      servicesLinkHref3: 'services',
      btnTitle: t('btn-title'),
      btn1: t('btn-title1'),
      hrefBtn1: 'area/marbella',
      hrefBtn2: 'area/benahavis',
      btn2: t('btn-title2'),
      img: '/images/consulting/Construction.jpeg',
      alt: 'image construction',
      imgDescription: t('img-description5'),
      imgLink: t('img-link'),
    },
    {
      title: t('list-info-title6'),
      hrefTitle: 'mortgage',
      subtitle1: t('list-info-1subtitle6'),
      subtitle2: t('list-info-2subtitle6'),
      services: t('services'),
      servicesLink1: t('services-tourist-license'),
      servicesLinkHref1: 'tourist-license',
      servicesLink2: t('services-consierge-services'),
      servicesLinkHref2: 'consierge-services',
      servicesLink3: '',
      servicesLinkHref3: '',
      btnTitle: t('btn-title'),
      btn1: t('btn-title1'),
      hrefBtn1: 'area/marbella',
      hrefBtn2: 'area/benahavis',
      btn2: t('btn-title2'),
      img: '/images/consulting/Mortgage.jpg',
      alt: 'image mortgage',
      imgDescription: t('img-description6'),
      imgLink: t('img-link'),
    },
  ];
};

export const CreateListPartners = () => {
  const { t } = useTranslation('consulting');

  return [
    {
      svg: '/icons/consulting/partners1.svg',
      description: t('list-partners1'),
    },
    {
      svg: '/icons/consulting/partners2.svg',
      description: t('list-partners2'),
    },
    {
      svg: '/icons/consulting/partners3.svg',
      description: t('list-partners3'),
    },
    {
      svg: '/icons/consulting/partners4.svg',
      description: t('list-partners4'),
    },
    {
      svg: '/icons/consulting/partners5.svg',
      description: t('list-partners5'),
    },
    {
      svg: '/icons/consulting/partners6.svg',
      description: t('list-partners6'),
    },
  ];
};


export const CreateListLinks = () => {
  const { t } = useTranslation('consulting');

  return [
    {
      href: 'visa',
      svg: '/icons/consulting/link1.svg',
      title: t('list-links1'),
    },
    {
      href: 'services',
      svg: '/icons/consulting/link2.svg',
      title: t('list-links2'),
    },
    {
      href: 'insurance',
      svg: '/icons/consulting/link3.svg',
      title: t('list-links3'),
    },
    {
      href: 'repairs-and-furnishings',
      svg: '/icons/consulting/link4.svg',
      title: t('list-links4'),
    },
    {
      href: 'nota-simple',
      svg: '/icons/consulting/link5.svg',
      title: t('list-links5'),
    },
    {
      href: 'tourist-license',
      svg: '/icons/consulting/link6.svg',
      title: t('list-links6'),
    },
    {
      href: 'consierge-services',
      svg: '/icons/consulting/link7.svg',
      title: t('list-links7'),
    },
    {
      href: 'mortgage',
      svg: '/icons/consulting/link7.svg',
      title: t('list-links8'),
    },
    {
      href: 'student-visa',
      svg: '/icons/consulting/link8.svg',
      title: t('list-links9'),
    },
    {
      href: 'digital-nomand',
      svg: '/icons/consulting/link9.svg',
      title: t('list-links10'),
    },
  ];
};
