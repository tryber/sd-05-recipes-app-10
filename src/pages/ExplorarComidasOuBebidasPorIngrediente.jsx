import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import propTypes from 'prop-types';
import Header from '../components/header';

const ExplorarComidasOuBebidasPorIngrediente = (props) => {
  console.log('justificando o return ficar');
  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
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
