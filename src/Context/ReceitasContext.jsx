import React, { useState } from 'react';
import { createContext } from 'react';
import propTypes from 'prop-types';

export const ReceitasContext = createContext();

export const ReceitasContextProvider = ({ children }) => {
  const [qualPage, setqualPage] = useState('comidas');
  const [mealDB, setMealDB] = useState({
    areas: [],
    categorias: [{strCategory: "all"}],
    ingredientes: [],
  });
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [drinkDB, setDrinkDB] = useState({
    alcoholFilters: [],
    categorias: [{strCategory: "all"}],
    glasses: [],
    ingredientes: [],
  });
  const [category, setCategory] = useState('chicken');
  const [drinkCategory, setDrinkCategory] = useState('all');
  const [recipesFiltered, setRecipesFiltered] = useState([]);

  const context = {
    qualPage,
    setqualPage,
    email,
    setEmail,
    senha,
    setSenha,
    mealDB,
    setMealDB,
    drinkDB,
    setDrinkDB,
    category,
    setCategory,
    recipesFiltered,
    setRecipesFiltered,
    drinkCategory,
    setDrinkCategory
  };

  return (
    <ReceitasContext.Provider value={context}>
      {children}
    </ReceitasContext.Provider>
  );
};

ReceitasContextProvider.propTypes = {
  children: propTypes.func.isRequired,
};
