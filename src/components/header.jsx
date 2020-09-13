import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Search from '../components/Search';

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const changeStyle = () => {
    setShowMenu(!showMenu);
  };
console.log('Header');
console.log(props.pathname)

let title = '';
let pageSearchAllowed = false;

switch(props.pathname) {
  case '/bebidas':
    title = 'Bebidas';
    pageSearchAllowed = true;
    break;
  case '/comidas':
    title = 'Comidas';
    pageSearchAllowed = true;
    break;
  case '/explorar':
    title = 'Explorar';
    break;
  case '/explorar/comidas':
    title = 'Explorar Comidas';
    break;
  case '/explorar/bebidas':
    title = 'Explorar Bebidas';
    break;
  case '/receitas-favoritas':
    title = 'Receitas Favoritas';
    break;
  case '/perfil':
    title = 'Perfil';
    break;
  case '/receitas-feitas':
    title = 'Receitas Feitas';
    break;
  case '/explorar/bebidas/area':
    title = 'Explorar Origem';
    pageSearchAllowed = true;
    break;
  case '/explorar/comidas/area':
    title = 'Explorar Origem';
    pageSearchAllowed = true;
    break;
  case '/explorar/bebidas/ingredientes':
    title = 'Explorar Ingredientes';
    break;
  case '/explorar/comidas/ingredientes':
    title = 'Explorar Ingredientes';
    break;
  default:
    return null;
}
  return (
    <div>
      <header style={{background: 'lightgrey',display: 'flex', 'flex-direction':'row'}}>
        {/* <div> */}
          <Link to="/perfil">
            <img
              alt="profile"
              data-testid="profile-top-btn"
              src={profileIcon}
            />
          </Link>
          <h1 data-testid="page-title">{title}</h1>

          {pageSearchAllowed &&  <Link className="search-icon" onClick={() => changeStyle()}>
            <img
              alt="search loupe"
              data-testid="search-top-btn"
              src={searchIcon}
            />
          </Link>}

        {/* </div> */}
      </header>
      {showMenu && <Search />}
    </div>
  );
};

export default Header;
