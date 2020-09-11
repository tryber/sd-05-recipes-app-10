import React, { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../style/DetalhesComida.css';

const DetalhesComida = () => {
  const { mealDB } = useContext(ReceitasContext);
  console.log('aqui', mealDB.recipeDetails);

  const handleIngredients = () => {
    return (
      <div>
        <h3>Ingredients</h3>
        <ul className="list-ingredients">
          <li>- {mealDB.recipeDetails.strIngredient1} - {mealDB.recipeDetails.strMeasure1}</li>
          <li>- {mealDB.recipeDetails.strIngredient2} - {mealDB.recipeDetails.strMeasure2}</li>
          <li>- {mealDB.recipeDetails.strIngredient3} - {mealDB.recipeDetails.strMeasure3}</li>
          <li>- {mealDB.recipeDetails.strIngredient4} - {mealDB.recipeDetails.strMeasure4}</li>
          <li>- {mealDB.recipeDetails.strIngredient5} - {mealDB.recipeDetails.strMeasure5}</li>
          <li>- {mealDB.recipeDetails.strIngredient6} - {mealDB.recipeDetails.strMeasure6}</li>
          <li>- {mealDB.recipeDetails.strIngredient7} - {mealDB.recipeDetails.strMeasure7}</li>
          <li>- {mealDB.recipeDetails.strIngredient8} - {mealDB.recipeDetails.strMeasure8}</li>
          <li>- {mealDB.recipeDetails.strIngredient9} - {mealDB.recipeDetails.strMeasure9}</li>
          <li>- {mealDB.recipeDetails.strIngredient10} - {mealDB.recipeDetails.strMeasure10}</li>
          <li>- {mealDB.recipeDetails.strIngredient11} - {mealDB.recipeDetails.strMeasure11}</li>
          <li>- {mealDB.recipeDetails.strIngredient12} - {mealDB.recipeDetails.strMeasure12}</li>
          <li>- {mealDB.recipeDetails.strIngredient13} - {mealDB.recipeDetails.strMeasure13}</li>
          <li>- {mealDB.recipeDetails.strIngredient14} - {mealDB.recipeDetails.strMeasure14}</li>
          <li>- {mealDB.recipeDetails.strIngredient15} - {mealDB.recipeDetails.strMeasure15}</li>
          <li>- {mealDB.recipeDetails.strIngredient16} - {mealDB.recipeDetails.strMeasure16}</li>
          <li>- {mealDB.recipeDetails.strIngredient17} - {mealDB.recipeDetails.strMeasure17}</li>
          <li>- {mealDB.recipeDetails.strIngredient18} - {mealDB.recipeDetails.strMeasure18}</li>
          <li>- {mealDB.recipeDetails.strIngredient19} - {mealDB.recipeDetails.strMeasure19}</li>
          <li>- {mealDB.recipeDetails.strIngredient20} - {mealDB.recipeDetails.strMeasure20}</li>
        </ul>
      </div>
    );
  }

  const handleStrInstructions = () => {
    return (
      <div>
        <h3>Instructions</h3>
        <p>{mealDB.recipeDetails.strInstructions}</p>
      </div>
    );
  }

  const handleStrYoutube = () => {
    return (
      <div>
        <h3>Vídeo</h3>
        <video width="320" height="240" controls>
          <source data-testid="video" src={mealDB.recipeDetails.strYoutube} type="video/mp4" />
        </video>
      </div>
    );
  }

  const handleRecommendations = () => {
    return (
      <div></div>
    );
  }

  return (
    <div>
      <div>
        <img
          alt="detail"
          data-testid="recipe-photo"
          src={mealDB.recipeDetails.strMealThumb}
        />
      </div>
      <div>
        <h2 data-testid="recipe-title">{mealDB.recipeDetails.strMeal}</h2>
        <h4 data-testid="recipe-category">{mealDB.recipeDetails.strCategory}</h4>
      </div>
      <div>
        <img alt="share button" data-testid="share-btn" src={shareIcon} />
        <img alt="favorite button" data-testid="favorite-btn" src={whiteHeartIcon} />
      </div>
      {handleIngredients()}
      {handleStrInstructions()}
      {handleStrYoutube()}
    </div>
  );
};

export default DetalhesComida;
