import React from "react";
import PropTypes from 'prop-types';
import '../styles/Main.scss';

function Cards({title}) {
    return (
        <div className="cards">
            <h3 className="cards-title">{title}</h3>
        </div>
    );
}

Cards.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Cards;