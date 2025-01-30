import React from "react";
import '../styles/Footer.scss';
import footer from '../assets/FooterDesktop.png';
import footerPhone from '../assets/FooterPhone.png';

function Footer() {
    return (
        <div className="footer">
            <img src={footer} className="footer-desktop" alt="Footer"/>
            <img src={footerPhone} className="footer-mobile" alt="Footer Mobile"/>
        </div>
    )
}

export default Footer