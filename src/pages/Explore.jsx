import React, { Fragment } from 'react';
import { useContext } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import { ReceitasContext } from '../Context/ReceitasContext';

const Explore = (props) => {
  const { setqualPage } = useContext(ReceitasContext);
  return (
    <Fragment>
      Explorar
      <button
        onClick={() => {
          props.history.push('/explorar/comidas');
          setqualPage('/explorar/comidas');
        }}
        type="button"
        data-testid="explore-food"
      >
        Explore Comidas
      </button>
      <button
        onClick={() => {
          props.history.push('/explorar/bebidas');
          setqualPage('/explorar/bebidas');
        }}
        type="button"
        data-testid="explore-drinks"
      >
        Explore Bebidas
      </button>
      <Footer />
    </Fragment>
  );
};

Explore.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }).isRequired
};

export default Explore;

// Explore.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired
//   }).isRequired,