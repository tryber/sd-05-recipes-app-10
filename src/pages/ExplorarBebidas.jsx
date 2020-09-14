import React, { useEffect } from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';


const ExplorarBebidas = (props) => {
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

ExplorarBebidas.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};


export default ExplorarBebidas;
