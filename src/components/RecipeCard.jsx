import React from 'react';
import propTypes from 'prop-types';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const {
    testName,
    testIt,
    TestIdImage,
    recipe: { strMeal, strMealThumb, strDrink, strDrinkThumb },
  } = props;
  if (strDrink) {
    return (
      <div className="card" data-testid={testIt} key={testIt}>
        <img
          src={strDrinkThumb}
          data-testid={TestIdImage}
          style={{ width: '200px' }}
          alt=""
        />
        <h3 data-testid={testName}> {strDrink}</h3>
      </div>
    );
  }

  return (
    <div className="card" data-testid={testIt} key={testIt}>
      <img
        src={strMealThumb}
        data-testid={TestIdImage}
        style={{ width: '200px' }}
        alt=""
      />
      <h3 data-testid={testName}> {strMeal}</h3>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: propTypes.shape({
    strMeal: propTypes.string.isRequired,
    strMealThumb: propTypes.string.isRequired,
    TestIdImage: propTypes.string.isRequired,
    strDrink: propTypes.string.isRequired,
    strDrinkThumb: propTypes.string.isRequired,
    TestIdImage: propTypes.string.isRequired,
    testIt: propTypes.string.isRequired,
    testName: propTypes.string.isRequired,
  }).isRequired,
};
export default RecipeCard;
