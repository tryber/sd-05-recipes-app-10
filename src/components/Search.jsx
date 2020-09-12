import React from 'react';
import { useContext } from 'react';
import { fetchMealIngredient, fetchMealName, fetchMealFirstLetter } from '../services/ApiRequest';
import {
  fetchDrinkIngredient,
  fetchDrinkName,
  fetchDrinkFirstLetter,
} from '../services/ApiRequest';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useState } from 'react';

const filterMealAPI = (tipo, input, setFood) => {
  switch (tipo) {
    case 'nome':
      return fetchMealName(input).then((data) => setFood(data.meals));
    case 'ingredient':
      return fetchMealIngredient(input).then((data) => setFood(data.meals));
    case 'letter':
      return fetchMealFirstLetter(input).then((data) => setFood(data.meals));
    default:
      return null;
  }
};

const filterDrinkAPI = (tipo, input, setDrink) => {
  switch (tipo) {
    case 'nome':
      return fetchDrinkName(input).then((data) => setDrink(data.drinks));
    case 'ingredient':
      return fetchDrinkIngredient(input).then((data) => setDrink(data.drinks));
    case 'letter':
      return fetchDrinkFirstLetter(input).then((data) => setDrink(data.drinks));
    default:
      return null;
  }
};


function Search() {
  const { foodData, drinkData, setFoodData, setDrinkData, chooseAPI } = useContext(ReceitasContext);
  const [tipo, setTipo] = useState('nome');
  const [input, setInput] = useState('');

  function showAlert() {
    if(foodData === null || drinkData === null)
    return alert("Sinto muito, não encontramos nenhuma receita para esses filtros.");
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Buscar Receitas"
          data-testid="search-input"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="input"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onChange={(e) => setTipo(e.target.id)}
        />
        Ingrediente
      </label>
      <label htmlFor="nome">
        <input
          type="radio"
          name="input"
          id="nome"
          data-testid="name-search-radio"
          onChange={(e) => setTipo(e.target.id)}
        />
        Nome
      </label>
      <label htmlFor="letter">
        <input
          type="radio"
          name="input"
          id="letter"
          data-testid="first-letter-search-radio"
          onChange={(e) => setTipo(e.target.id)}
        />
        Primeira letra
      </label>
      <div>
        <button
          data-testid="exec-search-btn"
          onClick={() => {
            if (chooseAPI === 'comidas') filterMealAPI(tipo, input, setFoodData);
            else filterDrinkAPI(tipo, input, setDrinkData); showAlert();
          }}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Search;
