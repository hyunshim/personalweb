import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <div className="nav-fixed">
      <nav className="nav">
        <div className="nav-logo"><a href="#">Hyun Shim</a></div>
        <div className="nav-list">
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">About Me</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;