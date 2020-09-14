import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
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
