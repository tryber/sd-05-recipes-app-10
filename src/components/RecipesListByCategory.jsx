import React, { useContext, Fragment } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useEffect } from 'react';
import { fetchMealsFilterdByCategory } from '../services/ApiRequest';
import RecipeCard from './RecipeCard';

const RecipesListByCategory = () => {
  const { category, recipesFiltered, setRecipesFiltered } = useContext(ReceitasContext);

  useEffect(() => {
    fetchMealsFilterdByCategory(category).then(e => setRecipesFiltered(e))
  }, [category])

  return (
  <Fragment>
    {recipesFiltered.map(recipe => <RecipeCard recipe={recipe}/>)}
  </Fragment>  );
}
 
export default RecipesListByCategory;

// fetchMealsFilterdByCategory