import vite from '../assets/vite.png';
import Vector from '../assets/Vector.png';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/apropos.scss';

function Button({onClick,isOpen}) {
    return  <button className='button' onClick={() => { onClick(); }}>
                <img 
                    src={isOpen ? vite : Vector}
                    alt={isOpen ? "Image ouverte" : "Image fermée"}>
                </img>
            </button>;
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
export default Button;