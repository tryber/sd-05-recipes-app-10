import React, { useState } from 'react';
import { createContext } from 'react';
import propTypes from 'prop-types';

export const ReceitasContext = createContext();

export const ReceitasContextProvider = ({ children }) => {
  const [qualPage, setqualPage] = useState('meal');
  const [mealDB, setMealDB] = useState({
    areas: [],
    categorias: [],
    ingredientes: [],
  });
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [drinkDB, setDrinkDB] = useState({
    alcoholFilters: [],
    categorias: [],
    glasses: [],
    ingredientes:[],
  });

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
  };

  return <ReceitasContext.Provider value={context}>{children}</ReceitasContext.Provider>;
};

ReceitasContextProvider.propTypes = {
  children: propTypes.func.isRequired,
};
