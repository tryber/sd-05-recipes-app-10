import React, { useContext } from 'react';
// import propTypes from 'prop-types';
import { useEffect } from 'react';
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
  const { recipesFiltered, setRecipesFiltered } = useContext(ReceitasContext);

  useEffect(() => {
    if (props.pathname === '/bebidas') {
      if (drinkCategory === 'ALL') {
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
  }, [drinkCategory]);

  useEffect(() => {
    console.log('vou fetch comidas');
    if (props.pathname === '/comidas') {
      if (category === 'ALL') {
        fetchAllMeals().then((e) => setRecipesFiltered(e));
      } else {
        fetchMealsFilterdByCategory(category).then((e) =>
          setRecipesFiltered(e),
        );
      }
    }
  }, [category]);

  return (
    <div>
      {recipesFiltered.slice(0, 12).map((recipe, index) => {
        console.log('entrou no map de todas receitas');
        return (
          <RecipeCard
            testIt={`${index}-recipe-card`}
            testName={`${index}-card-name`}
            TestIdImage={`${index}-card-img`}
            recipe={recipe}
          />
        );
      })}
    </div>
  );
};

// RecipesListByCategory.propTypes = {
//   pathname: propTypes.string.isRequired,
// }

export default RecipesListByCategory;
