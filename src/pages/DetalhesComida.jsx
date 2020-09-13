import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { ReceitasContext } from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../style/DetalhesComida.css';

const btnStyle = {
  'background-color': '#E5E5E5',
  position: 'fixed',
  bottom: 0,
}

function handleIngredients(mealDB) {
  const quantities = [];
  const ingredients = [];

  Object.entries(mealDB).forEach((element) => {
    if (element[0].includes('strMeasure') && element[1] !== ' ') {
      quantities.push(element[1]);
    }
    if (element[0].includes('strIngredient') && element[1] !== '') {
      ingredients.push(element[1]);
    }
  });

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {quantities.map((element, index) => (
          <li
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

function handleStrInstructions(mealDB) {
  return (
    <div>
      <h3>Instructions</h3>
      <p data-testid="instructions">{mealDB.strInstructions}</p>
    </div>
  );
}

function handleStrYoutube(mealDB) {
  return (
    <div>
      <h3>Vídeo</h3>
      <video width="320" height="240" controls>
        <source data-testid="video" src={mealDB.strYoutube} type="video/mp4" />
      </video>
    </div>
  );
}

function handleRecommendationsDrinks(recomendadas) {
  return (
    <div>
      <h3>Recomendadas</h3>
      {recomendadas.slice(0, 6).map((recomendada, index) => (
        <div
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
    </div>
  );
}

const DetalhesComida = (props) => {
  const [recipe, setRecipe] = useState({
    strDrinkThumb: '',
    strMeal: '',
    strCategory: '',
    strMealThumb: '',
  });
  const [recommendations, setRecommendations] = useState([]);
  const { params, path } = props.match;

  useEffect(() => {
    if (path.includes('comida')) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`,
      )
        .then((res) => res.json())
        .then((data) => setRecipe(data.meals[0]));
      fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      )
        .then((res) => res.json())
        .then((data) => setRecommendations(data.drinks));
    }

    if (path.includes('bebida')) {
      console.log(params.id);
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`,
      )
        .then((res) => res.json())
        .then((data) => setRecipe(data.drinks[0]));
      fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      )
        .then((res) => res.json())
        .then((data) => setRecommendations(data.meals));
    }
  }, []);

  return (
    <div>
      <div>
        <img
          alt="detail"
          className="recipe-photo"
          data-testid="recipe-photo"
          src={recipe.strMealThumb || recipe.strDrinkThumb}
        />
      </div>
      <div>
        <h2 data-testid="recipe-title">{recipe.strMeal || recipe.strDrink}</h2>
        <h4 data-testid="recipe-category">
          {recipe.strAlcoholic || recipe.strCategory}
        </h4>
      </div>
      <div>
        <Link>
          <img alt="share button" data-testid="share-btn" src={shareIcon} />
        </Link>
        <Link>
          <img
            alt="favorite button"
            data-testid="favorite-btn"
            src={whiteHeartIcon}
          />
        </Link>
      </div>
      <div>
        <div>{handleIngredients(recipe)}</div>
        <div>{handleStrInstructions(recipe)}</div>
        <div>{handleStrYoutube(recipe)}</div>
        <div>{handleRecommendationsDrinks(recommendations)}</div>
        <Link>
          <button style={btnStyle} data-testid="start-recipe-btn">
            Iniciar Receita
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetalhesComida;
