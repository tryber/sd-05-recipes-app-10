import React, { useState } from 'react';
import { createContext } from 'react';
import propTypes from 'prop-types';

export const ReceitasContext = createContext();

export const ReceitasContextProvider = ({ children }) => {
  // const [qualPage, setqualPage] = useState('comidas');
  const [mealDB, setMealDB] = useState({
    areas: [],
    categorias: [],
    ingredientes: [],
    revenue: [],
    recipeDetails: [],
  });
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [drinkDB, setDrinkDB] = useState({
    alcoholFilters: [],
    categorias: [],
    glasses: [],
    ingredientes: [],
    recommendDrinks: [],
  });
  const [ingredientes, setIngredientes] = useState([]);

  const [chooseAPI, setChooseAPI] = useState('comidas');

  const [category, setCategory] = useState('All');
  const [drinkCategory, setDrinkCategory] = useState('All');
  const [recipesFiltered, setRecipesFiltered] = useState([]);
  const [filtradoPorIngrediente, setfiltradoPorIngrediente] = useState('');

  const context = {
    // qualPage,
    // setqualPage,
    email,
    setEmail,
    senha,
    setSenha,
    mealDB,
    setMealDB,
    drinkDB,
    setDrinkDB,
    chooseAPI,
    setChooseAPI,
    category,
    setCategory,
    recipesFiltered,
    setRecipesFiltered,
    drinkCategory,
    setDrinkCategory,
    ingredientes,
    setIngredientes,
    filtradoPorIngrediente,
    setfiltradoPorIngrediente,
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
