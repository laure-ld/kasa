import vite from '../assets/vite.png';
import Vector from '../assets/Vector.png';
import React from 'react';
import { useState } from 'react';



function Button() {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <button onClick={handleClick}>
            <img 
                src={isOpen ? vite : Vector} 
                alt={isOpen ? "Image ouverte" : "Image fermée"}
            />
        </button>
    )
    
}

export default Button;