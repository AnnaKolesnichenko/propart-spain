import initTranslations from '@/app/i18n';

export const CreateConstructionFirstTextBlosk = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['consulting-construction']);

  return [
    {
      title1: '',
      title2: '',
      description: t('textBlock1.1.description'),
    },
    {
      title1: t('textBlock1.2.title1'),
      title2: t('textBlock1.2.title2'),
      description: t('textBlock1.2.description'),
    },
    {
      title1: '',
      title2: t('textBlock1.3.title2'),
      description: t('textBlock1.3.description'),
    },
    {
      title1: '',
      title2: t('textBlock1.4.title2'),
      description: t('textBlock1.4.description'),
    },
    {
      title1: '',
      title2: t('textBlock1.5.title2'),
      description: t('textBlock1.5.description'),
    },
    {
      title1: t('textBlock1.6.title1'),
      title2: t('textBlock1.6.title2'),
      description: t('textBlock1.6.description'),
    },
    {
      title1: '',
      title2: t('textBlock1.7.title2'),
      description: t('textBlock1.7.description'),
    },
    {
      title1: t('textBlock1.8.title1'),
      title2: t('textBlock1.8.title2'),
      description: t('textBlock1.8.description'),
    },
    {
      title1: t('textBlock1.9.title1'),
      title2: t('textBlock1.9.title2'),
      description: t('textBlock1.9.description'),
    },
    {
      title1: t('textBlock1.10.title1'),
      title2: t('textBlock1.10.title2'),
      description: t('textBlock1.10.description'),
    },
    {
      title1: t('textBlock1.11.title1'),
      title2: t('textBlock1.11.title2'),
      description: t('textBlock1.11.description'),
    },
    {
      title1: t('textBlock1.12.title1'),
      title2: t('textBlock1.12.title2'),
      description: t('textBlock1.12.description'),
    },
    {
      title1: t('textBlock1.13.title1'),
      title2: t('textBlock1.13.title2'),
      description: t('textBlock1.13.description'),
    },
    {
      title1: t('textBlock1.14.title1'),
      title2: t('textBlock1.14.title2'),
      description: t('textBlock1.14.description'),
    },
    {
      title1: t('textBlock1.15.title1'),
      title2: t('textBlock1.15.title2'),
      description: t('textBlock1.15.description'),
    },
    {
      title1: '',
      title2: t('textBlock1.16.title2'),
      description: t('textBlock1.16.description'),
    },
    {
      title1: t('textBlock1.17.title1'),
      title2: t('textBlock1.17.title2'),
      description: t('textBlock1.17.description'),
    },
    {
      title1: t('textBlock1.18.title1'),
      title2: t('textBlock1.18.title2'),
      description: t('textBlock1.18.description'),
    },
    {
      title1: t('textBlock1.19.title1'),
      title2: t('textBlock1.19.title2'),
      description: t('textBlock1.19.description'),
    },
    {
      title1: t('textBlock1.20.title1'),
      title2: t('textBlock1.20.title2'),
      description: t('textBlock1.20.description'),
    },
    {
      title1: t('textBlock1.21.title1'),
      title2: t('textBlock1.21.title2'),
      description: t('textBlock1.21.description'),
    },
    {
      title1: '',
      title2: t('textBlock1.22.title2'),
      description: t('textBlock1.22.description'),
    },
  ];
};

export const CreateConstructionSecondTextBlosk = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['consulting-construction']);

  return [
    {
      title: t('textBlock2.lists.1.title'),
      list: [
        { item: t('textBlock2.lists.1.item1') },
        { item: t('textBlock2.lists.1.item2') },
        { item: t('textBlock2.lists.1.item3') },
        { item: t('textBlock2.lists.1.item4') },
        { item: '' },
        { item: '' },
      ],
    },
    {
      title: t('textBlock2.lists.2.title'),
      list: [
        { item: t('textBlock2.lists.2.item1') },
        { item: t('textBlock2.lists.2.item2') },
        { item: t('textBlock2.lists.2.item3') },
        { item: t('textBlock2.lists.2.item4') },
        { item: t('textBlock2.lists.2.item5') },
        { item: t('textBlock2.lists.2.item6') },
      ],
    },
    {
      title: t('textBlock2.lists.3.title'),
      list: [
        { item: t('textBlock2.lists.3.item1') },
        { item: t('textBlock2.lists.3.item2') },
        { item: t('textBlock2.lists.3.item3') },
        { item: t('textBlock2.lists.3.item4') },
        { item: t('textBlock2.lists.3.item5') },
        { item: t('textBlock2.lists.3.item6') },
      ],
    },
    {
      title: t('textBlock2.lists.4.title'),
      list: [
        { item: t('textBlock2.lists.4.item1') },
        { item: t('textBlock2.lists.4.item2') },
        { item: t('textBlock2.lists.4.item3') },
        { item: t('textBlock2.lists.4.item4') },
        { item: t('textBlock2.lists.4.item5') },
        { item: t('textBlock2.lists.4.item6') },
      ],
    },
    {
      title: t('textBlock2.lists.5.title'),
      list: [
        { item: t('textBlock2.lists.5.item1') },
        { item: t('textBlock2.lists.5.item2') },
        { item: t('textBlock2.lists.5.item3') },
        { item: t('textBlock2.lists.5.item4') },
        { item: t('textBlock2.lists.5.item5') },
        { item: t('textBlock2.lists.5.item6') },
      ],
    },
  ];
};
