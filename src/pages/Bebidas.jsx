import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import Header from '../components/header';
import RecipesListByCategory from '../components/RecipesListByCategory';
import { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';

const Bebidas = () => {
const { setqualPage } = useContext(ReceitasContext);

setqualPage('bebidas');
return(
  <Fragment>
    Bebidas
    <Header />
    <MealCategories />
    <RecipesListByCategory />
    <Footer />
  </Fragment>
);
}

export default Bebidas;
