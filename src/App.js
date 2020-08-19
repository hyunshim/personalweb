import React from 'react';
import './App.scss';

import NavBar from './components/nav/NavBar';
import Summary from './components/summary/Summary';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app" id="home">
      <NavBar></NavBar>
      <div className='content'>
        <Summary></Summary>
        <Projects></Projects>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
