import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';
import '../style/explore.css'

const Explore = (props) => {
  console.log('entra no component Explore');
  return (
    <Fragment>
      <div className="explore-container">
      <Header pathname={props.history.location.pathname} />
      <button className="explore-btn"
        onClick={() => {
          props.history.push('/explorar/comidas');
          // setqualPage('/explorar/comidas');
        }}
        type="button"
        data-testid="explore-food"
      >
        Explorar Comidas
      </button>
      <button className="explore-btn"
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
      </div>
    </Fragment>
  );
};

Explore.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Explore;
