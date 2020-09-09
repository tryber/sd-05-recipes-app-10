import React from 'react'

const Search = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Buscar Receitas" data-testid="search-input" />
      </div>
      <label>
        <input type="radio" data-testid="ingredient-search-radio" />Ingrediente
      </label>
      <label>
        <input type="radio" data-testid="name-search-radio" />Nome
      </label>
      <label>
        <input type="radio" data-testid="first-letter-search-radio" />Primeira letra
      </label>
      <div>
        <button data-testid="exec-search-btn">Buscar</button>
      </div>
    </div>
  );
}

export default Search;
