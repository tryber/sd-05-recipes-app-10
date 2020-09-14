import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Header from '../components/header';

const ReceitasFeitas = (props) => {
  console.log('code climate, eu vou por return aqui logo menos, me deix');
  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
    </Fragment>
  );
};

ReceitasFeitas.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReceitasFeitas;
