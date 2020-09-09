import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import Search from '../components/Search';

const Comidas = () => (
  <Fragment>
    Comidas
    <Header />
    <Search />
    <MealCategories />
    <Footer />
  </Fragment>
);

export default Comidas;
