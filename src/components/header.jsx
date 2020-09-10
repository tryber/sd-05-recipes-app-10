import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Search from '../components/Search';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const changeStyle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header>
        <div>
          <Link to="/perfil">
            <img alt="profile" data-testid="profile-top-btn" src={profileIcon} />
          </Link>
          <Link className="search-icon" onClick={() => changeStyle()}>
            <img alt="search loupe" data-testid="search-top-btn" src={searchIcon} />
          </Link>
        </div>
      </header>
      <div style={!showMenu ? { 'visibility': 'hidden' } : null}>
        <Search />
      </div>
    </div>
  );
};

export default Header;
