import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';
import { ReceitasContext } from '../Context/ReceitasContext';

const Footer = () => {
  const { setQualAPI } = useContext(ReceitasContext);

  const whichPageFnc = (page) => {
    setQualAPI(page)
  }

  return (
    <div className="footer" data-testid="footer">
      <Link to="bebidas">
        <img data-testid="drinks-bottom-btn" onClick={() => whichPageFnc('drink')} src={drinkIcon}></img>
      </Link>
      <Link to="explorar">
        <img data-testid="explore-bottom-btn" src={exploreIcon}></img>
      </Link>
      <Link to="comidas">
        <img data-testid="food-bottom-btn" onClick={() => whichPageFnc('meal')} src={mealIcon}></img>
      </Link>
    </div>
  );
};

export default Footer;
