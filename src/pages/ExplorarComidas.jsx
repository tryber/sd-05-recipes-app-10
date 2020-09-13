import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import Header from '../components/header';


const ExplorarComidas = (props) => {
  const [pageToRedirect, setPageToRedirect] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleRedirect = (whereToExplore) => {
    setPageToRedirect(`explorar/comidas/${whereToExplore}`);
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
      <Header pathname={props.history.location.pathname} />
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

export default ExplorarComidas;
