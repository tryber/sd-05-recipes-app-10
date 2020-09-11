import React from 'react';
import { useContext } from 'react';
import './MealCategories.css';
import { ReceitasContext } from '../Context/ReceitasContext';

const MealCategories = (props) => {
  const { qualPage, mealDB, drinkDB,setDrinkCategory,  setCategory } = useContext(ReceitasContext);

  if (props.pathname === '/bebidas') {
    return (
      <div className="all-categories">
        {drinkDB.categorias.slice(0, 6).map(({ strCategory }) => (
          <div
            className="category"
            data-testid={`${strCategory}-category-filter`}
            key={strCategory}
            onClick={() => {
              setDrinkCategory(strCategory)
              setCategory('')
               } 
            }
          >
            {strCategory}
          </div>
        ))}
      </div>
    );
  }
 if (props.pathname === '/comidas') {
  return (
    <div className="all-categories">
      {mealDB.categorias.slice(0, 6).map(({ strCategory }) => (
        <div
          className="category"
          data-testid={`${strCategory}-category-filter`}
          key={strCategory}
          onClick={() => {
            setDrinkCategory('')
            setCategory(strCategory)
             } 
          }
        >
          {strCategory}
        </div>
      ))}
    </div>
  );
      }
};

export default MealCategories;
