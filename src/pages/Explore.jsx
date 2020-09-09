import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import { Redirect, Link } from 'react-router-dom';

const Explore = () => (
  <Fragment>
    Explorar
    <Link to="explorar/comidas" >
    <button data-testid="explore-food">Explore Comidas</button>
    </Link>
    <Link to="explorar/bebidas">
    <button data-testid="explore-drinks">Explore Bebidas</button>
    </Link>
    <Footer />
  </Fragment>
);

export default Explore;

//<Redirect to="explorar/comidas" />