import React, { useState } from 'react';
import { createContext } from 'react';
import propTypes from 'prop-types';

export const ReceitasContext = createContext();

export const ReceitasContextProvider = ({ children }) => {
  const [qualPage, setqualPage] = useState('meal');
  const [mealDB, setMealDB] = useState({});
  const [drinkDB, setDrinkDB] = useState({});
  const context = {
    qualPage,
    setqualPage,
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
