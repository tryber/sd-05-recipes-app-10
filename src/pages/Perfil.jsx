import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/header';

function Perfil(props) {
  if (!JSON.parse(localStorage.getItem('user'))) {
    localStorage.setItem('user', JSON.stringify({ email: 'email@mail.com' }));
  }
  return (
    <div>
      <Header pathname={props.history.location.pathname} />
      <h1 data-testid="profile-email">
        {JSON.parse(localStorage.getItem('user')).email &&
          JSON.parse(localStorage.getItem('user')).email}
      </h1>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button data-testid="profile-favorite-btn">Receitas Favoritas</button>
      </Link>
      <Link to="/" onClick={() => localStorage.clear()}>
        <button data-testid="profile-logout-btn">Sair</button>
      </Link>
      <Footer />
    </div>
  );
}

export default Perfil;
