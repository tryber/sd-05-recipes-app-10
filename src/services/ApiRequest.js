const categories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const areas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const ingredientes = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';


const filterAllMeal = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const fetchAllMeals = () => {
  return fetch(filterAllMeal)
  .then((res) => res.json())
  .then((data) => data.meals)
}
const filterAllDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const fetchAllDrinks = () => {
  return fetch(filterAllDrinks)
  .then((res) => res.json())
  .then((data) => data.drinks)
}

// Filter by Category
const filterByIngredientUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export const fetchMealsFilterdByCategory = (category) => {
  return fetch(filterByIngredientUrl + category)
  .then((res) => res.json())
  .then((data) => data.meals)
}

const filteredDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

export const fetchDrinksFilteredByCategory = (category) => {
  // console.log('entrou no fetch de drink')
  return fetch(filteredDrinksUrl + category)
  .then((res) => res.json())
  .then((data) => data.drinks)
}

const drinkCategories =
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const drinkGlasses =
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
const drinkIngredients =
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const drinkAlcoholicFilters =
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';

export const fetchMealDB = async () => {
  const categoriesData = await fetch(categories)
    .then((res) => res.json())
    .then((data) => data.meals);
  const areasData = await fetch(areas)
    .then((res) => res.json())
    .then((data) => data.meals);
  const ingredientesData = await fetch(ingredientes)
    .then((res) => res.json())
    .then((data) => data.meals);

  return {
    categorias: categoriesData,
    areas: areasData,
    ingredientes: ingredientesData,
  };
};

export const fetchDrinkDB = async () => {
  const drinkCategoriesData = await fetch(drinkCategories)
    .then((result) => result.json())
    .then((data) => data.drinks);
  const drinkGlassesData = await fetch(drinkGlasses)
    .then((result) => result.json())
    .then((data) => data.drinks);
  const drinkIngredientsData = await fetch(drinkIngredients)
    .then((result) => result.json())
    .then((data) => data.drinks);
  const drinkAlcoholicFiltersData = await fetch(drinkAlcoholicFilters)
    .then((result) => result.json())
    .then((data) => data.drinks);

  return {
    categorias: drinkCategoriesData,
    glasses: drinkGlassesData,
    ingredientes: drinkIngredientsData,
    alcoholFilters: drinkAlcoholicFiltersData,
  };
};
