import Link from 'next/link';
import React from 'react';

import { ListFooterProps } from './types';

import './ListFooter.scss';

export const ListFooter: React.FC<ListFooterProps> = ({ list, className }) => {
  return (
    <ul className={`list-footer ${className}`}>
      {list.map((item, index) => (
        <li key={index}>
          <Link href={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
