import React, { useContext, Fragment } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useEffect } from 'react';
import { fetchMealsFilterdByCategory, fetchDrinksFilteredByCategory } from '../services/ApiRequest';
import RecipeCard from './RecipeCard';

const RecipesListByCategory = () => {
  const {drinkCategory, category, recipesFiltered, setRecipesFiltered, qualPage } = useContext(
    ReceitasContext,
  );

  useEffect(() => {
    if(qualPage === 'bebidas') {
      // setCategory();
      fetchDrinksFilteredByCategory(drinkCategory).then((e) => {
        console.log(e);
        setRecipesFiltered(e)
      }, error => console.log(error));
    }
    if(qualPage === 'comidas') {
    fetchMealsFilterdByCategory(category).then((e) => setRecipesFiltered(e));
    }
  }, [category, drinkCategory, qualPage]);


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
