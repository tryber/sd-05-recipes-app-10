import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';
import '../style/exploreFood.css';


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
    <div className="food-container">
      <Header pathname={props.history.location.pathname} />
      <button className="food-button"
        onClick={() => handleRedirect('ingredientes')}
        data-testid="explore-by-ingredient"
      >
        Por Ingrediente
      </button>
      <button className="food-button"
        onClick={() => handleRedirect('area')}
        data-testid="explore-by-area"
      >
        Por Local de Origem
      </button>
      <button className="food-button" data-testid="explore-surprise">Me surpreenda!</button>
      <Footer />
    </div>
  );
};

ExplorarComidas.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ExplorarComidas;
