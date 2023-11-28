import React from 'react';
import headerLogo from '../images/logo.svg';

function Header({ headerNav }) {
  return (
    <div className="header">
      <img className="logo" src={headerLogo} alt="Место" />
      {headerNav}
    </div>
  );
}

export default Header;
