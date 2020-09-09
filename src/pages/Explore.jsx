import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import { Redirect, Link } from 'react-router-dom';

const Explore = () => {
  // const handleClick = (foorOrdrink) => {
  //   console.log(foorOrdrink)
  //   return(
  //     <div>
  //     <Redirect to={`/explorar/${foorOrdrink}/`} />
  //     </div>
  //   )
  // }
  // <Redirect
  // to={{
  //   pathname: "/login",
  //   search: "?utm=your+face",
  //   state: { referrer: currentLocation }
  // }}

   return  (
  <Fragment>
    Explorar
    <Link to="explorar/comidas" >
    <button type='button' data-testid="explore-food">Explore Comidas</button>
    </Link>
    <Link to="explorar/bebidas">
    <button type='button' data-testid="explore-drinks">Explore Bebidas</button>
    </Link>
    <Footer />
  </Fragment>
);
   }
export default Explore;

//<Redirect to="explorar/comidas" />
{/* <Redirect to="/login/" /> */}