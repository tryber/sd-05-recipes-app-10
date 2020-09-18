import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  fetchMealById,
  fetchAllMeals,
  fetchAllDrinks,
  fetchDrinkById,
} from '../services/ApiRequest';
import { faveFunc, ifIsFavoriteFunc } from '../services/helpers';
// o botão tem que ser bottom com posição fixa o resto pode estilizar
const btnStyle = {
  backgroundColor: '#E5E5E5',
  position: 'fixed',
  bottom: 0,
};

function IngredientsList(props) {
  const { recipe } = props;
  // console.log(recipe);
  const quantities = [];
  const ingredients = [];

  Object.entries(recipe).forEach((element) => {
    if (element[0].includes('strMeasure') && element[1] !== ' ' && element[1] !== '') {
      quantities.push(element[1]);
    }
    if (element[0].includes('strIngredient') && element[1] !== ' ' && element[1] !== '') {
      ingredients.push(element[1]);
    }
  });

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((element, index) => (
          <div data-testid={`${index}-ingredient-step`}>
            <input
              type="checkbox"
              id={`element${index + 1}`}
              // onChange={(e) => toggleCheck(e.target.id, id)}
            />
            <label htmlFor={`element${index + 1}`}></label>
          </div>
        ))}
      </ul>
    </div>
  );
}

IngredientsList.propTypes = {
  recipe: propTypes.objectOf(propTypes.string).isRequired,
};

function Instructions(props) {
  const { recipe } = props;
  return (
    <div>
      <h3>Instructions</h3>
      <p data-testid="instructions">{recipe.strInstructions}</p>
    </div>
  );
}

Instructions.propTypes = {
  recipe: propTypes.objectOf(propTypes.string).isRequired,
};

function Success() {
  return 'Link copiado!';
}

function RecipeImage(props) {
  const { recipe } = props;
  return (
    <div>
      <img
        alt="detail"
        className="recipe-photo"
        data-testid="recipe-photo"
        src={recipe.strMealThumb || recipe.strDrinkThumb}
      />
    </div>
  );
}

RecipeImage.propTypes = {
  recipe: propTypes.arrayOf(propTypes.string).isRequired,
};

const ShareButton = ({ type, id }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const path =
    type === 'comida'
      ? `http://localhost:3000/comidas/${id}/in-progress`
      : `http://localhost:3000/bebidas/${id}/in-progress`;

  // https://web.dev/async-clipboard/

  async function copyPageUrl() {
    try {
      await navigator.clipboard.writeText(path);
      console.log('Page URL copied to clipboard');
      setLinkCopied(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <button onClick={() => copyPageUrl()} src={shareIcon}>
      <img
        data-testid="share-btn"
        alt="share button"
        src={shareIcon}
      />
      {linkCopied ? <Success /> : null}
    </button>
  );
};

const ReceitasProcesso = (props) => {
  const [recipe, setRecipe] = useState({});
  const { params, path } = props.match;
  const [favorite, setFavorite] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [type, setType] = useState('comida');

  useEffect(() => {
    if (path.includes('comida')) {
      fetchMealById(params.id).then((e) => setRecipe(e));
    }
    if (path.includes('bebida')) {
      setType('bebida');
      fetchDrinkById(params.id).then((e) => setRecipe(e));
    }
  }, [params.id, params.idMeal, path]);

  ifIsFavoriteFunc(recipe, setFavorite);

  return (
    <div>
      <RecipeImage recipe={recipe} />
      <h2 data-testid="recipe-title">{recipe.strMeal || recipe.strDrink}</h2>
      <h4 data-testid="recipe-category">{recipe.strAlcoholic || recipe.strCategory}</h4>
      <button onClick={() => faveFunc(setFavorite, favorite, recipe)}>
        <img
          alt="favorite button"
          data-testid="favorite-btn"
          src={favorite ? blackHeartIcon : whiteHeartIcon}
        />
      </button>
      <ShareButton type={type} id={params.id} />
      <IngredientsList recipe={recipe} />
      <Instructions recipe={recipe} />
      <Link to="/receitas-feitas">
        <button style={btnStyle} data-testid="finish-recipe-btn">
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
};

ReceitasProcesso.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
      idMeal: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ReceitasProcesso;
