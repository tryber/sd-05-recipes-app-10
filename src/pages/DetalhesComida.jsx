import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReceitasContext } from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../style/DetalhesComida.css';

function handleIngredients(mealDB) {
  const quantities = [];
  const ingredients = [];

  Object.entries(mealDB.recipeDetails).forEach((element) => {
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
        {quantities
          .map((element, index) =>
            <li
              className="quantidades"
              data-testid={`${index}-ingredient-name-and-measure`}
            >- {ingredients[index]} - {element}</li>,
          )
        }
      </ul>
    </div>
  );
}

function handleStrInstructions(mealDB) {
  return (
    <div>
      <h3>Instructions</h3>
      <p>{mealDB.recipeDetails.strInstructions}</p>
    </div>
  );
}

function handleStrYoutube(mealDB) {
  return (
    <div>
      <h3>Vídeo</h3>
      <video width="320" height="240" controls>
        <source data-testid="video" src={mealDB.recipeDetails.strYoutube} type="video/mp4" />
      </video>
    </div>
  );
}

function handleRecommendationsDrinks(drinkDB) {
  return (
    <div>
      <h3>Recomendadas</h3>
      {drinkDB.recommendDrinks.slice(0, 6).map((drink) => (
        <div className="drinks-card-details">
          <img alt="drinks" className="img-drinks" src={drink.strDrinkThumb} />
          <div className="container">
            <p>{drink.strAlcoholic}</p>
            <h4>{drink.strDrink}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

const DetalhesComida = () => {
  const { mealDB, drinkDB } = useContext(ReceitasContext);
  console.log('mealDB', mealDB);
  console.log('drinks', drinkDB.recommendDrinks);

  return (
    <div>
      <div>
        <img
          alt="detail"
          className="recipe-photo"
          data-testid="recipe-photo"
          src={mealDB.recipeDetails.strMealThumb}
        />
      </div>
      <div>
        <h2 data-testid="recipe-title">{mealDB.recipeDetails.strMeal}</h2>
        <h4 data-testid="recipe-category">{mealDB.recipeDetails.strCategory}</h4>
      </div>
      <div>
        <Link>
          <img alt="share button" data-testid="share-btn" src={shareIcon} />
        </Link>
        <Link>
          <img alt="favorite button" data-testid="favorite-btn" src={whiteHeartIcon} />
        </Link>
      </div>
      <div>
        <div>
          {handleIngredients(mealDB)}
        </div>
        <div>
          {handleStrInstructions(mealDB)}
        </div>
        <div>
          {handleStrYoutube(mealDB)}
        </div>
        <div>
          {handleRecommendationsDrinks(drinkDB)}
        </div>
      </div>
    </div>
  );
};

export default DetalhesComida;
