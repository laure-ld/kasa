import React from "react";
import PropTypes from 'prop-types';

function Cards({title}) {
    return (
        <div className="cards">
            <p className="cards-title">{title}</p>
        </div>
    );
}

Cards.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Cards;