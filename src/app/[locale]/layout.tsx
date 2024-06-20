/* eslint-disable @next/next/no-sync-scripts */
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';

import { ReactNode } from 'react';

import { roboto } from '@/fonts';
import { dir } from 'i18next';

import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
// @ts-ignore
import i18nConfig from '../../i18nConfig';
import '../../styles/global.scss';

interface LayoutProps {
  params: { locale: string };
  children: ReactNode;
}
//To generate static routes for a given set of locales
export function generateStaticParams() {
  return i18nConfig.locales.map((locale: string) => ({ locale }));
}

const i18nNamespaces = [
  'home',
  'common',
  'layout',
  'area',
  'project-card',
  'consulting',
  'map-filters',
  'projects-map',
  'saved-projects',
  'consulting-visa',
  'consulting-mortgage',
  'consulting-services',
  'consulting-insurance',
  'consulting-nota-simple',
  'consulting-stydent-visa',
  'consulting-digital-nomand',
  'consulting-tourist-license',
  'consulting-consierge-services',
  'consulting-repairs-and-furnishings',
];

const RootLayout = async ({ params: { locale }, children }: LayoutProps) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang="en" dir={dir(locale)}>
      <body className={roboto.className}>
        <TranslationsProvider locale={locale} namespaces={i18nNamespaces} resources={resources}>
          <CustomProvider>{children}</CustomProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
