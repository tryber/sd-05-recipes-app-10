import React from 'react';
// import Carousel from 'react-elastic-carousel';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
  // console.log(recipe);
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
        {quantities.map((element, index) => (
          <li
            key={Math.random()}
            className="quantidades"
            data-testid={`${index}-ingredient-name-and-measure`}
          >
            - {ingredients[index]} - {element}
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


// const breakPoints = [
//   { width: 2, itemsToShow: 2 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

function RecommendationsList(props) {
  const { recomendadas } = props;
  return (
    <div>
      <h3>Recomendadas</h3>
      {/* <Carousel breakPoints={breakPoints}> */}
      {recomendadas.slice(0, 6).map((recomendada, index) => (
        <div
          key={Math.random()}
          data-testid={`${index}-recomendation-card`}
          className="drinks-card-details"
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
      {/* </Carousel> */}
    </div>
  );
}

RecommendationsList.propTypes = {
  recomendadas: propTypes.arrayOf(propTypes.string).isRequired,
};

const DetalhesComida = (props) => {
  const [recipe, setRecipe] = useState({
    strDrinkThumb: '',
    strMeal: '',
    strCategory: '',
    strMealThumb: '',
  });
  const [recommendations, setRecommendations] = useState([]);
  const { params, path } = props.match;
  const [favorite, setFavorite] = useState(false);

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
  // Ao rodar, checar se esta receita já esta favoritada
  ifIsFavoriteFunc(recipe, setFavorite);

  return (
    <div>
      <img
        alt="detail"
        className="recipe-photo"
        data-testid="recipe-photo"
        src={recipe.strMealThumb || recipe.strDrinkThumb}
      />
      <h2 data-testid="recipe-title">{recipe.strMeal || recipe.strDrink}</h2>
      <h4 data-testid="recipe-category">{recipe.strAlcoholic || recipe.strCategory}</h4>
      <button><img alt="share button" data-testid="share-btn" src={shareIcon} /></button>
      <button onClick={() => faveFunc(setFavorite, favorite, recipe)}>
        <img
          alt="favorite button"
          data-testid="favorite-btn"
          src={favorite ? blackHeartIcon : whiteHeartIcon}
        />
      </button>
      <IngredientsList recipe={recipe} />
      <Instructions recipe={recipe} />
      <StrYoutube recipe={recipe} />
      <RecommendationsList recomendadas={recommendations} />
      <Link><button style={btnStyle} data-testid="start-recipe-btn">Iniciar Receita</button></Link>
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
