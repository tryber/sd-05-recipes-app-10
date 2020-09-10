import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Search from '../components/Search';
import './Header.css';


const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const alterarEstilo = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <header>
        <div>
          <Link to="/perfil">
            <img data-testid="profile-top-btn" src={profileIcon} />
          </Link>
          <Link className="search-icon" onClick={() => alterarEstilo()}>
            <img data-testid="search-top-btn" src={searchIcon} />
          </Link>
        </div>
      </header>
      <div style={!showMenu ? { "visibility": "hidden" } : null}>
        <div>
          <input type="text" placeholder="Buscar Receitas" data-testid="search-input" />
        </div>
        <label>
          <input type="radio" data-testid="ingredient-search-radio" />Ingrediente
        </label>
        <label>
          <input type="radio" data-testid="name-search-radio" />Nome
        </label>
        <label>
          <input type="radio" data-testid="first-letter-search-radio" />Primeira letra
        </label>
        <div>
          <button data-testid="exec-search-btn">Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
