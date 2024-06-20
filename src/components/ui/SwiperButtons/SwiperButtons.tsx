'use client';

import './SwiperButtons.scss';

interface SwiperButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const SwiperButtons = ({ onPrevClick, onNextClick }: SwiperButtonsProps) => {
  return (
    <div className="swiper-buttons">
      <button aria-label="previous slide" className="swiper-buttons__button" onClick={onPrevClick}>
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.3114 7.0007L9.6754 1.63666L8.2614 0.222656L0.483398 8.0007L8.2614 15.7787L9.6754 14.3647L4.3114 9.0007H16.4834V7.0007H4.3114Z"
            fill="white"
          />
        </svg>
      </button>
      <button aria-label="next slide" className="swiper-buttons__button" onClick={onNextClick}>
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6554 7.0007L7.2914 1.63666L8.7054 0.222656L16.4834 8.0007L8.7054 15.7787L7.2914 14.3647L12.6554 9.0007H0.483398V7.0007H12.6554Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SwiperButtons;
