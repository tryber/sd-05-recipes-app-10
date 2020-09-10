import React from 'react';

function Search() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Buscar Receitas" data-testid="search-input" />
      </div>
      <label htmlFor="ingredient-field">
        <input
          type="radio"
          name="ingredient-field"
          data-testid="ingredient-search-radio"
        />Ingrediente
      </label>
      <label htmlFor="name-field">
        <input
          type="radio"
          name="name-field"
          data-testid="name-search-radio"
        />Nome
      </label>
      <label htmlFor="first-letter-field">
        <input
          type="radio"
          name="first-letter-field"
          data-testid="first-letter-search-radio"
        />Primeira letra
      </label>
      <div>
        <button data-testid="exec-search-btn">Buscar</button>
      </div>
    </div>
  );
}

export default Search;
