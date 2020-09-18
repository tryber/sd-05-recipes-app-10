import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../style/DetalhesComida.css';
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
  console.log('recipe', recipe);
  const quantities = [];
  const ingredients = [];

  Object.entries(recipe).forEach((element) => {
    if (
      element[0].includes('strMeasure') &&
      element[1] !== ' ' &&
      element[1] !== ''
    ) {
      quantities.push(element[1]);
    }
    if (
      element[0].includes('strIngredient') &&
      element[1] !== ' ' &&
      element[1] !== ''
    ) {
      ingredients.push(element[1]);
    }
  });

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((element, index) => (
          <li
            type="checkbox"
            key={Math.random()}
            className="quantidades"
            data-testid={`${index}-ingredient-name-and-measure`}
          >
            - {element} - {quantities[index]}
          </li>
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

function StrYoutube(props) {
  const { recipe } = props;
  return (
    <div>
      <h3>Vídeo</h3>
      <video width="320" height="240" controls>
        <source data-testid="video" src={recipe.strYoutube} type="video/mp4" />
      </video>
    </div>
  );
}

StrYoutube.propTypes = {
  recipe: propTypes.objectOf(propTypes.string).isRequired,
};

function RecommendationsList(props) {
  const { recomendadas } = props;
  return (
    <div>
      <h3>Recomendadas</h3>
      <div className="drinks-card-details">
        {recomendadas.slice(0, 6).map((recomendada, index) => (
          <div
            key={Math.random()}
            data-testid={`${index}-recomendation-card`}
          >
            <img
              alt="drinks or meals"
              className="img-drinks"
              src={recomendada.strDrinkThumb || recomendada.strMealThumb}
            />
            <div className="container">
              <h4 data-testid="recipe-category">
                {recomendada.strAlcoholic || recomendada.strCategory}
              </h4>
              <h4 data-testid={`${index}-recomendation-title`}>
                {recomendada.strDrink || recomendada.strMeal}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

RecommendationsList.propTypes = {
  recomendadas: propTypes.arrayOf(propTypes.string).isRequired,
};

export function Success() {
  return ('Link copiado!');
}

function RecipeImage(props) {
  const { recipe } = props;
  return (
    <div>
      <img
        alt="detail" className="recipe-photo" data-testid="recipe-photo"
        src={recipe.strMealThumb || recipe.strDrinkThumb}
      />
    </div>
  );
}

RecipeImage.propTypes = {
  recipe: propTypes.arrayOf(propTypes.string).isRequired,
};

const copyFunc = async (params, setLinkCopied) => {
  const pathToBeCopied = params.idMeal
    ? `http://localhost:3000/comidas/${params.idMeal}`
    : `http://localhost:3000/bebidas/${params.id}`;

  // https://web.dev/async-clipboard/
  try {
    await navigator.clipboard.writeText(pathToBeCopied);
    console.log('Page URL copied to clipboard');
    setLinkCopied(true);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

const DetalhesComida = (props) => {
  const [recipe, setRecipe] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const { params, path } = props.match;
  const [favorite, setFavorite] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    if (path.includes('comida')) {
      fetchMealById(params.idMeal).then((e) => setRecipe(e));
      fetchAllDrinks().then((e) => setRecommendations(e));
    }
    if (path.includes('bebida')) {
      fetchDrinkById(params.id).then((e) => setRecipe(e));
      fetchAllMeals().then((e) => setRecommendations(e));
    }
  }, [params.id, params.idMeal, path]);

  ifIsFavoriteFunc(recipe, setFavorite);

  const id = recipe.idMeal ? recipe.idMeal : recipe.idDrink;

  return (
    <div>
      <RecipeImage recipe={recipe} />
      <h2 data-testid="recipe-title">{recipe.strMeal || recipe.strDrink}</h2>
      <h4 data-testid="recipe-category">{recipe.strAlcoholic || recipe.strCategory}</h4>
      <button onClick={() => faveFunc(setFavorite, favorite, recipe)} >
        <img
          alt="favorite button" data-testid="favorite-btn"
          src={favorite ? blackHeartIcon : whiteHeartIcon}
        />
      </button>
      <button
        data-testid="share-btn"
        onClick={() => copyFunc(params, setLinkCopied)}
      >
        <img alt="share button" src={shareIcon} />
        {linkCopied ? <Success /> : null}
      </button >
      <IngredientsList recipe={recipe} />
      <Instructions recipe={recipe} />
      <StrYoutube recipe={recipe} />
      <RecommendationsList recomendadas={recommendations} />
      <Link to={`/comidas/${id}/in-progress`}><button style={btnStyle} data-testid="start-recipe-btn">Iniciar Receita</button></Link>
    </div>
  );
};

DetalhesComida.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
      idMeal: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default DetalhesComida;
