import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/header';
import '../style/perfil.css'

function Perfil(props) {
  if (!JSON.parse(localStorage.getItem('user'))) {
    localStorage.setItem('user', JSON.stringify({ email: 'email@mail.com' }));
  }
  return (
    <div className="perfil-container">
      <Header pathname={props.history.location.pathname} />
      <h1 data-testid="profile-email">
        {JSON.parse(localStorage.getItem('user')).email &&
          JSON.parse(localStorage.getItem('user')).email}
      </h1>
      <Link to="/receitas-feitas">
        <button className="button-profile" data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button className="button-profile" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      </Link>
      <Link to="/" onClick={() => localStorage.clear()}>
        <button className="button-profile" data-testid="profile-logout-btn">Sair</button>
      </Link>
      <Footer />
    </div>
  );
}

Perfil.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.shape.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Perfil;
