import React, { useContext, Fragment } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useEffect } from 'react';
import { fetchMealsFilterdByCategory, fetchDrinksFilteredByCategory, fetchAllMeals, fetchAllDrinks } from '../services/ApiRequest';
import RecipeCard from './RecipeCard';

const RecipesListByCategory = (props) => {
  const {drinkCategory, category, recipesFiltered, setRecipesFiltered, qualPage } = useContext(
    ReceitasContext,
  );

  console.log(props.pathname)

  useEffect(() => {
    if(props.pathname === '/bebidas') {
      if(category === 'ALL') {
        console.log('vou chamar fetch all drinks');
        fetchAllDrinks().then((e) => setRecipesFiltered(e));
      } else {
        fetchDrinksFilteredByCategory(drinkCategory).then((e) => {
        setRecipesFiltered(e)
      }, error => console.log(error));
    }
    }
  }, [ drinkCategory]);

  useEffect(() => {
    console.log('vou fetch comidas')
    if(props.pathname === '/comidas') {
      if(category === 'ALL') {
        fetchAllMeals().then((e) => setRecipesFiltered(e));
      } else {
    fetchMealsFilterdByCategory(category).then((e) => setRecipesFiltered(e));
      }
    }
  }, [category]);


  return (
    <div>
      {recipesFiltered.slice(0, 12).map((recipe, index) => {
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

export default RecipesListByCategory;

// fetchMealsFilterdByCategory data-testid=`${index}-card-img`
