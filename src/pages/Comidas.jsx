import React, { Fragment, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB } from '../services/ApiRequest';
import RecipesListByCategory from '../components/RecipesListByCategory';

const Comidas = (props) => {
  const { setMealDB, setChooseAPI, filtradoPorIngrediente, setRecipesFiltered } = useContext(ReceitasContext);

  useEffect(() => {
    if (filtradoPorIngrediente) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${filtradoPorIngrediente}`)
      .then(res => res.json())
      .then(data => setRecipesFiltered(data.meals) )

    } else {
    fetchMealDB().then((e) =>
      setMealDB(() => ({
        ...e,
        categorias: [{ strCategory: 'All' }, ...e.categorias],
      })),
    );
    }
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
