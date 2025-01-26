import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss';
import Logo from '../assets/LOGO.png';

function Header() {

    return (
        <header className="header">
            <img className="logo" src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/accueil" className={({ isActive }) => (isActive ? "active" : "")}>
                        Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/apropos" className={({ isActive }) => (isActive ? "active" : "")}>
                        A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;