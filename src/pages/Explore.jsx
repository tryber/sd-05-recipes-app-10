import React, { Fragment } from 'react';
// import { useContext } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
// import Header from '../components/header';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import Header from '../components/header';
// import { ReceitasContext } from '../Context/ReceitasContext';

const Explore = (props) => {
  console.log('entra no component Explore');
  return (
    <Fragment>
      <Header pathname={props.history.location.pathname} />
      <button
        onClick={() => {
          props.history.push('/explorar/comidas');
          // setqualPage('/explorar/comidas');
        }}
        type="button"
        data-testid="explore-food"
      >
        Explorar Comidas
      </button>
      <button
        onClick={() => {
          props.history.push('/explorar/bebidas');
          // setqualPage('/explorar/bebidas');
        }}
        type="button"
        data-testid="explore-drinks"
      >
        Explorar Bebidas
      </button>
      <Footer />
    </Fragment>
  );
};

Explore.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Explore;
