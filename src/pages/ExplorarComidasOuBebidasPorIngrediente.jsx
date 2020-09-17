import React, { Fragment, useEffect } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';
import { fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import IngredientCard from './IngredientCard';

const ExplorarComidasOuBebidasPorIngrediente = ({history: {location: {pathname}}}) => {
  const { ingredientes, setIngredientes } = useContext(ReceitasContext);
  console.log(pathname);
  useEffect(() => {
  if(pathname.includes('comidas')) {
      fetchMealDB().then((e) =>
      setIngredientes(() => (e.ingredientes)),
      );
    } else {
      fetchDrinkDB().then((e) =>
      setIngredientes(() => 
        setIngredientes(() => (e.ingredientes)),
      ),
    );
  }
  }, []);


  return (
    <Fragment>
      <Header pathname={pathname} />
      {ingredientes.slice(0,12).map((e,index) => <IngredientCard strIngredient={e.strIngredient} index={index}/> )}
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
