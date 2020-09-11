import React, { Fragment, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import RecipesListByCategory from '../components/RecipesListByCategory';
import DrinksListByCategory from '../components/DrinksListByCategory';

const Comidas = () => {
  const {mealDB, setMealDB, setDrinkDB, qualPage } = useContext(ReceitasContext);

  useEffect(() => {
    console.log(mealDB.categorias)
    fetchMealDB().then((e) => setMealDB(() => ({
      ...e,
      categorias: [mealDB.categorias[0], ...e.categorias]
    })));
    fetchDrinkDB().then((e) => setDrinkDB((drinkDB) => ({
      ...e,
      categorias: [drinkDB.categorias[0], ...e.categorias]
    })));
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
