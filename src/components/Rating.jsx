import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starFilled } from "@fortawesome/free-solid-svg-icons";
import PropTypes from  "prop-types";
import '../styles/logement.scss';

function RatingStars({ rating }) {
    const stars = Array(5)
        .fill()
        .map((_, index) =>
            index < rating ? (
                <FontAwesomeIcon className="starFilled" key={index} icon={starFilled} alt="Étoile pleine" />
            ) : (
                <FontAwesomeIcon className="starEmpty" key={index} icon={starFilled} alt="Étoile vide" />
            )
        );

    return <div className="rating-stars">{stars}</div>;
}

RatingStars.propTypes = {
    rating: PropTypes.string.isRequired,
};

export default RatingStars;