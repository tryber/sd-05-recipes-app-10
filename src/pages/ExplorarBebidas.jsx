import React, { useEffect } from 'react';
import { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';

const ExplorarBebidas = (props) => {
  const [pageToRedirect, setPageToRedirect] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState({});

  const handleRedirect = (whereToExplore) => {
    setPageToRedirect(`explorar/bebidas/${whereToExplore}`);
    setShouldRedirect(true);
  };

  useEffect(() => {
    setShouldRedirect(false);
  }, [shouldRedirect]);

    // já prepara uma bebida random

    useEffect(() => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => setRandomRecipe(data.drinks[0].idDrink))
    }, [])

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
        Por Ingredientes
      </button>
      {/* <button
        onClick={() => handleRedirect('area')}
        data-testid="explore-by-area"
      >
        Por Local de Origem
      </button> */}
      <Link to={`/bebidas/${randomRecipe}`}>
      <button data-testid="explore-surprise">Me Surpreenda!</button>
      </Link>
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
