import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';
import { ReceitasContext } from '../Context/ReceitasContext';
import { useState } from 'react';

const Footer = () => {
  const { setqualPage } = useContext(ReceitasContext);
  const [pageToRedirect, setPageToRedirect] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const whichPageFnc = (page) => {
    setqualPage(page);
    switch (page) {
      case 'drink':
        setPageToRedirect('bebidas');
        setShouldRedirect(true);
        break;
      case 'meal':
        if (pageToRedirect !== 'comidas') {
          setPageToRedirect('comidas');
          setShouldRedirect(true);
        }
        break;
      case 'explorar':
        setPageToRedirect('explorar');
        setShouldRedirect(true);
        break;
      default:
        return null;
    }
  };

  useEffect(() => { setShouldRedirect(false); }, [shouldRedirect]);

  if (shouldRedirect)
    return (
      <div>
        <Redirect to={{ pathname: `/${pageToRedirect}` }} />
      </div>
    );

  return (
    <div className="footer" data-testid="footer">
      <div onClick={() => whichPageFnc('drink')}>
        <img data-testid="drinks-bottom-btn" alt="drink" src={drinkIcon} />
      </div>
      <div onClick={() => whichPageFnc('explorar')}>
        <img data-testid="explore-bottom-btn" alt="explore" src={exploreIcon} />
      </div>
      <div onClick={() => whichPageFnc('meal')}>
        <img data-testid="food-bottom-btn" alt="meal" src={mealIcon} />
      </div>
    </div>
  );
};

export default Footer;
