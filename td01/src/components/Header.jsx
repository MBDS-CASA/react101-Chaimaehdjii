import React from 'react';
import emsiLogo from '../assets/logo-emsi-entry.png';


function Header() {
  return (
    <header className="header">
      <img src={emsiLogo} alt="Logo EMSI" className="emsi-logo" />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}

export default Header;
