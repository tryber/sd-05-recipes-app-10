import propTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { ReceitasContext } from '../Context/ReceitasContext';
import {
  fetchMealsFilterdByCategory,
  fetchDrinksFilteredByCategory,
  fetchAllMeals,
  fetchAllDrinks,
} from '../services/ApiRequest';
import RecipeCard from './RecipeCard';

const RecipesListByCategory = (props) => {
  const { drinkCategory, category } = useContext(ReceitasContext);
  const {
    recipesFiltered,
    setRecipesFiltered,
    chooseAPI,
    filtradoPorIngrediente,
  } = useContext(ReceitasContext);

  useEffect(() => {
    if (!filtradoPorIngrediente) {
      if (props.pathname === '/bebidas') {
        if (drinkCategory === 'All') {
          console.log('vou chamar fetch all drinks');
          fetchAllDrinks().then((e) => setRecipesFiltered(e));
        } else {
          fetchDrinksFilteredByCategory(drinkCategory).then(
            (e) => {
              setRecipesFiltered(e);
            },
            (error) => console.log(error),
          );
        }
      }
    }
  }, [props.pathname, drinkCategory, setRecipesFiltered]);

  useEffect(() => {
    // console.log('vou fetch comidas');
    if (!filtradoPorIngrediente) {
      if (props.pathname === '/comidas') {
        if (category === 'All') {
          fetchAllMeals().then((e) => setRecipesFiltered(e));
        } else {
          fetchMealsFilterdByCategory(category).then((e) =>
            setRecipesFiltered(e),
          );
        }
      }
    }
  }, [props.pathname, category, setRecipesFiltered]);

  let auxRecipes = recipesFiltered;
  if (!Array.isArray(auxRecipes)) {
    auxRecipes = [];
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  } else if (
    auxRecipes.length === 1 &&
    chooseAPI === 'comidas' &&
    category !== 'Goat'
  ) {
    return <Redirect to={`/comidas/${auxRecipes[0].idMeal}`} />;
  } else if (auxRecipes.length === 1 && chooseAPI === 'bebidas') {
    return <Redirect to={`/bebidas/${auxRecipes[0].idDrink}`} />;
  }
  return (
    <div>
      {auxRecipes.slice(0, 12).map((recipe, index) => (
        <RecipeCard
          testIt={`${index}-recipe-card`}
          testName={`${index}-card-name`}
          TestIdImage={`${index}-card-img`}
          recipe={recipe}
        />
      ))}
      ;
    </div>
  );
};

RecipesListByCategory.propTypes = {
  pathname: propTypes.string.isRequired,
};

export default RecipesListByCategory;
