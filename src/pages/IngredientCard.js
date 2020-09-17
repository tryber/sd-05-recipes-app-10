import React, { Fragment, useEffect } from 'react';

const IngredientCard = ({strIngredient, index}) => {
  let img = '';
  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/images/ingredients/${strIngredient}.png`)
  //   .then(res => res.json())
  //   .then(data => { img = (data)})

  // }, [])

  return (<Fragment>
    <div className="card">
    {/* <h4 data-testid={`${index}-card-name`}>Name</h4> */}
    <img src={`https://www.themealdb.com/images/ingredients/${strIngredient}.png`} width="150px"></img>
    <h4 data-testid={`${index}-card-name`}>{strIngredient}</h4>
    </div>
  </Fragment>);
}
 
export default IngredientCard;