import React from 'react';

function Login() {
  return (
    <div className="register">
      <form className="register__form">
        <h2 className="register__title">Вход</h2>
        <input className="register__input" type="url" placeholder="Email" required />
        <input className="register__input" type="password" placeholder="Пароль" required />
        <button className="register__submitbtn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
