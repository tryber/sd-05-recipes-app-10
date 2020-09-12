const categories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const areas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const ingredientes = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

const drinkCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const drinkGlasses = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
const drinkIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const drinkAlcoholicFilters = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';

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

// Requisição API Meal por ingrediente
export const fetchMealIngredient = (ingredient) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

// Requisição API Meal por nome
export const fetchMealName = (name) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

// Requisição API Meal por primeira letra
export const fetchMealFirstLetter = (firstLetter) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

// Requisição API Drink por ingrediente
export const fetchDrinkIngredient = (ingredient) =>
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

// Requisição API Drink por nome
export const fetchDrinkName = (name) =>
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

// Requisição API Drink por primeira letra
export const fetchDrinkFirstLetter = (firstLetter) =>
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`,
  ).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
