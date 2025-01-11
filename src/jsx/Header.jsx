import React from 'react';
import '../styles/header.scss';
import Logo from '../assets/LOGO.png';

function Header() {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li className="home" key="home">
                        <a href="/">Accueil</a>
                    </li>
                    <li className="about" key="about">
                        <a href="./apropos">A propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;