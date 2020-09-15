import React, { Fragment, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB } from '../services/ApiRequest';
import RecipesListByCategory from '../components/RecipesListByCategory';

const Comidas = (props) => {
  const { setMealDB, setChooseAPI } = useContext(ReceitasContext);

  useEffect(() => {
    fetchMealDB().then((e) =>
      setMealDB(() => ({
        ...e,
        categorias: [{ strCategory: 'All' }, ...e.categorias],
      })),
    );
  }, [setMealDB]);

  useEffect(() => {
    setChooseAPI('comidas');
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

Comidas.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Comidas;
