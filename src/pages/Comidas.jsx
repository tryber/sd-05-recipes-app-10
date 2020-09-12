import React, { Fragment, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import RecipesListByCategory from '../components/RecipesListByCategory';

const Comidas = (props) => {
  const {setMealDB} = useContext(ReceitasContext);
  useEffect(() => {
    fetchMealDB().then((e) => setMealDB(() => ({
      ...e,
      categorias: [{strCategory: "ALL"}, ...e.categorias]
    })));
K
  }, [setMealDB]);

  return (
    <Fragment>
      Comidas
      <Header />
      <MealCategories pathname={props.history.location.pathname}/>
       <RecipesListByCategory pathname={props.history.location.pathname}/>
      <Footer />
    </Fragment>
  );
};

export default Comidas;
