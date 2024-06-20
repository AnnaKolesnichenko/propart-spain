import Image from 'next/image';
import Link from 'next/link';

import { CreateListLinks } from '@/constants/consulting';

import './ListLinks.scss';

export const ListLinks = () => {
  const listLinks = CreateListLinks();

  return (
    <section className="section-consult__links">
      <div className="container">
        <ul className="section-consult__links-list-links">
          {listLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <Image src={item.svg} alt="icon link" width={48} height={48} />
                <div className="consult__links-wrapper">
                  <p>{item.title}</p>
                  <div>
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M16.9728 11.0007L11.6088 5.63666L13.0228 4.22266L20.8008 12.0007L13.0228 19.7787L11.6088 18.3647L16.9728 13.0007H4.80078V11.0007H16.9728Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
