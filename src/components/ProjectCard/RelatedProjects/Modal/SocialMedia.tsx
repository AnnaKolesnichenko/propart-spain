import React from 'react';
import Image from 'next/image';
import './modal.scss';

const media = [
  { title: 'WhatsApp', icon: '/images/whatsapp.svg', link: 'https://wa.me/1234567890?text=Hello' },
  { title: 'Telegram', icon: '/images/telegram.svg', link: 'https://t.me/your_telegram_username' },
  {
    title: 'Via Messenger',
    icon: '/images/messenger.svg',
    link: 'https://m.me/your_facebook_page_id',
  },
  { title: 'Contact', icon: '/images/contact.svg', link: 'mailto:your_email@example.com' },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="social">
      <ul className="social-media">
        {media.map((item, i) => (
          <li key={i} className="social-media-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image src={item.icon} alt={item.title} width={25} height={25} />
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <a href="tel:+1234567890">
        <button className="call-button">Call us now</button>
      </a>
    </div>
  );
};

export default SocialMedia;
