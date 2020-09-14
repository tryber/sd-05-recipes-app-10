import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';

const ExplorarComidasOuBebidasPorArea = (props) => {
  console.log(
    'nao quero ter que por o return de novo quando tiver mais coisas',
  );
  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
      <Footer />
    </Fragment>
  );
};

ExplorarComidasOuBebidasPorArea.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ExplorarComidasOuBebidasPorArea;
