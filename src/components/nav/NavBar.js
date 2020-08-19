import React, { useState, useEffect } from 'react';
import './NavBar.scss';

import Resume from '../../assets/HyunShimResume.pdf'

function NavBar() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let projectPos = document.querySelector('#projects').getBoundingClientRect().top;
      let projects = document.querySelector('#project-link');

      let homePos = document.querySelector('#home').getBoundingClientRect().top;
      let home = document.querySelector('#home-link');

      if (homePos < 100 && projectPos > 100) {
        projects.style.fontWeight = '400';
        home.style.fontWeight = '600';
      }
      else if (projectPos < 100) {
        projects.style.fontWeight = '600';
        home.style.fontWeight = '400'
      }
    })
  })

  return (
    <div className="nav-fixed">
      <nav className="nav">
        <div className="nav-logo"><a href="#">Hyun Shim</a></div>
        <div className="nav-list">
          <ul>
            <li><a href="#home" id="home-link">Home</a></li>
            <li><a href="#projects" id="project-link">Projects</a></li>
            <li><a href={Resume} target="_blank">Resume</a></li>
            <li><a href="#">About Me</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;