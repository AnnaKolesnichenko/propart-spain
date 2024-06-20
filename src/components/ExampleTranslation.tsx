'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {};

const ExampleTranslation = (props: Props) => {
  const { t } = useTranslation();
  const variable = 'FOO';
  return <div>{t('example', { variable })}</div>;
};

export default ExampleTranslation;
