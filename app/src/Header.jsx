import React from 'react';
import './css/Header.css'; // Import a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
