import React from 'react';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const {
    testName,
    testIt,
    TestIdImage,
    recipe: { strMeal, strMealThumb, strDrink, strDrinkThumb },
  } = props;
  // console.log('testid image ' + TestIdImage)
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

export default RecipeCard;
