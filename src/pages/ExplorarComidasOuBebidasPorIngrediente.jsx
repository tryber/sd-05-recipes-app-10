import React, { Fragment, useEffect } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';

const ExplorarComidasOuBebidasPorIngrediente = ({history: {location: {pathname}}}) => {
  const { setMealDB, setDrinkDB } = useContext(ReceitasContext);
  console.log(pathname);
  useEffect(() => {
  if(pathname.includes('comidas')) {
      fetchMealDB().then((e) =>
        setMealDB(() => ({
          ...e,
          categorias: [{ strCategory: 'All' }, ...e.categorias],
        })),
      );
    } else {
      fetchDrinkDB().then((e) =>
      setDrinkDB(() => ({
        ...e,
        categorias: [{ strCategory: 'All' }, ...e.categorias],
      })),
    );
  }
  }, []);


  return (
    <Fragment>
      <Header pathname={pathname} />
      <Footer />
    </Fragment>
  );
};

ExplorarComidasOuBebidasPorIngrediente.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ExplorarComidasOuBebidasPorIngrediente;
