import React from 'react';
import './Summary.scss';
import Me from "../../assets/img/me.jpg";

function Summary() {
    return (
        <div className="summary">
            <img src={Me} />
            <p className="name">Hyun Shim</p>
            <p className="desc">Hi! I'm a <span className="bold">Computer Science</span> + <span className="bold">Software Engineering</span> student who is passionate about coding <span className="bold">elegant</span>, <span className="bold">efficient</span>, and <span className="bold">easy-to-maintain</span> programs.</p>
            <p className="desc">My passion lies in finding innovative solutions to problems and making them accessible through usability focused applications.</p>
        </div>
    );
}

export default Summary;