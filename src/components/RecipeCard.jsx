import React from 'react';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const { testName, testIt, TestIdImage, recipe: {strMeal, strMealThumb}} = props;

  return ( 
  <div className="card" data-testid={testIt} key={testIt}>
    <img src={strMealThumb} data-testid={TestIdImage} style={{'width': '200px'}}alt=""/>
    <h3 data-testid={testName}> {strMeal}</h3>
  </div> );
}
 
export default RecipeCard;