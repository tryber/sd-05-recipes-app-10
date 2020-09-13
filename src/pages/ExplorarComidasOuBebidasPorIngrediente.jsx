import React, { Fragment } from 'react';
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

export default ExplorarComidasOuBebidasPorIngrediente;
