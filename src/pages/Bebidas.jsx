import React, { Fragment, useEffect } from 'react';
import propTypes from 'prop-types';
import { useContext } from 'react';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import Header from '../components/header';
import RecipesListByCategory from '../components/RecipesListByCategory';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchDrinkDB } from '../services/ApiRequest';

const Bebidas = (props) => {
  const {
    setDrinkDB,
    setChooseAPI,
    filtradoPorIngrediente,
    setRecipesFiltered,
  } = useContext(ReceitasContext);

  useEffect(() => {
    if (filtradoPorIngrediente) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filtradoPorIngrediente}`,
      )
        .then((res) => res.json())
        .then((data) => setRecipesFiltered(data.drinks));
    } else {
      fetchDrinkDB().then((e) =>
        setDrinkDB(() => ({
          ...e,
          categorias: [{ strCategory: 'All' }, ...e.categorias],
        })),
      );
    }
  }, [setDrinkDB]);

  useEffect(() => {
    setChooseAPI('bebidas');
  }, [setChooseAPI]);

  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
      <MealCategories pathname={props.history.location.pathname} />
      <RecipesListByCategory pathname={props.history.location.pathname} />
      <Footer />
    </Fragment>
  );
};

Bebidas.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Bebidas;
