import React from 'react';
import './App.scss';

import NavBar from './components/nav/NavBar';
import Summary from './components/summary/Summary';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="app" id="home">
      <NavBar></NavBar>
      <div className='content'>
        <Summary></Summary>
        <Projects></Projects>
      </div>

    </div>
  );
}

export default App;
