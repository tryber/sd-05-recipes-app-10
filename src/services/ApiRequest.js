const categories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const areas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const ingredientes = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const revenue = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

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
  const revenueData = await fetch(revenue)
    .then((res) => res.json())
    .then((data) => data.meals);
  const detalhamento = revenueData
    .find((idMeal) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`));

  return {
    categorias: categoriesData,
    areas: areasData,
    ingredientes: ingredientesData,
    revenue: revenueData,
    detalhamento,
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
