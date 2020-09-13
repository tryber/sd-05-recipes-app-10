import React, { Fragment } from 'react';
import Header from '../components/header';

const ReceitasFeitas = (props) => {
  console.log('code climate, eu vou por return aqui logo menos, me deix');
  return <Fragment><Header pathname={props.history.location.pathname} />
  </Fragment>;
};

export default ReceitasFeitas;
