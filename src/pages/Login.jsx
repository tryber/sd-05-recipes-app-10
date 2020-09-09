import React, { useEffect } from 'react';
import { fetchCategories, fetchMealDB, fetchDrinkDB } from '../services/ApiRequest';
import { useContext } from 'react';
import { ReceitasContext } from '../Context/ReceitasContext';

export default function Login() {
  const { setMealDB, setDrinkDB } = useContext(ReceitasContext);
  useEffect(() => {
    // console.log(fetchCategories())
    fetchMealDB().then(e => setMealDB(e))
    fetchDrinkDB().then(e => setDrinkDB(e))
  }, [])
  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" data-testid="email-input" />
      <input type="text" placeholder="Senha" data-testid="password-input" minLength="6" />
      <button data-testid="login-submit-btn" type="button" disabled>Entrar</button>
    </div>
  );
}