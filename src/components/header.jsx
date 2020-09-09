import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = () => {
  return (
    <div>
      <header>
      <div>
          <Link to="/perfil">
            <img data-testid="profile-top-btn" src={profileIcon} />
          </Link>
          <Link>
            <img data-testid="search-top-btn" src={searchIcon}/>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
