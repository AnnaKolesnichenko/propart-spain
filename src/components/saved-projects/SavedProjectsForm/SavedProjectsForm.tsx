'use client';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './SavedProjectsForm.scss';
import { useTranslation } from 'react-i18next';

interface SavedProjectsFormProps{
  savedProjectsId: number[];
}

const SavedProjectsForm = ({savedProjectsId}: SavedProjectsFormProps) => {
  const { t } = useTranslation('saved-projects');

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('until12');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const savedProjects = savedProjectsId;

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
  };

  const validatePhone = (phone: string): boolean => {
    // Регулярний вираз для валідації міжнародного формату телефону
    const phoneRegex = /^\+?[1-9]\d{8,14}$/;
    return phoneRegex.test(phone);
  };

  useEffect(() => {
    if (validateName(name) && validatePhone(phone) && selectedOption) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, phone, selectedOption]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    // Дозволяємо вводити лише цифри після знака "+"
    if (/^\+?\d*$/.test(value)) {
      setPhone(value);
    }
  };
  const handlePhoneFocus = (): void => {
    if (!phone.startsWith('+')) {
      setPhone('+' + phone);
    }
  };
  const handleSelectedOptionChange = (event: FormEvent<HTMLButtonElement>, value: string): void => {
    event.preventDefault();
    setSelectedOption(value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (isFormValid) {
      // Обробка відправки форми
      console.log('Форма відправлена:', { name, phone, selectedOption, savedProjects});
    } else {
      console.log('Форма не валідна');
    }
  };

  return (
    <form className="saved-projects-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{t('name-label')}</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder={t('name-placeholder')}
          onChange={handleNameChange}
          onBlur={e => validateName(e.target.value)}
          className={validateName(name) ? 'valid' : 'invalid'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">{t('phone-label')}</label>
        <input
          type="text"
          id="phone"
          value={phone}
          placeholder={t('phone-placeholder')}
          onChange={handlePhoneChange}
          onFocus={handlePhoneFocus}
          onBlur={e => validatePhone(e.target.value)}
          className={validatePhone(phone) ? 'valid' : 'invalid'}
        />
      </div>
      <div className="form-group radio">
        <label>{t('radio-label')}</label>
        <div className="radio-group">
          <button
            className={`${selectedOption === 'until12' ? 'active' : ''}`}
            onClick={e => handleSelectedOptionChange(e, 'until12')}
          >
            {t('radio1')}
          </button>
          <button
            className={`${selectedOption === 'after12' ? 'active' : ''}`}
            onClick={e => handleSelectedOptionChange(e, 'after12')}
          >
            {t('radio2')}
          </button>
          <button
            className={`${selectedOption === 'text' ? 'active' : ''}`}
            onClick={e => handleSelectedOptionChange(e, 'text')}
          >
            {t('radio3')}
          </button>
        </div>
      </div>

      <button className="submit" type="submit" disabled={!isFormValid}>
      {t('submit')}
      </button>
    </form>
  );
};

export default SavedProjectsForm;
