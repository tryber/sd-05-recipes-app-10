import React, { useEffect } from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';

const ExplorarBebidas = () => {
  const [pageToRedirect, setPageToRedirect] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleRedirect = (whereToExplore) => {
    setPageToRedirect(`explorar/bebidas/${whereToExplore}`);
    setShouldRedirect(true);
  };

  useEffect(() => {
    setShouldRedirect(false);
  }, [shouldRedirect]);

  if (shouldRedirect) {
    return (
      <div>
        <Redirect to={{ pathname: `/${pageToRedirect}` }} />
      </div>
    );
  }

  return (
    <div>
      <h1>Explorar Bebidas</h1>
      <button
        onClick={() => handleRedirect('ingredientes')}
        data-testid="explore-by-ingredient"
      >
        Por Ingrediente
      </button>
      <button
        onClick={() => handleRedirect('area')}
        data-testid="explore-by-area"
      >
        Por Local de Origem
      </button>
      <button data-testid="explore-surprise">Me surpreenda!</button>
      <Footer />
    </div>
  );
};

export default ExplorarBebidas;
