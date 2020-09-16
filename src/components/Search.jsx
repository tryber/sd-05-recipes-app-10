import React from 'react';
import { useState, useContext } from 'react';
import { fetchMealIngredient, fetchMealName, fetchMealFirstLetter } from '../services/ApiRequest';
import {
  fetchDrinkIngredient,
  fetchDrinkName,
  fetchDrinkFirstLetter,
} from '../services/ApiRequest';
import { ReceitasContext } from '../Context/ReceitasContext';

const filterMealAPI = (tipo, input, setFood) => {
  switch (tipo) {
    case 'nome':
      return fetchMealName(input).then((data) => setFood(data.meals));
    case 'ingredient':
      return fetchMealIngredient(input).then((data) => setFood(data.meals));
    case 'letter':
      if (input.length > 1) {
        return null;
      }
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
      if (input.length > 1) {
        return null;
      }
      return fetchDrinkFirstLetter(input).then((data) => setDrink(data.drinks));
    default:
      return null;
  }
};

function showAlert(tipo, input) {
  if (tipo === 'letter' && input.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  }
}

export default function Search() {
  const { setRecipesFiltered, chooseAPI } = useContext(ReceitasContext);
  const [tipo, setTipo] = useState('nome');
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type="text" placeholder="Buscar Receitas" data-testid="search-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <label htmlFor="ingredient">
        <input
          type="radio" name="input" id="ingredient" data-testid="ingredient-search-radio"
          onChange={(e) => setTipo(e.target.id)}
        />
        Ingrediente
      </label>
      <label htmlFor="nome">
        <input
          type="radio" name="input" id="nome" data-testid="name-search-radio"
          onChange={(e) => setTipo(e.target.id)}
        />
        Nome
      </label>
      <label htmlFor="letter">
        <input
          type="radio" name="input" id="letter" data-testid="first-letter-search-radio"
          onChange={(e) => setTipo(e.target.id)}
        />
        Primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        onClick={() => {
          if (chooseAPI === 'comidas') {
            filterMealAPI(tipo, input, setRecipesFiltered); showAlert(tipo, input);
          } else {
            filterDrinkAPI(tipo, input, setRecipesFiltered); showAlert(tipo, input);
          }
        }}
      >
          Buscar
      </button>
    </div>
  );
}
