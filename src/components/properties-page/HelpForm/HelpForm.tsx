'use client';

import React, { useState } from 'react';
import './HelpForm.scss';
import Image from 'next/image';
import ResponsiveImage from '@/components/ui/ResponsiveImage';

const HelpForm = () => {
  const handleGetValues = (fromValues: {}) => {
    console.log(fromValues);
  };

  return (
    <div className="project__help-form">
      <div className="image">
        <ResponsiveImage
          src="/assets/images/form-bg.jpg"
          alt="Consulting form"
          width={550}
          height={430}
        />
      </div>
      <ContactForm getValues={handleGetValues} />
      <ContactFormMobile getValues={handleGetValues} />
    </div>
  );
};

export default HelpForm;

interface ContactProps {
  getValues: ({}: {}) => void;
}

const ContactFormMobile = ({ getValues }: ContactProps) => {
  const initialFormValue = {
    name: '',
    phone: '',
    email: '',
  };
  const [formValue, setValue] = useState(initialFormValue);
  const handleOnChange = (inputName: string, value: string) => {
    setValue(prev => ({ ...prev, [inputName]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getValues(formValue);
    setValue(initialFormValue);
  };
  return (
    <div className="contact__mobile">
      <h3 className="contact__mobile__title">Get in touch with us</h3>
      <p className="contact__mobile__text">Arrange instant zoom meeting with our agent</p>
      <form className="contact__mobile__form" onSubmit={e => handleSubmit(e)}>
        <div className="contact__mobile__form__name">
          <input
            onChange={e => handleOnChange('name', e.target.value)}
            value={formValue.name}
            name="name"
            placeholder="Your name"
            type="text"
          ></input>
          <Image src="/assets/icons/user.svg" alt="User icon" width={24} height={24} />
        </div>
        <div className="contact__mobile__form__phone">
          <input
            onChange={e => handleOnChange('phone', e.target.value)}
            value={formValue.phone}
            name="tel"
            placeholder="Phone number"
            type="tel"
          ></input>
          <Image src="/assets/icons/phone.svg" alt="Phone icon" width={24} height={24} />
        </div>
        <div className="contact__mobile__form__email">
          <input
            onChange={e => handleOnChange('email', e.target.value)}
            value={formValue.email}
            name="email"
            placeholder="You mail"
            type="text"
          ></input>
          <Image src="/assets/icons/mail.svg" alt="Mail icon" width={24} height={24} />
        </div>

        <button className="contact__mobile__form__btn" type="submit">
          Get contact
          <Image src="/assets/icons/done.svg" alt="Submit form" width={20} height={20} />
        </button>
      </form>
    </div>
  );
};
const ContactForm = ({ getValues }: ContactProps) => {
  const initialFormValue = {
    name: '',
    phone: '',
  };
  const [formValue, setValue] = useState(initialFormValue);
  const handleOnChange = (inputName: string, value: string) => {
    setValue(prev => ({ ...prev, [inputName]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getValues(formValue);
    setValue(initialFormValue);
  };
  return (
    <div className="contact">
      <h2 className="contact__title">Get help from our expert</h2>
      <p className="contact__text">
        Our expert will help you with property purchase, management or consulting in Costa de Sol.
      </p>
      <form className="contact__form" onSubmit={e => handleSubmit(e)}>
        <input
          onChange={e => handleOnChange('name', e.target.value)}
          value={formValue.name}
          name="name"
          className="contact__form__name"
          placeholder="Your name"
          type="text"
        ></input>
        <input
          onChange={e => handleOnChange('phone', e.target.value)}
          value={formValue.phone}
          name="tel"
          className="contact__form__phone"
          placeholder="Phone number"
          type="tel"
        ></input>
        <button className="contact__form__btn" type="submit">
          Get a consultation
          <Image src="/assets/icons/done.svg" alt="Submit form" width={20} height={20} />
        </button>
        <span className="contact__form__privacy">
          When you click “Get a Consultation,” you agree to our Terms of Service and Privacy Policy.
        </span>
      </form>
    </div>
  );
};
