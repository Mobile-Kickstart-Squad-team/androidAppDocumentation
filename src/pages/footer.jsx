import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="footer">
            <ul>
                <li>
                    <Link  to="/privacy"> Privacy</Link>
                </li>
            </ul>

            <a href="https://www.facebook.com/groups/625936851276973/"><img src={ require('../images/icons8-facebook-24.png') }  alt="facebook" /></a>
        

        </div>
    );
}

export default Footer;