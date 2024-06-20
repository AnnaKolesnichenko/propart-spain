'use client';
import './HeroFilterRadioButtons.scss';

interface HeroFilterRadioButtonsProps {
  radio1: string;
  radio2: string;
  selectedType: string;
  action: (value: string) => void;
}

const HeroFilterRadioButtons = ({  selectedType, action, radio1, radio2 }: HeroFilterRadioButtonsProps) => {
  return (
    <div className="hero-form-buttons">
      <button
        className={`form-button ${selectedType === 'New Building' ? 'active' : ''}`}
        onClick={event => {
          event.preventDefault();
          action('New Building');
        }}
      >
        <span className="radio"></span>
        <span className="title">{radio1}</span>
      </button>
      <span className='middle'></span>
      <button
        className={`form-button ${selectedType === 'SpecialOffer' ? 'active' : ''}`}
        onClick={event => {
          event.preventDefault();
          action('SpecialOffer');
        }}
      >
        <span className="radio"></span>
        <span className="title">{radio2}</span>
      </button>
    </div>
  );
};
export default HeroFilterRadioButtons;
