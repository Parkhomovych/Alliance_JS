import { heartsFillStorage } from '../hearts/heartsFill';

export function cardHearts() {
  // Знаходимо всі кнопки з класом '.btn-favorite'.
  const cardFavoritesBtn = document.querySelectorAll('.btn-favorite');

  // Викликаємо функцію для заповнення сердець на основі даних із локального сховища.
  heartsFillStorage();

  cardFavoritesBtn.forEach(button => {
    button.addEventListener('click', () => {
      // Знаходимо всі елементи іконки "сердця".
      const icons = button.querySelectorAll('.icon-favorite');

      icons.forEach(icon => {
        // Переключаємо клас 'heart-filled' (додаємо, якщо відсутній, видаляємо, якщо присутній).
        icon.classList.toggle('heart-filled');
      });

      // Забираємо фокус з кнопки (щоб уникнути відзначення при наступних кліках).
      button.blur();
    });
  });
}
