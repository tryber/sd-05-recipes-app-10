import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import { Redirect, Link } from 'react-router-dom';

const Explore = (props) => {
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
  console.log(props)
   return  (
  <Fragment>
    Explorar
    {/* <Link to="/explorar/comidas" > */}
    <button onClick={() => props.history.push("/explorar/comidas")} type='button' data-testid="explore-food">Explore Comidas</button>
    {/* </Link> */}
    {/* <Link  to="explorar/bebidas"> */}
    <button onClick={() => props.history.push("/explorar/bebidas")}  type='button' data-testid="explore-drinks">Explore Bebidas</button>
    {/* </Link> */}
    <Footer />
  </Fragment>
);
   }
export default Explore;

//<Redirect to="explorar/comidas" />
{/* <Redirect to="/login/" /> */}