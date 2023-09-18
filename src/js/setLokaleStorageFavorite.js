// Імпортуємо функції для роботи з локальним сховищем з іншого модуля.
import { save, load, remove } from './localStorageJSON';

// Функція, яка додає обробники подій кнопок "додати до обраного".
export default function setLocalStorageF(favoritData) {
  if (!favoritData) {
    // Якщо функція запускається з модуля cards (додавання обраного зі списку карток).
    const hearts = document.querySelectorAll('.btn_favorite');

    function handleClick(event) {
      const parentContainer = event.currentTarget.parentNode;
      const src = parentContainer.querySelector('.photo-img').src;
      const title = parentContainer.querySelector('.info_title').textContent;
      const description =
        parentContainer.querySelector('.info_text').textContent;
      const starRating =
        parentContainer.querySelector('.info_rating').textContent;
      const category = parentContainer.id;
      const ident = parentContainer.querySelector('.info_btn').id;

      // Створюємо об'єкт з даними про обраний елемент.
      const data = {
        category: category,
        src: src,
        title: title,
        description: description,
        starRating: starRating,
        ident: ident,
      };

      let dataArray = [];

      // Завантажуємо збережені дані з локального сховища.
      const storedData = load('cardData');

      if (storedData) {
        dataArray = storedData;
      }

      // Перевіряємо, чи вже є такий елемент в обраних за допомогою index.
      const index = dataArray.findIndex(
        item =>
          item.src === data.src &&
          item.title === data.title &&
          item.description === data.description &&
          item.starRating === data.starRating
      );

      if (index !== -1) {
        // Якщо знайдено співпадіння, видаляємо цей елемент з обраних.
        dataArray.splice(index, 1);

        if (dataArray.length === 0) {
          // Якщо не залишилося обраних елементів, видаляємо дані з локального сховища.
          remove('cardData');
          remove('category');
        } else {
          // В іншому випадку оновлюємо дані в локальному сховищі.
          save('cardData', dataArray);
        }
        return;
      }

      // Додаємо дані про обраний елемент у масив обраних.
      dataArray.push(data);

      // Зберігаємо масив даних в локальному сховищі.
      save('cardData', dataArray);
    }

    // Додаємо обробник подій до кожної кнопки "додати до обраного".
    hearts.forEach(heart => {
      heart.addEventListener('click', handleClick);
    });
  } else {
    // Якщо функція запускається з модуля modalRecipe Favorite (модальне вікно рецепту "Додати до обраного").
    let dataArray = [];
    const target =
      document.querySelector(/* Тут має бути селектор кнопки "Додати до обраного" в модалці рецепту */);

    if (target) {
      target.addEventListener('click', () => {
        const storedData = load('cardData');

        if (target.textContent === 'Додати до обраного') {
          // Якщо кнопка має текст "Додати до обраного", то додаємо обраний елемент.
          target.textContent = 'Видалити з обраного';

          if (storedData) {
            dataArray = storedData;
          }

          dataArray.push(favoritData);

          // Зберігаємо оновлений масив даних в локальному сховищі.
          save('cardData', dataArray);
        } else {
          // Якщо кнопка має текст "Видалити з обраного", то видаляємо обраний елемент.
          target.textContent = 'Додати до обраного';
          dataArray = storedData;

          const index = dataArray.findIndex(
            item =>
              item.src === favoritData.src &&
              item.title === favoritData.title &&
              item.description === favoritData.description &&
              item.starRating === favoritData.starRating
          );

          dataArray.splice(index, 1);

          if (dataArray.length === 0) {
            // Якщо не залишилося обраних елементів, видаляємо дані з локального сховища.
            remove('cardData');
          } else {
            // В іншому випадку оновлюємо дані в локальному сховищі.
            save('cardData', dataArray);
          }
          return;
        }
      });
    }
  }
  return;
}
