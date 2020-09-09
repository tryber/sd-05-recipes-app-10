const categories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const areas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const ingredientes = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

const drinkCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const drinkGlasses = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
const drinkIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const drinkAlcoholicFilters = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';

export const fetchCategories = () => {
 return fetch(ingredientes)
  .then(res => res.json())
  .then(data => data.meals)
}

//categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
//areas: https://www.themealdb.com/api/json/v1/1/list.php?a=list
// ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list

// List the categories, glasses, ingredients or alcoholic filters
// https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list
