import React from 'react';
import { useContext } from 'react';
import './MealCategories.css';
import { ReceitasContext } from '../Context/ReceitasContext';

const MealCategories = () => {
  const { qualPage, mealDB, drinkDB } = useContext(ReceitasContext);

  if (qualPage === 'bebidas') {
    return (
      <div className="all-categories">
        {drinkDB.categorias.slice(0, 5).map(({ strCategory }) => (
          <div
            className="category"
            data-testid={`${strCategory}-category-filter`}
            key={strCategory}
          >
            {strCategory}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="all-categories">
      {mealDB.categorias.slice(0, 5).map(({ strCategory }) => (
        <div
          className="category"
          data-testid={`${strCategory}-category-filter`}
          key={strCategory}
        >
          {strCategory}
        </div>
      ))}
    </div>
  );
};

export default MealCategories;
