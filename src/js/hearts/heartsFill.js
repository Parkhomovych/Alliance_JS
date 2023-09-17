import { save, load, remove } from '../localStorageJSON';

export function heartsFillStorage() {
  // знаходимо всі кнопки з класом '.btn-favorite'.
  const cardFavoritesBtn = document.querySelectorAll('.btn-favorite');

  // завантажуємо дані з локального сховища за ключем 'cardData'.
  let storedData = load('cardData');

  if (storedData) {
    // створюємо масив ідентифікаторів обраних об'єктів зі збережених даних.
    const identArray = storedData.map(item => item.ident);

    // Для кожної кнопки '.btn-favorite' на сторінці:
    cardFavoritesBtn.forEach(button => {
      // Отримуємо ідентифікатор картки з батьківського елемента кнопки.
      const cardId = button.parentNode.querySelector('.info_btn').id;

      // Знаходимо елемент іконки "неактивного" серця (білого серця) біля кнопки.
      const heartWhite = button.parentNode.querySelector('.icon-favorite');

      // Перевіряємо, чи ідентифікатор картки є в масиві обраних об'єктів.
      if (identArray.includes(cardId)) {
        // Якщо так, додаємо клас 'heart-filled' до кнопки та іконки (відзначаємо як обране).
        button.classList.add('heart-filled');
        heartWhite.classList.add('heart-filled');
      } else {
        // Якщо не знайдено, видаляємо клас 'heart-filled' з кнопки та іконки (необране).
        button.classList.remove('heart-filled');
        heartWhite.classList.remove('heart-filled');
      }
    });
  } else {
    // Якщо дані не знайдено в локальному сховищі, знімаємо клас 'heart-filled' зі всіх кнопок та іконок (необране).
    cardFavoritesBtn.forEach(button => {
      const heartWhite = button.parentNode.querySelector('.icon-favorite');
      button.classList.remove('heart-filled');
      heartWhite.classList.remove('heart-filled');
    });
  }
}
