import React from "react";
import PropTypes from 'prop-types';
import data from '../paragraph.json';
import '../styles/apropos.scss';

function Paragraphe({isOpen}) {

    return (
        <div className='text' style={{ display: isOpen ? 'block' : 'none' }}>
            {data.map((item, index) => (
                <p key={index}>{item.description}</p>
            ))}
        </div>
    )
}

Paragraphe.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default Paragraphe;