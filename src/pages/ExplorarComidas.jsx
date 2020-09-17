import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useState } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';


const ExplorarComidas = (props) => {
  const [pageToRedirect, setPageToRedirect] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState({});

  const handleRedirect = (whereToExplore) => {
    setPageToRedirect(`explorar/comidas/${whereToExplore}`);
    setShouldRedirect(true);
  };

    // já prepara uma comida random

    useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => setRandomRecipe(data.meals[0].idMeal))
    }, [])

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
        Por Ingredientes
      </button>
      <button
        onClick={() => handleRedirect('area')}
        data-testid="explore-by-area"
      >
        Por Local de Origem
      </button>
      <Link to={`/comidas/${randomRecipe}`}>
      <button data-testid="explore-surprise">Me Surpreenda!</button>
      </Link>
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
