import React, { useContext, Fragment } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useEffect } from 'react';
import { fetchMealsFilterdByCategory } from '../services/ApiRequest';
import RecipeCard from './RecipeCard';

const RecipesListByCategory = () => {
  const { category, recipesFiltered, setRecipesFiltered } = useContext(
    ReceitasContext,
  );

  useEffect(() => {
    fetchMealsFilterdByCategory(category).then((e) => setRecipesFiltered(e));
  }, [category]);

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default RecipesListByCategory;

// fetchMealsFilterdByCategory data-testid=`${index}-card-img`
