import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../auth.js';
import InfoTooltip from './InfoTooltip';

const Register = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    auth
      .signUp(formValue.email, formValue.password)
      .then(res => {
        console.log(res.data);
        if (res.data) {
          navigate('/sign-in', { replace: true });
        } else {
          setIsInfoTooltipOpen(true);
        }
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const handleCloseInfoTooltip = () => {
    setIsInfoTooltipOpen(false);
  };

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <h2 className="register__title">Регистрация</h2>
        <input
          className="register__input"
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="register__input"
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder="Пароль"
          required
        />
        <button className="register__submitbtn" type="submit">
          Зарегистрироваться
        </button>
        <p className="register__span">
          Уже зарегистрированы?
          <Link to="/sign-in" className="register__link">
            Войти
          </Link>
        </p>
      </form>
      <InfoTooltip onClose={handleCloseInfoTooltip} state="fail" isOpen={isInfoTooltipOpen} />
    </div>
  );
};

export default Register;
