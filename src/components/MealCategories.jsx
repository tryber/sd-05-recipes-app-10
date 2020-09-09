import React from 'react';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import './MealCategories.css';
import { ReceitasContext } from '../Context/ReceitasContext';

const MealCategories = () => {
  const { qualPage, mealDB, drinkDB } = useContext(ReceitasContext);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    if (qualPage === 'meal') {
      setAllCategories(mealDB.categorias.slice(0, 5));
    } else if (qualPage === 'drink') {
      setAllCategories(drinkDB.categorias.slice(0, 5));
    }
  }, [qualPage]);

  return (
    <div className="all-categories">
      {allCategories.map(({ strCategory }) => (
        <div className="category" data-testid={`${strCategory}-category-filter`}>
          {strCategory}
        </div>
      ))}
    </div>
  );
};

export default MealCategories;
