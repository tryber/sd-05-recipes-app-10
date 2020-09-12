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
  const { setDrinkDB } = useContext(ReceitasContext);

  useEffect(() => {
    fetchDrinkDB().then((e) =>
      setDrinkDB(() => ({
        ...e,
        categorias: [{ strCategory: 'All' }, ...e.categorias],
      })),
    );
  }, [setDrinkDB]);

  return (
    <Fragment>
      Bebidas
      <Header />
      <MealCategories pathname={props.history.location.pathname} />
      <RecipesListByCategory pathname={props.history.location.pathname} />
      {/* <Route */}
      {/* <DetalhesComida pathname={props.history.location.pathname} /> */}
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
