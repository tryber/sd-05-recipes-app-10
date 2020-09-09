import React, { useState, useEffect } from 'react';

export default function Login(props) {
  const {login} = props;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [disabled, setDisabled] = useState(true);


  // Fonte regex https://www.devmedia.com.br/iniciando-expressoes-regulares/6557
  function validaInput(xEmail, xSenha) {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const regexSenha = /^\w{4,10}$ ^[a-zA-Z]\w{3,9}$ ^[a-zA-Z]\w*\d+\w*$/;

    if (regexEmail.test(xEmail) && regexSenha.test(xSenha)) {
      setDisabled(false);
    } else {
      setDisabled(true);
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
      <button type="submit" data-testid="login-submit-btn" type="button" disabled={disabled} onClick={() => login(email, senha)}>
        Entrar
      </button>
    </div>
  );
}
