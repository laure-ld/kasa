import React from "react";
import PropTypes from "prop-types";
import vite from "../assets/arrow.png";
import "../styles/apropos.scss";

function Button({ onClick, isOpen }) {
    return (
        <button className="button" onClick={onClick}>
            <img
                src={isOpen ? vite : vite}
                alt={isOpen ? "Image ouverte" : "Image fermée"}
                style={{
                    transform: `rotate(${isOpen ? 180 : 0}deg)`, 
                    transition: "transform 0.5s ease-in-out",
                }}
            />
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Button;
