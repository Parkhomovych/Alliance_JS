import 'modern-normalize';
import './js/hero';
import './js/swiper';
import { searchEvents, searchCategories, searchRecipesFilter, searchRecipesPopular, searchRecipesId, searchRecipesIdRating, searchIngredients, searchAreas, searchAddOrders } from './js/createAPI';
// Function для обробки промисів



searchCategories().then().catch(error => { console.log(error) });

searchRecipesFilter().then().catch(error => { console.log(error) });

searchRecipesPopular().then().catch(error => { console.log(error) });

// searchRecipesId().then(res => {
//     console.log(res);
// }).catch(error => { console.log(error) });

// searchRecipesIdRating().then(res => {
//     console.log(res);
// }).catch(error => { console.log(error) });

searchIngredients().then().catch(error => { console.log(error) });

searchAreas().then().catch(error => { console.log(error) });

// searchAddOrders('kas',2252,'zgzf@fhfg.dfg','hdf').then(res => {
//     console.log(res);
// }).catch(error => { console.log(error) });
