import React, { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReceitasContext } from '../Context/ReceitasContext';

const IngredientCard = ({ bebidasOuComidas, strIngredient, index }) => {
  const { setfiltradoPorIngrediente } = useContext(ReceitasContext);
  const history = useHistory();

  // a Ideia é, ao mandar qual ingrediente foi filtrado, o Comidas ou o Bebidas vai ver que já tem um 
  // ingrediente selecionado e vai fazer um fetch especifico para isso.
  let img =
    bebidasOuComidas === 'comidas'
      ? `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`
      : `https://www.thecocktaildb.com/images/ingredients/${strIngredient}-Small.png`;


  return (
    <Fragment>
      {/* <Link to={`/${bebidasOuComidas}`}> */}
      <button onClick={() => {
        history.push(`/${bebidasOuComidas}`);
        setfiltradoPorIngrediente(strIngredient);
      }}
      data-testid={`${index}-ingredient-card`} className="card">
        {/* <h4 data-testid={`${index}-card-name`}>Name</h4> */}
        <img data-testid={`${index}-card-img`} src={img} width="150px"></img>
        <h4 data-testid={`${index}-card-name`}>{strIngredient}</h4>
      </button>
      {/* </Link> */}
      {/* <button onclick={() => setfiltradoPorIngrediente(strIngredient)}  >filtrar por ingr</button> */}
    </Fragment>
  );
};

export default IngredientCard;
