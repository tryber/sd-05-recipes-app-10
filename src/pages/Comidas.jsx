import React, { Fragment, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import { ReceitasContext } from '../Context/ReceitasContext';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import RecipesListByCategory from '../components/RecipesListByCategory';
import DrinksListByCategory from '../components/DrinksListByCategory';

const Comidas = (props) => {
  const {setMealDB} = useContext(ReceitasContext);
// console.log(props.history.location.pathname)
  useEffect(() => {
    // console.log(mealDB.categorias)
    fetchMealDB().then((e) => setMealDB(() => ({
      ...e,
      categorias: [{strCategory: "ALL"}, ...e.categorias]
    })));
    // fetchDrinkDB().then((e) => setDrinkDB((drinkDB) => ({
    //   ...e,
    //   categorias: [drinkDB.categorias[0], ...e.categorias]
    // })));
  }, [setMealDB]);

  // setqualPage('comidas');

  return (
    <Fragment>
      Comidas
      <Header />
      <MealCategories pathname={props.history.location.pathname}/>
       <RecipesListByCategory pathname={props.history.location.pathname}/>
       {/* <DrinksListByCategory /> */}
      <Footer />
    </Fragment>
  );
};

export default Comidas;
