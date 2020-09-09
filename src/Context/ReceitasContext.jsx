import React, { useState } from 'react';
import { createContext } from 'react';

export const ReceitasContext = createContext();

export const ReceitasContextProvider = ({children}) => {
  const [qualAPI, setQualAPI] = useState('meal');

const context = {
  qualAPI,
  setQualAPI
}

  return ( <ReceitasContext.Provider value={context}>
    {children}
  </ReceitasContext.Provider> );
}
 
