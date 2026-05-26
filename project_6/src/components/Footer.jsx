import React from 'react';
import logo from '../assets/logo.svg';
function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-ul">
                <li className="footer-logo"><img src={logo} alt="Logo" /></li>
                <li className="footer-adress-wrap">
                    <ul className="footer-ul-adress">
                        <li><h4 className="footer-adress-h4">Address</h4></li>
                        <li className="footer-adress-content">Svobody str. 35</li>
                        <li className="footer-adress-content">Kyiv</li>
                        <li className="footer-adress-content">Ukraine</li>
                    </ul>
                </li>
                <li ><a className="footer-adress-h4" href="mailto:contact@example.com">Contact us</a></li>
            </ul>
        </footer>
    );
}

export default Footer;