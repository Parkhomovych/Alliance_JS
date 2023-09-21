import Notiflix from 'notiflix';

import {
  searchEvents,
  searchCategories,
  searchRecipesFilter,
  searchRecipesPopular,
  searchRecipesId,
  searchRecipesIdRating,
  searchIngredients,
  searchAreas,
  searchAddOrders,
  searchRecipesFlexFilter,
} from './createAPI';

// import {hideShowFavorit} from './pagination'

// зберігання даних в локальному сховищі
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    // обробка помилки при збереженні даних
    console.error('Set state error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};

// завантаження даних
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    // Обробка помилки при завантаженні даних
    console.error('Get state error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};

// видалення даних
const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Обробка помилки при видаленні даних
    console.error('Remove item error: ', error.message);
    Notify.failure('Something went wrong. Please try again');
  }
};

// масив обєктів фаворитів, для відображення і пагінації
let dataArray = [];

// Завантажуємо збережені дані з локального сховища.
const storedData = load('cardData');
if (storedData) {
  dataArray = storedData;
} else {
  save('cardData', dataArray);
};

// додати фаворіта 
function addFavorit(id) {
    const elem = dataArray.findIndex(({ _id }) => _id === id);
    if (elem < 0) {
        // як нема його в масиві, беремо з серверу, 
        //перезаписуємо сховище
        searchRecipesId(id)
            .then(({ data }) => {
                data.favorit = true;
                dataArray.push(data);
                return dataArray;
            }).then((arr) => { save('cardData', arr) })
            .catch(() => { console.log(error) });
    };
};

// вилучити фаворіта 
function removeFavorit(id) {
    const elem = dataArray.findIndex(({ _id }) => _id === id);
    if (elem > -1) {
        dataArray.splice(elem, 1);
        save('cardData', dataArray);
    }
};

// деактивувати фаворіта 
function offFavorit(id) {
    const elem = dataArray.findIndex(({ _id }) => _id === id);
    if (elem > -1) {
      dataArray[elem].favorit = false;
    };
    if (dataArray.findIndex(({ favorit }) => favorit) < 0) {
      dataArray = [];
      save('cardData', dataArray);
      // hideShowFavorit(0);
    }
};

// перемикач фаворита, повертає frue|false 
function toggleFavorit(id) {
    const elem = dataArray.findIndex(({ _id }) => _id === id);
    if (elem < 0) {
        addFavorit(id);
        return true;
    };
    if (dataArray[elem].favorit) {
        dataArray[elem].favorit = false;
        return false;
    };
    dataArray[elem].favorit = true;
        return true;
};

// перечитка/перезапис фаворита,коли були зміни, повертає кількість фаворитів
function resizeFavorit() {
    const arr = dataArray.filter(({ favorit }) => favorit);
    if (arr.length != dataArray.length) {
        dataArray = arr;
        save('cardData', dataArray);
    }
    return dataArray.length;
};

// атрибут класу для фавориту 
function classFavorit(id) {
    const elem = dataArray.findIndex(({ _id }) => _id === id);
    if (elem > -1 && dataArray[elem].favorit) {
        return ' add-fill';
    };
    return '';
};

// перевірка, чи є фаворітом 
function isFavorit(id) {
    const elem = dataArray.findIndex(({ _id }) => _id === id);
    if (elem > -1 && dataArray[elem].favorit) {
        return true;
    };
    return false;
};

export { save, load, remove, addFavorit, removeFavorit, offFavorit, isFavorit, toggleFavorit, resizeFavorit, classFavorit, dataArray };
