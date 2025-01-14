import React from "react";
import PropTypes from 'prop-types';
import '../styles/Main.scss';


function Cards({title, id}) {

    const handleClick = () => {
        window.localStorage.setItem("selectedId", id);
        console.log(`ID stocké : ${id}`);
    };

    return (
        <a href="/logement" onClick={handleClick}>
            <div className="cards">
                <h3 className="cards-title">{title}</h3>
            </div>
        </a>
    );
}
Cards.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Cards;