import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Search from '../components/Search';
import { titleAndIsPageSearchBtnAllowed } from '../services/helpers';

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const changeStyle = () => {
    setShowMenu(!showMenu);
  };

  let title = '';
  let pageSearchAllowed = false;
  // Usando função que retorna o Título da página e se o botão de Search pode ser usado
  title = titleAndIsPageSearchBtnAllowed(props.pathname).title;

  pageSearchAllowed = titleAndIsPageSearchBtnAllowed(props.pathname)
    .pageSearchAllowed;
  return (
    <div>
      <header
        style={{
          'background': 'lightgrey',
          'display': 'flex',
          'flex-direction': 'row',
        }}
      >
        <Link to="/perfil">
          <img alt="profile" data-testid="profile-top-btn" src={profileIcon} />
        </Link>
        <h1 data-testid="page-title">{title}</h1>

        {pageSearchAllowed && (
          <Link className="search-icon" onClick={() => changeStyle()}>
            <img
              alt="search loupe"
              data-testid="search-top-btn"
              src={searchIcon}
            />
          </Link>
        )}
      </header>
      {showMenu && <Search />}
    </div>
  );
};

export default Header;
