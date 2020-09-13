import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const { testName, testIt, TestIdImage, recipe } = props;
  const { recipe: { strMeal, strMealThumb, strDrink, strDrinkThumb }} = props;

  if (strDrink) {
    return (
      <Link
        to={{
          pathname: `/bebidas/${recipe.idDrink}`,
          state: { recipe, },
        }}
        className="card"
        data-testid={testIt}
        key={testIt}
      >
        <img
          src={strDrinkThumb}
          data-testid={TestIdImage}
          style={{ width: '200px' }}
        />
        <h3 data-testid={testName}> {strDrink}</h3>
      </Link>
    );
  }

  return (
    <Link
      to={{
        pathname: `/comidas/${recipe.idMeal}`,
        state: { recipe, },}}
      className="card"
      data-testid={testIt}
      key={testIt}
    >
      <img
        src={strMealThumb}
        data-testid={TestIdImage}
        style={{ width: '200px' }}
      />
      <h3 data-testid={testName}> {strMeal}</h3>
    </Link>
  );
};

RecipeCard.propTypes = {
  TestIdImage: propTypes.string.isRequired,
  testIt: propTypes.string.isRequired,
  testName: propTypes.string.isRequired,
  recipe: propTypes.shape({
    strMeal: propTypes.string.isRequired,
    strMealThumb: propTypes.string.isRequired,
    strDrink: propTypes.string.isRequired,
    strDrinkThumb: propTypes.string.isRequired,
  }).isRequired,
};
export default RecipeCard;
