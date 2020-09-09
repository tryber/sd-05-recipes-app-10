import React, { useState } from 'react';
import mealCategories from './mealCategories';
import { useEffect } from 'react';
import './MealCategories.css';
import { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import drinkCategories from './drinkCategories';

const MealCategories = () => {
  const { qualAPI } = useContext(ReceitasContext);
  const [ allCategories, setAllCategories ] = useState([]);

  useEffect(() => {
    if(qualAPI === 'meal') {
    setAllCategories(mealCategories.meals.slice(0,5));
    } else if ( qualAPI === 'drink') {
      setAllCategories(drinkCategories.drinks.slice(0,5))
    }

  }, [qualAPI])

  // mealCategories
  // console.log('qualApi' + qualApi)

  return ( 
    <div className="all-categories">
    {allCategories.map( ({strCategory}) => (
      <div className="category" data-testid={`${strCategory}-category-filter`}>{strCategory}</div>
    ))}
    </ div>
   );
}
 
export default MealCategories;