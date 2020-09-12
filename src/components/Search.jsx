import React from 'react';
import { useContext } from 'react';
import { fetchMealIngredient, fetchMealName, fetchMealFirstLetter } from '../services/ApiRequest';
import {
  fetchDrinkIngredient,
  fetchDrinkName,
  fetchDrinkFirstLetter,
} from '../services/ApiRequest';
import { ReceitasContext } from '../Context/ReceitasContext';

const filterMealAPI = (tipo, input, resultados) => {
  switch (tipo) {
    case 'name':
      return fetchMealName(input).then((data) => resultados(data.meals));
    case 'ingredient':
      return fetchMealIngredient(input).then((data) => resultados(data.meals));
    case 'firstLetter':
      return fetchMealFirstLetter(input).then((data) => resultados(data.meals));
    default:
      return null;
  }
};

const filterDrinkAPI = (tipo, input, resultados) => {
  switch (tipo) {
    case 'name':
      return fetchDrinkName(input).then((data) => resultados(data.drinks));
    case 'ingredient':
      return fetchDrinkIngredient(input).then((data) => resultados(data.drinks));
    case 'firstLetter':
      return fetchDrinkFirstLetter(input).then((data) => resultados(data.drinks));
    default:
      return null;
  }
};






function Search() {
  const { setFoodData, setDrinkData, chooseAPI } = useContext(ReceitasContext);
  return (
    <div>
      <div>
        <input type="text" placeholder="Buscar Receitas" data-testid="search-input" />
      </div>
      <label htmlFor="ingredient-field">
        <input type="radio" name="ingredient-field" data-testid="ingredient-search-radio" />
        Ingrediente
      </label>
      <label htmlFor="name-field">
        <input type="radio" name="name-field" data-testid="name-search-radio" />
        Nome
      </label>
      <label htmlFor="first-letter-field">
        <input type="radio" name="first-letter-field" data-testid="first-letter-search-radio" />
        Primeira letra
      </label>
      <div>
        <button data-testid="exec-search-btn" onClick={}>Buscar</button>
      </div>
    </div>
  );
}

export default Search;
