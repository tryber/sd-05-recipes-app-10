import React from 'react';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const {dataTestId, recipe: {strMeal, strMealThumb}} = props;

  return ( 
  <div className="card" data-testid={dataTestId} key={dataTestId}>
    <img src={strMealThumb} style={{'width': '200px'}}alt=""/>
    <h3>{strMeal}</h3>
  </div> );
}
 
export default RecipeCard;