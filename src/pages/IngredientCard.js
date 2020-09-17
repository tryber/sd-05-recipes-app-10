import React, { Fragment, useEffect } from 'react';

const IngredientCard = ({bebidasOuComidas, strIngredient, index}) => {
  console.log(bebidasOuComidas)
  let img = bebidasOuComidas === 'comidas' ? `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` : `https://www.thecocktaildb.com/images/ingredients/${strIngredient}-Small.png`;

  // https://www.thecocktaildb.com/images/ingredients/Light rum-Small.png
  return (<Fragment>
    <div data-testid={`${index}-ingredient-card`} className="card">
    {/* <h4 data-testid={`${index}-card-name`}>Name</h4> */}
    <img data-testid={`${index}-card-img`}src={img} width="150px"></img>
    <h4 data-testid={`${index}-card-name`}>{strIngredient}</h4>
    </div>
  </Fragment>);
}
 
export default IngredientCard;