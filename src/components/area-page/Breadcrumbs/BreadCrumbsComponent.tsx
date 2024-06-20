'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from 'rsuite';
import './BreadCrumbsComponent.scss';

interface BreadCrumbsProps {
  currentPage: string;
}

const BreadCrumbsComponent = ({ currentPage }: BreadCrumbsProps) => {
  const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <div className="area__breadcrumbs">
      <Breadcrumb
        // locale={}
        separator={
          <Image
            src="/assets/icons/link-separator.svg"
            // style={{ verticalAlign: 'middle' }}
            width={6}
            height={10}
            alt="Arrow"
          />
        }
      >
        <Breadcrumb.Item as={Link} href="/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item as={Link} href="/areas">
          Areas
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{pageName}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbsComponent;
