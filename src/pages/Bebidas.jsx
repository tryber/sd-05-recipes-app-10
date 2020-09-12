import React, { Fragment, useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import MealCategories from '../components/MealCategories';
import Header from '../components/header';
import { ReceitasContext } from '../Context/ReceitasContext';

const Bebidas = () => {
  const { setChooseAPI } = useContext(ReceitasContext);

  useEffect(() => {
    setChooseAPI('bebidas');
  }, [setChooseAPI]);
  return (
    <Fragment>
      Bebidas
      <Header />
      <MealCategories />
      <Footer />
    </Fragment>
  );
};

export default Bebidas;
