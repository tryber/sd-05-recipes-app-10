import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ReceitasContext } from '../Context/ReceitasContext';
import propTypes from 'prop-types';

const IngredientCard = ({ bebidasOuComidas, strIngredient, index }) => {
  const { setIng } = useContext(ReceitasContext);
  const history = useHistory();
  const img =
    bebidasOuComidas === 'comidas'
      ? `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`
      : `https://www.thecocktaildb.com/images/ingredients/${strIngredient}-Small.png`;

  return (
    <Fragment>
      <button
        onClick={() => {
          history.push(`/${bebidasOuComidas}`);
          setIng(strIngredient);
        }}
        data-testid={`${index}-ingredient-card`}
        className="card"
      >
        <img data-testid={`${index}-card-img`} src={img} width="150px" alt={`${strIngredient}`} />
        <h4 data-testid={`${index}-card-name`}>{strIngredient}</h4>
      </button>
    </Fragment>
  );
};

IngredientCard.propTypes = {
  bebidasOuComidas: propTypes.string.isRequired,
  strIngredient: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
}

export default IngredientCard;
