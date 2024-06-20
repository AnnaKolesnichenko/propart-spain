import { useTranslation } from 'react-i18next';

export const CreateNavbarListHome = () => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;

  return [
    {
      href: `/${currentLocale}/`,
      title: t('header.navlink-home'),
    },
    {
      href: `/${currentLocale}/properties`,
      title: t('header.navlink-properties'),
    },
    {
      href: `/${currentLocale}/projects-map`,
      title: t('header.navlink-map'),
    },
    {
      href: `/${currentLocale}/areas`,
      title: t('header.navlink-areas'),
    },
    {
      href: `/${currentLocale}/consulting`,
      title: t('header.navlink-consulting'),
    },
  ];
};

export const CreateNavbarListNotHome = () => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;

  return [
    {
      href: `/${currentLocale}/`,
      title: t('header.navlink-home'),
    },
    {
      href: `/${currentLocale}/properties`,
      title: t('header.navlink-properties'),
    },
    {
      href: `/${currentLocale}/projects-map`,
      title: t('header.navlink-map'),
    },
    {
      href: `/${currentLocale}/areas`,
      title: t('header.navlink-areas'),
    },
    {
      href: `/${currentLocale}/consulting`,
      title: t('header.navlink-consulting'),
    },
    {
      href: `/${currentLocale}/visa`,
      title: t('header.navlink-visa'),
    },
    {
      href: `/${currentLocale}/services`,
      title: t('header.navlink-legal-services'),
    },
  ];
};

export const CreateFooterListProperties = () => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;

  return [
    {
      path: `/${currentLocale}/areas//marbella`,
      title: t('footer.list-properties-1'),
    },
    {
      path: `/${currentLocale}/areas/estepona`,
      title: t('footer.list-properties-2'),
    },
    {
      path: `/${currentLocale}/areas/benahavis`,
      title: t('footer.list-properties-3'),
    },
    {
      path: `/${currentLocale}/areas/fuengirola`,
      title: t('footer.list-properties-4'),
    },
    {
      path: `/${currentLocale}/areas/mijas`,
      title: t('footer.list-properties-5'),
    },
  ];
};

export const CreateFooterListConsulting = () => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;

  return [
    {
      path: `/${currentLocale}/visa`,
      title: t('footer.list-consulting-1'),
    },
    {
      path: `/${currentLocale}/services`,
      title: t('footer.list-consulting-2'),
    },
    {
      path: `/${currentLocale}/insurance`,
      title: t('footer.list-consulting-3'),
    },
    {
      path: `/${currentLocale}/mortgage`,
      title: t('footer.list-consulting-4'),
    },
    {
      path: `/${currentLocale}/nota-simple`,
      title: t('footer.list-consulting-5'),
    },
  ];
};

export const CreateFooterListServices = () => {
  const { t, i18n } = useTranslation('layout');
  const currentLocale = i18n.language;

  return [
    {
      path: `/${currentLocale}/visa`,
      title: t('footer.list-services-1'),
    },
    {
      path: `/${currentLocale}/services`,
      title: t('footer.list-services-2'),
    },
    {
      path: `/${currentLocale}/insurance`,
      title: t('footer.list-services-3'),
    },
    {
      path: `/${currentLocale}/mortgage`,
      title: t('footer.list-services-4'),
    },
    {
      path: `/${currentLocale}/nota-simple`,
      title: t('footer.list-services-5'),
    },
    {
      path: `/${currentLocale}/repairs-and-furnishings`,
      title: t('footer.list-services-6'),
    },
    {
      path: `/${currentLocale}/construction`,
      title: t('footer.list-services-7'),
    },
    {
      path: `/${currentLocale}/digital-nomand`,
      title: t('footer.list-services-8'),
    },
    {
      path: `/${currentLocale}/tourist-license`,
      title: t('footer.list-services-9'),
    },
    {
      path: `/${currentLocale}/student-visa`,
      title: t('footer.list-services-10'),
    },
  ];
};
