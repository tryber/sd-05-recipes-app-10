// https://medium.com/chrisburgin/rewriting-javascript-replacing-the-switch-statement-cfff707cf045
export const titleForCurrentUrl = (pathname) =>
  ({
    '/bebidas': 'Bebidas',
    '/comidas': 'Comidas',
    '/explorar': 'Explorar',
    '/explorar/comidas': 'Explorar Comidas',
    '/explorar/bebidas': 'Explorar Bebidas',
    '/receitas-favoritas': 'Receitas Favoritas',
    '/perfil': 'Perfil',
    '/receitas-feitas': 'Receitas Feitas',
    '/explorar/bebidas/area': 'Explorar Origem',
    '/explorar/comidas/area': 'Explorar Origem',
    '/explorar/bebidas/ingredientes': 'Explorar Ingredientes',
    '/explorar/comidas/ingredientes': 'Explorar Ingredientes',
  }[pathname]);

export const isSearchBtnOnTheCurrentPageAllowed = (pathname) => {
  if (
    pathname === '/bebidas' ||
    pathname === '/comidas' ||
    pathname === '/explorar/comidas/area' ||
    pathname === '/explorar/bebidas/area'
  ) {
    return true;
  }
  return false;
};

// As duas funcoes abaixo Favoritam ou desfavoritam, junto com o localstorage
const isAlreadyFavoritedFunc = (isAlreadyFavorited, recipe, favoritesArr) => {
  const favoritesWithOneMore = [
    ...favoritesArr,
    {
      id: recipe.idMeal || recipe.idDrink,
      type: recipe.idMeal ? 'comida' : 'bebida',
      area: recipe.strArea || '',
      category: recipe.strCategory || '',
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe.strMeal || recipe.strDrink,
      image: recipe.strMealThumb || recipe.strDrinkThumb,
    },
  ];
  const favoritesArraywithOneLess = favoritesArr.filter(
    (e) => !(e.id === recipe.idMeal || e.id === recipe.idDrink),
  );

  if (isAlreadyFavorited === false) {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify(favoritesWithOneMore),
    );
  } else {
    // localStorage.clear();
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify(favoritesArraywithOneLess),
    );
  }
};
export const faveFunc = (setFavorite, favorite, recipe) => {
  setFavorite(!favorite);

  const favoritesArr =
    JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const isAlreadyFavorited = favoritesArr.some(
    (e) => e.id === recipe.idMeal || e.id === recipe.idDrink,
  );
  // Se não já estiver favoritada,
  // juntar a nova receita no array da storage
  isAlreadyFavoritedFunc(isAlreadyFavorited, recipe, favoritesArr);
};

// Ao caregar a página, esta função checa se a receita já
// é fave localmente, se for, favorited = true / heart = black
export const ifIsFavoriteFunc = async (recipe, setFavorite) => {
  const ehFavoritaNoLocal = await (
    JSON.parse(localStorage.getItem('favoriteRecipes')) || []
  ).some((e) => e.id === recipe.idMeal || e.id === recipe.idDrink);
  setFavorite(ehFavoritaNoLocal);
};

export const faveFuncFavePage = (setFavorite, favorite, recipe, setFavoriteRecipes) => {
  setFavorite(!favorite);

  const favoritesArr =
    JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  // const isAlreadyFavorited = favoritesArr.some(
  //   (e) => e.id === recipe.idMeal || e.id === recipe.idDrink,
  // );
  
  const favoritesArraywithOneLess = favoritesArr.filter(
    (e) => !(e.id === recipe.id),
  );
  console.log(favoritesArraywithOneLess)

  localStorage.setItem(
    'favoriteRecipes',
    JSON.stringify(favoritesArraywithOneLess),
  );

  setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
  // Se não já estiver favoritada,
  // juntar a nova receita no array da storage
  // isAlreadyFavoritedFunc(isAlreadyFavorited, recipe, favoritesArr);
};