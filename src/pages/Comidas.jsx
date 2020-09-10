import React, { Fragment, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import DetalhesComida from './DetalhesComida';

const Comidas = () => {
  const { setMealDB, setDrinkDB, qualPage } = useContext(ReceitasContext);

  useEffect(() => {
    fetchMealDB().then((e) => setMealDB(e));
    fetchDrinkDB().then((e) => setDrinkDB(e));
  }, [setMealDB, setDrinkDB, qualPage]);

  return (
    <Fragment>
      Comidas
      <Header />
      <DetalhesComida />
      <MealCategories />
      <Footer />
    </Fragment>
  );
};

export default Comidas;
