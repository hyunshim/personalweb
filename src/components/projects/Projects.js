import React from 'react';
import './Projects.scss';

import Asteroids from "../../assets/img/asteroids.png";
import LostPets from "../../assets/img/lostpets.png";
import TradingBot from "../../assets/img/tradingbot.png";

import Card from './Card';

function Projects() {
    return (
        <div className="projects-container">
            <input type="checkbox" id="expandAll"></input>
            <div className="projects">
                <Card imglink={Asteroids} title={"Asteroids"} skills="Haskell, Functional Programming" desc="Asteroids game created in Haskell"></Card>
                <Card imglink={LostPets} title={"Lost Pets"} skills="Full Stack Dev, ReactJS, NodeJS, MongoDB" desc="Allow pet owners to post lost pet ads on an interactive 3D map"></Card>
                <Card imglink={TradingBot} title={"Trading Bot"} skills="Python, Selenium, Cryptocurrency, Algorithms" desc="Trading bot that automatically makes real-time profitable transactions"></Card>
                <Card imglink={Asteroids} title={"Asteroids"} skills="Haskell, Functional Programming" desc="Asteroids game created in Haskell"></Card>
                <Card imglink={Asteroids} title={"Asteroids"} skills="Haskell, Functional Programming" desc="Asteroids game created in Haskell"></Card>
                <Card imglink={Asteroids} title={"Asteroids"} skills="Haskell, Functional Programming" desc="Asteroids game created in Haskell"></Card>
            </div>

        </div>
    );
}

export default Projects;