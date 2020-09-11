import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import Header from '../components/header';
import RecipesListByCategory from '../components/RecipesListByCategory';

const Bebidas = () => (
  <Fragment>
    Bebidas
    <Header />
    <MealCategories />
    <RecipesListByCategory />
    <Footer />
  </Fragment>
);

export default Bebidas;
