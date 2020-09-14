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
import { Redirect } from 'react-router-dom';

const filterMealAPI = (tipo, input, setFood) => {
  switch (tipo) {
    case 'nome':
      return fetchMealName(input).then((data) => setFood(data.meals.slice(0,12)));
    case 'ingredient':
      return fetchMealIngredient(input).then((data) => setFood(data.meals.slice(0,12)));
    case 'letter':
      return fetchMealFirstLetter(input).then((data) => setFood(data.meals.slice(0,12)));
    default:
      return null;
  }
};

const filterDrinkAPI = (tipo, input, setDrink) => {
  switch (tipo) {
    case 'nome':
      return fetchDrinkName(input).then((data) => setDrink(data.drinks.slice(0,12)));
    case 'ingredient':
      return fetchDrinkIngredient(input).then((data) => setDrink(data.drinks.slice(0,12)));
    case 'letter':
      return fetchDrinkFirstLetter(input).then((data) => setDrink(data.drinks.slice(0,12)));
    default:
      return null;
  }
};


export default function Search() {
  const { foodData, drinkData, setFoodData, setDrinkData, chooseAPI } = useContext(ReceitasContext);
  const [tipo, setTipo] = useState('nome');
  const [input, setInput] = useState('');

  function showAlert() {
    if(foodData === null || drinkData === null) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } if(tipo.length > 1){
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }

  // if (foodData === 1 || drinkData === 1) {
  //   return <Redirect to="/comidas/:idMeal" />
  // }

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
