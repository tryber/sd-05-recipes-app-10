import React, { Fragment } from 'react';
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

export default ExplorarComidasOuBebidasPorArea;
