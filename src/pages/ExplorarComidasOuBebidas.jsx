import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const ExplorarComidasOuBebidas = (props) => {
  const { qualPage, setqualPage } = useContext(ReceitasContext);
  const [comidasOuBebidas, SetComidasOuBebidas] = useState('bebidas');
  const [pageToRedirect, setPageToRedirect] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const exploreFoodOrDrinkTemplate = () => {
    console.log('re-rendering');
    if(qualPage === '/explorar/comidas') {
      SetComidasOuBebidas('comidas');
      return <h1>Explorar Comidas</h1>;
    };
    return <h1>Explorar Bebidas</h1>
  }


        const handleRedirect = (whereToExplore) => {
          setPageToRedirect(`explorar/${comidasOuBebidas}/${whereToExplore}`)
          setShouldRedirect(true);
          setqualPage(`explorar/${comidasOuBebidas}/${whereToExplore}`)
        }

        useEffect(() => { setShouldRedirect(false); }, [shouldRedirect]);

        if (shouldRedirect)
        return (
          <div>
            <Redirect to={{ pathname: `/${pageToRedirect}` }} />
          </div>
        );

  return (
  <div>
    {exploreFoodOrDrinkTemplate()}
    <button onClick={() => handleRedirect('ingredientes')}
    data-testid="explore-by-ingredient">Por Ingrediente</button>
    <button onClick={() => handleRedirect('area')}data-testid="explore-by-area">Por Local de Origem</button>
    <button data-testid="explore-surprise">Me surpreenda!</button>
    <Footer />
  </div>  );
}
 
export default ExplorarComidasOuBebidas;