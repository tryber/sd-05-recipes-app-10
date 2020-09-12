import React, { Fragment, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';

const Comidas = () => {
  const { setMealDB, setDrinkDB, qualPage, setChooseAPI } = useContext(ReceitasContext);

  useEffect(() => {
    fetchMealDB().then((e) => setMealDB(e));
    fetchDrinkDB().then((e) => setDrinkDB(e));
  }, [setMealDB, setDrinkDB, qualPage]);

  useEffect(() => {
    setChooseAPI('comidas');
  }, [setChooseAPI])



  return (
    <Fragment>
      Comidas
      <Header />
      <MealCategories />
      <Footer />
    </Fragment>
  );
};

export default Comidas;
