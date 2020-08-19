import React from 'react';
import './Projects.scss';

import Asteroids from "../../assets/img/asteroids.png";
import LostPets from "../../assets/img/lostpets.png";
import TradingBot from "../../assets/img/tradingbot.png";
import ChessBot from "../../assets/img/chessbot.png";

import Card from './Card';


function Projects() {
    let project_list = [
        { imglink: Asteroids, title: "Asteroids", skills: "Haskell, Functional Programming", desc: "Asteroids game created in Haskell", duration: "900"},
        { imglink: LostPets, title: "Lost Pets", skills: "Full Stack Dev, ReactJS, NodeJS, MongoDB", desc: "Allow pet owners to post lost pet ads on an interactive 3D map", duration: "600" },
        { imglink: TradingBot, title: "Trading Bot", skills: "Python, Selenium, Cryptocurrency, Algorithms", desc: "Trading bot that automatically makes real-time profitable transactions", duration: "1100" },
        { imglink: ChessBot, title: "Board Game AI", skills: "Python, Machine Learning", desc: "A board game bot that can play chess against a single player", duration: "800" },
        // { imglink: Asteroids, title: "Asteroids", skills: "Haskell, Functional Programming", desc: "Asteroids game created in Haskell", duration: "600" },
        // { imglink: Asteroids, title: "Asteroids", skills: "Haskell, Functional Programming", desc: "Asteroids game created in Haskell", duration: "900"},

    ]
    return (
        <div className="projects-container" id="projects">
            <input type="checkbox" id="expandAll"></input>
            <div className="projects">
                {project_list.map((project) => {
                    return <Card imglink={project.imglink} title={project.title} skills={project.skills} desc={project.desc} duration={project.duration} key={project.title}></Card>
                })}
            </div>
        </div>
    );
}

export default Projects;