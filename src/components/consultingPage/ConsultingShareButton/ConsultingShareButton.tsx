'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../ConsultingTitle/ConsultingTitle.scss';

interface ConsultingShareButtonProps {
  siteUrl: string;
}

const ConsultingShareButton = ({ siteUrl }: ConsultingShareButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('consulting');
  const handleCopyLink = () => {
    if (copied) return;
    navigator.clipboard.writeText(`${siteUrl}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <button onClick={handleCopyLink} className="share">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11Z"
          fill="#313131"
        />
        <path
          d="M11.7908 8H12.9019C14.436 8 15.6797 9.34315 15.6797 11C15.6797 12.6568 14.436 14 12.9019 14H11.7908M9.56858 8H8.45747C6.92334 8 5.67969 9.34315 5.67969 11C5.67969 12.6568 6.92334 14 8.45747 14H9.56858M8.45747 11H12.9019"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {copied && <div className="copy-alert">{t('share-message')}</div>}
    </button>
  );
};
export default ConsultingShareButton;
