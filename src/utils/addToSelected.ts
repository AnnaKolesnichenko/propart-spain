import { OfferCardT } from '@/components/properties-page/OfferCard/OfferCard';
import { SelectedSwiperCardTypes } from '@/types';

export const addToSelected = (cardData: SelectedSwiperCardTypes | OfferCardT) => {
  const selected = JSON.parse(localStorage.getItem('selected') || '[]');
  const { id } = cardData;
  const existingIndex = selected.findIndex((item: SelectedSwiperCardTypes) => item.id === id);

  if (existingIndex !== -1) {
    // Видаляємо об'єкт з таким id зі списку обраних
    selected.splice(existingIndex, 1);
  } else {
    // Додаємо об'єкт до списку обраних
    selected.push(cardData);
  }

  // Зберігаємо оновлений список обраних об'єктів у локальному сховищі
  localStorage.setItem('selected', JSON.stringify(selected));

  window.dispatchEvent(new Event('localStorageUpdated'));
};
