import 'modern-normalize';

import { searchEvents, searchCategories, searchRecipesFilter, searchRecipesPopular, searchRecipesId, searchRecipesIdRating, searchIngredients, searchAreas, searchAddOrders } from './js/createAPI';

// Прослуховувачі подій




// Function для обробки промисів

searchEvents().then(res => {
    console.log(res);
}).catch(error => { console.log(error) });

searchCategories().then(res => {
    console.log(res);
}).catch(error => { console.log(error) });

searchRecipesFilter().then(res => {
    console.log(res);
}).catch(error => { console.log(error) });

searchRecipesPopular().then(res => {
    console.log(res);
}).catch(error => { console.log(error) });

// searchRecipesId().then(res => {
//     console.log(res);
// }).catch(error => { console.log(error) });

// searchRecipesIdRating().then(res => {
//     console.log(res);
// }).catch(error => { console.log(error) });

searchIngredients().then(res => {
    console.log(res);
}).catch(error => { console.log(error) });

searchAreas().then(res => {
    console.log(res);
}).catch(error => { console.log(error) });

// searchAddOrders().then(res => {
//     console.log(res);
// }).catch(error => { console.log(error) });
