import React, { useState } from 'react';
import { createContext } from 'react';

export const ReceitasContext = createContext();

export const ReceitasContextProvider = ({children}) => {
  const [qualPage, setqualPage] = useState('meal');

const context = {
  qualPage,
  setqualPage,
}

  return ( <ReceitasContext.Provider value={context}>
    {children}
  </ReceitasContext.Provider> );
}
 
