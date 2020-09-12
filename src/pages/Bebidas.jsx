import React, { Fragment, useEffect } from 'react';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import Header from '../components/header';
import RecipesListByCategory from '../components/RecipesListByCategory';
import { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';

const Bebidas = (props) => {
  const { setDrinkDB } = useContext(ReceitasContext);

  useEffect(() => {
    fetchDrinkDB().then((e) =>
      setDrinkDB((drinkDB) => ({
        ...e,
        categorias: [{ strCategory: 'ALL' }, ...e.categorias],
      })),
    );
  }, [setDrinkDB]);

  return (
    <Fragment>
      Bebidas
      <Header />
      <MealCategories pathname={props.history.location.pathname} />
      <RecipesListByCategory pathname={props.history.location.pathname} />
      <Footer />
    </Fragment>
  );
};

export default Bebidas;
