import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" data-testid="footer">
        <Link to="bebidas" data-testid="drinks-bottom-btn">
          <img src={drinkIcon}></img>
        </Link>
        <Link to="explorar" data-testid="explore-bottom-btn">
          <img src={exploreIcon}></img>
        </Link>
        <Link to="comidas" data-testid="food-bottom-btn">
          <img src={mealIcon}></img>
        </Link>
    </div>
  );
};

export default Footer;
