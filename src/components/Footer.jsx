import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';
import { ReceitasContext } from '../Context/ReceitasContext';

const Footer = () => {
  const { setqualPage } = useContext(ReceitasContext);

  const whichPageFnc = (page) => {
    setqualPage(page);
  };

  return (
    <div className="footer" data-testid="footer">
      <Link to="bebidas" onClick={() => whichPageFnc('drink')}>
        <img data-testid="drinks-bottom-btn" alt="drink" src={drinkIcon} />
      </Link>
      <Link to="explorar" onClick={() => whichPageFnc('explorar')}>
        <img data-testid="explore-bottom-btn" alt="explore" src={exploreIcon} />
      </Link>
      <Link to="comidas" onClick={() => whichPageFnc('meal')}>
        <img data-testid="food-bottom-btn" alt="meal" src={mealIcon} />
      </Link>
    </div>
  );
};

export default Footer;
