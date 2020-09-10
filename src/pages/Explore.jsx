import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import { useContext } from 'react';
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
          }
        }
        type="button"
        data-testid="explore-drinks"
      >
        Explore Bebidas
      </button>
      <Footer />
    </Fragment>
  );
};
export default Explore;
