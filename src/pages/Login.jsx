import React from 'react';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" data-testid="email-input" />
      <input type="text" placeholder="Senha" data-testid="password-input" minLength="6" />
      <button data-testid="login-submit-btn" type="button" disabled>Entrar</button>
    </div>
  );
}
