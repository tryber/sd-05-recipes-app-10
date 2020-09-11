import React, { Fragment, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import RecipesListByCategory from '../components/RecipesListByCategory';
import DrinksListByCategory from '../components/DrinksListByCategory';

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
      <MealCategories />
       <RecipesListByCategory />
       {/* <DrinksListByCategory /> */}
      <Footer />
    </Fragment>
  );
};

export default Comidas;
