// <<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { fetchCategories, fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';
import { Link } from 'react-router-dom';

// export default function Login() {
//   const { setMealDB, setDrinkDB } = useContext(ReceitasContext);
//   useEffect(() => {
//     // console.log(fetchCategories())
//     fetchMealDB().then(e => setMealDB(e))
//     fetchDrinkDB().then(e => setDrinkDB(e))
//   }, [])
// =======
// import React, { useState, useEffect } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isDisabled, isSetDisabled] = useState(true);
  const { setMealDB, setDrinkDB } = useContext(ReceitasContext);
  useEffect(() => {
    // console.log(fetchCategories())
    fetchMealDB().then(e => setMealDB(e))
    fetchDrinkDB().then(e => setDrinkDB(e))
  }, [])

  // Fonte regex https://www.devmedia.com.br/iniciando-expressoes-regulares/6557
  function validaInput(xEmail, xSenha) {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const regexSenha = /^\w{4,10}$ ^[a-zA-Z]\w{3,9}$ ^[a-zA-Z]\w*\d+\w*$/;

    if (regexEmail.test(xEmail) && regexSenha.test(xSenha)) {
      isSetDisabled(false);
    } else {
      isSetDisabled(true);
    }
  }

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Senha"
        data-testid="password-input"
        minLength="6"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit" data-testid="login-submit-btn" disabled={isDisabled}>
        Entrar
      </button>
      <Link to='/comidas'>comidas</Link>
    </div>
  );
}
