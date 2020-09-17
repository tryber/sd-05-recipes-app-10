import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';
import { ReceitasContext } from '../Context/ReceitasContext';

const Footer = () => {
  const { setDrinkCategory, setCategory, setChooseAPI, setfiltradoPorIngrediente } = useContext(ReceitasContext);
  const [pageToRedirect, setPageToRedirect] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleRedirect = (whereToGo) => {
    setPageToRedirect(`${whereToGo}`);
    setShouldRedirect(true);
    setDrinkCategory('All');
    setCategory('All');
  };

  useEffect(() => {
    setShouldRedirect(false);
  }, [shouldRedirect]);

  if (shouldRedirect) {
    return (
      <div>
        <Redirect to={{ pathname: `/${pageToRedirect}` }} />
      </div>
    );
  }

  return (
    <div className="footer" data-testid="footer">
      <button onClick={() => { handleRedirect('bebidas'); setChooseAPI('bebidas'); setfiltradoPorIngrediente('');}}>
        <img data-testid="drinks-bottom-btn" alt="drink" src={drinkIcon} />
      </button>
      <button onClick={() => handleRedirect('explorar')}>
        <img data-testid="explore-bottom-btn" alt="explore" src={exploreIcon} />
      </button>
      <button onClick={() => { handleRedirect('comidas'); setChooseAPI('comidas'); setfiltradoPorIngrediente(''); }}>
        <img data-testid="food-bottom-btn" alt="meal" src={mealIcon} />
      </button>
    </div>
  );
};

export default Footer;
