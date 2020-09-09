import React, { useState, useEffect, useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const { email, setEmail, senha, setSenha } = useContext(ReceitasContext);
  const [isDisabled, isSetDisabled] = useState(true);


  // Fonte regex https://www.devmedia.com.br/iniciando-expressoes-regulares/6557
  function validaInput(xEmail, xSenha) {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const regexSenha = /^[^W_]{7,100}$/;

    if (regexEmail.test(xEmail) && regexSenha.test(xSenha)) {
      isSetDisabled(false);
    } else {
      isSetDisabled(true);
    }
  }

  const saveStorage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('email', JSON.stringify({ email }));
  };

  useEffect(() => {
    validaInput(email, senha);
  }, [email, senha]);

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Senha"
        data-testid="password-input"
        minLength="6"
        onChange={(e) => setSenha(e.target.value)}
      />
      <Link to="/comidas">
        <button type="submit" data-testid="login-submit-btn" disabled={isDisabled} onClick={() => saveStorage()}>
          Entrar
        </button>
      </Link>
    </div>
  );
}
