import React from 'react';
import './Footer.scss';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <p>Copyright © {year} Hyun Shim All Rights Reserved</p>
        </div>
    );

}

export default Footer;