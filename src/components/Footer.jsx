import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="bebidas">
        <img src={drinkIcon}></img>
      </Link>
      <Link to="explore">
        <img src={exploreIcon}></img>
      </Link>
      <Link to="comidas">
        <img src={mealIcon}></img>
      </Link>
    </div>
  );
};

export default Footer;

// /Apresenta os ícones corretos (drinkIcon.svg, exploreIcon.svg e mealIcon.svg, disponíveis na pasta src/images/).
