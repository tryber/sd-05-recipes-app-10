import React, { useState } from 'react';
import mealCategories from './mealCategories';
import { useEffect } from 'react';
import './MealCategories.css';
import { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import drinkCategories from './drinkCategories';

const MealCategories = () => {
  const { qualPage } = useContext(ReceitasContext);
  const [ allCategories, setAllCategories ] = useState([]);
//   qualPage,
  // setqualPage//
  useEffect(() => {
    if(qualPage === 'meal') {
    setAllCategories(mealCategories.meals.slice(0,5));
    } else if ( qualPage === 'drink') {
      setAllCategories(drinkCategories.drinks.slice(0,5))
    }

  }, [qualPage])

  return ( 
    <div className="all-categories">
    {allCategories.map( ({strCategory}) => (
      <div className="category" data-testid={`${strCategory}-category-filter`}>{strCategory}</div>
    ))}
    </ div>
   );
}
 
export default MealCategories;