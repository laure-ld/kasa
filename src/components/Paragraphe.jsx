import React from "react";
import PropTypes from "prop-types";
import data from "../paragraph.json";
import "../styles/apropos.scss";

function Paragraphe({ index, isOpen }) {
    return (
        <div className={`collapse-section ${isOpen ? "open" : ""}`}>
            <p>{data[index]?.description}</p>
        </div>
    );
}

Paragraphe.propTypes = {
    index: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Paragraphe;
