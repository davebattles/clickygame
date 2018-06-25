import React from 'react';
import logo from '../../assets/images/coffee-beans.svg';
import './Header.css';


class Header extends React.Component {
  render() {
    return (
      <div className="Header">
      <header className="Header-header">
      <img src={logo} className="Header-logo" alt="Spinning coffee?" />
      <h1 className="Header-title-h1">Coffee Click</h1>
      </header>

      </div>
    )
  }
}

export default Header;