import React from 'react';
import { useContext } from 'react';
import propTypes from 'prop-types';
import './MealCategories.css';
import { ReceitasContext } from '../Context/ReceitasContext';

const MealCategories = (props) => {
  const { category, drinkCategory, mealDB } = useContext(ReceitasContext);
  const { drinkDB, setDrinkCategory, setCategory } = useContext(ReceitasContext);
// FALTA DIMINUIR LINHAS DE CODIGO
  if (props.pathname === '/bebidas') {
    return (
      <div className="all-categories">
        {drinkDB.categorias.slice(0, 6).map(({ strCategory }) => (
          <button
            className="category"
            data-testid={`${strCategory}-category-filter`}
            key={strCategory}
            onClick={() => {
              if (drinkCategory !== strCategory) {
                setDrinkCategory(strCategory);
              } else { setDrinkCategory('All'); }
            }}
          >
            {strCategory}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div className="all-categories">
      {mealDB.categorias.slice(0, 6).map(({ strCategory }) => (
        <button
          className="category"
          data-testid={`${strCategory}-category-filter`}
          key={strCategory}
          onClick={() => {
            if (category !== strCategory) {
              setCategory(strCategory);
            } else { setCategory('All'); }
          }}
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
};

MealCategories.propTypes = {
  pathname: propTypes.string.isRequired,
};

export default MealCategories;
