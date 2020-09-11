import React, { useContext, Fragment } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useEffect } from 'react';
import { fetchMealsFilterdByCategory, fetchDrinksFilteredByCategory } from '../services/ApiRequest';
import RecipeCard from './RecipeCard';

const RecipesListByCategory = () => {
  const { qualPage,category, recipesFiltered, setRecipesFiltered } = useContext(
    ReceitasContext,
  );

  useEffect(() => {
    if(qualPage === 'bebidas') {
      fetchDrinksFilteredByCategory().then((e) => {
        console.log(e);
        setRecipesFiltered(e)
      });
    }
    fetchMealsFilterdByCategory(category).then((e) => setRecipesFiltered(e));
  }, [category, qualPage]);


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
