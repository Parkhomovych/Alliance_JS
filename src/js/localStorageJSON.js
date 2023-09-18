import { Notify } from 'notiflix';

// зберігаємо дані в локальному сховищі
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    // обробка помилки при збереженні даних
    console.error('Упс, сталася помилка при збереженні даних: ', error.message);
    Notify.failure(
      "Ой-ой, здається, ми натрапили на маленьку помилку. Спробуйте ще раз, і, можливо, на цей раз комп'ютерні духи будуть в гарному настрої. 🙃"
    );
  }
};

// завантаження даних
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    // Обробка помилки при завантаженні даних
    console.error('Упс, сталася помилка при отриманні даних: ', error.message);
    Notify.failure(
      "Ой-ой, здається, ми натрапили на маленьку помилку. Спробуйте ще раз, і, можливо, на цей раз комп'ютерні духи будуть в гарному настрої. 🙃"
    );
  }
};

// видалення даних
const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Обробка помилки при видаленні даних
    console.error('Упс, сталася помилка при видаленні даних: ', error.message);
    Notify.failure(
      "Ой-ой, здається, ми натрапили на маленьку помилку. Спробуйте ще раз, і, можливо, на цей раз комп'ютерні духи будуть в гарному настрої. 🙃"
    );
  }
};

export { save, load, remove };
