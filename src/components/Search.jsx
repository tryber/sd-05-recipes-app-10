import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { fetchMealIngredient, fetchMealName, fetchMealFirstLetter } from '../services/ApiRequest';
import {
  fetchDrinkIngredient,
  fetchDrinkName,
  fetchDrinkFirstLetter,
} from '../services/ApiRequest';
import { ReceitasContext } from '../Context/ReceitasContext';

const filterMealAPI = (tipo, input, setFood, setFetchIsNull) => {
  switch (tipo) {
    case 'nome':
      return fetchMealName(input).then((data) => {
        data.meals ? setFood(data.meals) : setFetchIsNull(true);
      });
    case 'ingredient':
      return fetchMealIngredient(input).then((data) => {
        data.meals ? setFood(data.meals) : setFetchIsNull(true);
      });
    case 'letter':
      if (input.length > 1) {
        return null;
      }
      return fetchMealFirstLetter(input).then((data) => {
        data.meals ? setFood(data.meals) : setFetchIsNull(true);
      });
    default:
      return null;
  }
};

const filterDrinkAPI = (tipo, input, setDrink, setFetchIsNull) => {
  switch (tipo) {
    case 'nome':
      return fetchDrinkName(input).then((data) => {
        data.drinks ? setDrink(data.drinks) : setFetchIsNull(true);
      });
    case 'ingredient':
      return fetchDrinkIngredient(input).then((data) => {
        data.drinks ? setDrink(data.drinks) : setFetchIsNull(true);
      });
    case 'letter':
      if (input.length > 1) {
        return null;
      }
      return fetchDrinkFirstLetter(input).then((data) => {
        data.drinks ? setDrink(data.drinks) : setFetchIsNull(true);
      });
    default:
      return null;
  }
};

function showAlert(tipo, input) {
  if (tipo === 'letter' && input.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  }
}

function changePage(recipesFiltered, chooseAPI) {
  if (recipesFiltered.length === 1 && chooseAPI === 'comidas') {
    return <Redirect to={`/comidas/${recipesFiltered[0].idMeal}`} />;
  }
  console.log('pay atention');
  if (recipesFiltered.length === 1 && chooseAPI === 'bebidas') {
    return <Redirect to={`/bebidas/${recipesFiltered[0].idDrink}`} />;
  }
}

export default function Search() {
  const { recipesFiltered, setRecipesFiltered, chooseAPI } = useContext(ReceitasContext);
  const [tipo, setTipo] = useState('nome');
  const [input, setInput] = useState('');
  const [fetchIsNull, setFetchIsNull] = useState(false);

  useEffect(() => {
    if (fetchIsNull) {
      alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }, [fetchIsNull]);

  return (
    <div>
      {changePage(recipesFiltered, chooseAPI)}
      <div>
        <input
          type="text" placeholder="Buscar Receitas" data-testid="search-input"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
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
      <div>
        <button
          data-testid="exec-search-btn"
          onClick={() => {
            if (chooseAPI === 'comidas') {filterMealAPI(tipo, input, setRecipesFiltered, setFetchIsNull); showAlert(tipo, input);
            } else { filterDrinkAPI(tipo, input, setRecipesFiltered, setFetchIsNull);
              showAlert(tipo, input);
            }
          }}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
