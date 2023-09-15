import axios from "axios";

// Головний URL

const URL = 'https://tasty-treats-backend.p.goit.global/api';

// Headers запитів

const resource = {
    events: '/events',
    recipes: '/recipes',
    categories: '/categories',
    popular: '/recipes/popular',
    ingredients: '/ingredients',
    areas: '/areas',
    orders: '/orders',
}



    // Перелік подій(майстер-класів)

const searchEvents = async () => {

        const response = await axios.get(`${URL}${resource.events}`);
        return response;

};

// Перелік категорій (рецептів)

const searchCategories = async () => {

        const response = await axios.get(`${URL}${resource.categories}`);
        return response;

};

// Перелік рецептів з фільтрацією по категорії, інгредієнту, ключовому слову, часу та районах з урахування кількості рецептів у запиті та порядкового номеру сторінки 

const searchRecipesFilter = async (category,page,limit,time,area,ingredient) => {

        // Праметри API запиту 
        
    const params = new URLSearchParams({
        category: `${'Beef'}`,
        page: 1,
        limit: 6,
        time: `${160}`,
        area: `${'Irish'}`,
        ingredient: `${'640c2dd963a319ea671e3796'}`,
    });
        const response = await axios.get(`${URL}${resource.recipes}?${params}`);
        return response;

};

// Популярні рецепти

const searchRecipesPopular = async () => {

    const response = await axios.get(`${URL}${resource.popular}`);
    return response;

};

// Детальна інформація про рецепт

const searchRecipesId = async (id) => {

    const response = await axios.get(`${URL}${resource.recipes}/${id}`);
    return response;

};

// Детальна інформація про рецепт

const searchRecipesIdRating = async () => {

    const recipesUpdate = {
        id,
       body,
      };

// Праметри API запиту
 
      const params = new URLSearchParams({
        method: "PATCH",
        body: JSON.stringify(recipesUpdate),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
    });

    const response = await axios.get(`${URL}${resource.recipes}/${postToUpdate.id}/rating`, params);
    return response;

};

// Перелік інгредієнтів

const searchIngredients  = async () => {

    const response = await axios.get(`${URL}${resource.ingredients}`);
    return response;

};

// Перелік районів

const searchAreas  = async () => {

    const response = await axios.get(`${URL}${resource.areas}`);
    return response;

};

// Додавання замовлення

const searchAddOrders  = async () => {

    const ordersAdd = {
        name,
        phone,
        email,
        comment,
      };

// Праметри API запиту 
      const params = new URLSearchParams({
        method: "POST",
        body: JSON.stringify(ordersAdd),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
    });

    const response = await axios.get(`${URL}${resource.orders}`, params);
    return response;

};


export{searchEvents,searchCategories,searchRecipesFilter,searchRecipesPopular,searchRecipesId,searchRecipesIdRating,searchIngredients,searchAreas,searchAddOrders};