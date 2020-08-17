import React from 'react';
import './Card.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Card(props) {
    AOS.init();
    return (
        <div className="card" data-aos="fade-up" data-aos-duration={props.duration}>
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