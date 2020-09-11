import React, { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const DetalhesComida = () => {
  const { mealDB } = useContext(ReceitasContext);
  console.log('aqui', mealDB.detalhamento);

  return (
    <div>
      <div>
        <img alt="picture detail" data-testid="recipe-photo" src={mealDB.detalhamento.strMealThumb} />
      </div>
      <div>
        <h2 data-testid="recipe-title">{mealDB.detalhamento.strMeal}</h2>
        <h4 data-testid="recipe-category">{mealDB.detalhamento.strCategory}</h4>
      </div>
      <div>
        <img alt="share button" data-testid="share-btn" src={shareIcon} />
        <img alt="favorite button" data-testid="favorite-btn" src={whiteHeartIcon} />
      </div>
      <div>
        <h3>Ingredients</h3>
        <ul>
          <li>- {mealDB.detalhamento.strIngredient1} - {mealDB.detalhamento.strMeasure1}</li>
          <li>- {mealDB.detalhamento.strIngredient2} - {mealDB.detalhamento.strMeasure2}</li>
          <li>- {mealDB.detalhamento.strIngredient3} - {mealDB.detalhamento.strMeasure3}</li>
          <li>- {mealDB.detalhamento.strIngredient4} - {mealDB.detalhamento.strMeasure4}</li>
          <li>- {mealDB.detalhamento.strIngredient5} - {mealDB.detalhamento.strMeasure5}</li>
          <li>- {mealDB.detalhamento.strIngredient6} - {mealDB.detalhamento.strMeasure6}</li>
          <li>- {mealDB.detalhamento.strIngredient7} - {mealDB.detalhamento.strMeasure7}</li>
          <li>- {mealDB.detalhamento.strIngredient8} - {mealDB.detalhamento.strMeasure8}</li>
          <li>- {mealDB.detalhamento.strIngredient9} - {mealDB.detalhamento.strMeasure9}</li>
          <li>- {mealDB.detalhamento.strIngredient10} - {mealDB.detalhamento.strMeasure10}</li>
          <li>- {mealDB.detalhamento.strIngredient11} - {mealDB.detalhamento.strMeasure11}</li>
          <li>- {mealDB.detalhamento.strIngredient12} - {mealDB.detalhamento.strMeasure12}</li>
          <li>- {mealDB.detalhamento.strIngredient13} - {mealDB.detalhamento.strMeasure13}</li>
          <li>- {mealDB.detalhamento.strIngredient14} - {mealDB.detalhamento.strMeasure14}</li>
          <li>- {mealDB.detalhamento.strIngredient15} - {mealDB.detalhamento.strMeasure15}</li>
          <li>- {mealDB.detalhamento.strIngredient16} - {mealDB.detalhamento.strMeasure16}</li>
          <li>- {mealDB.detalhamento.strIngredient17} - {mealDB.detalhamento.strMeasure17}</li>
          <li>- {mealDB.detalhamento.strIngredient18} - {mealDB.detalhamento.strMeasure18}</li>
          <li>- {mealDB.detalhamento.strIngredient19} - {mealDB.detalhamento.strMeasure19}</li>
          <li>- {mealDB.detalhamento.strIngredient20} - {mealDB.detalhamento.strMeasure20}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetalhesComida;
