import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const { recipe, index } = props;
  const {
    recipe: { strMeal, strMealThumb, strDrink, strDrinkThumb },
  } = props;

  if (strDrink) {
    return (
      <Link
        to={{
          pathname: `/bebidas/${recipe.idDrink}`,
          state: { recipe },
        }}
        className="card"
        data-testid={`${index}-recipe-card`}
        key={`${index}-recipe-card`}
      >
        <img
          src={strDrinkThumb}
          data-testid={`${index}-card-img`}
          style={{ width: '200px' }}
          alt=""
        />
        <h3 data-testid={`${index}-card-name`}> {strDrink}</h3>
      </Link>
    );
  }

  return (
    <Link
      to={{
        pathname: `/comidas/${recipe.idMeal}`,
        state: { recipe },
      }}
      className="card"
      data-testid={`${index}-recipe-card`}
      key={`${index}-recipe-card`}
      alt=""
    >
      <img
        src={strMealThumb}
        data-testid={`${index}-card-img`}
        style={{ width: '200px' }}
        alt=""
      />
      <h3 data-testid={`${index}-card-name`}> {strMeal}</h3>
    </Link>
  );
};

RecipeCard.propTypes = {
  index: propTypes.number.isRequired,
  recipe: propTypes.shape({
    strMeal: propTypes.string.isRequired,
    strMealThumb: propTypes.string.isRequired,
    strDrink: propTypes.string.isRequired,
    strDrinkThumb: propTypes.string.isRequired,
  }).isRequired,
};
export default RecipeCard;
