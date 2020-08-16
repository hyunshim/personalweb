import React from 'react';
import './Card.scss';

function Card(props) {
    return (
        <div className="card">
            <div className="image">
                <img src={props.imglink} />
            </div>

            <div className="description">
                <p className="title">{props.title}</p>
                <p className="skills">{props.skills}</p>
                <p className="desc">{props.desc}</p>
            </div>

        </div>
    );
}

export default Card;