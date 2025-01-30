import React from "react";
import slideL from '../assets/left_arrow.png';
import slideR from '../assets/right_arrow.png';
import data from '../appart.json';
import { useState } from "react";
import '../styles/logement.scss';

function ImgLogement() {

    const  id = window.localStorage.getItem("selectedId");

    const logement = data.find((item) => item.id == id);
    const pictures = logement.pictures;

    const [imgIndex, setImgIndex] = useState(0);
    const handlePrev = () => {
        setImgIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };
    
    const handleNext = () => {
        setImgIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <section id="carrousel">
            <div id="carrousel-container">
            {pictures.length > 1 && (
            <div id="container-btn">
                <button onClick={handlePrev}>
                    <img 
                        src={slideL}
                        alt="Précédent"
                    />
                </button>
                <button onClick={handleNext}>
                    <img 
                        src={slideR}
                        alt="Suivant"
                    />
                </button>
            </div>
            )}
            <img
                src={pictures[imgIndex]}
                alt={`Image ${imgIndex + 1}`}
                className="carousel-image"
            />
            </div>
        </section>
    )
}


export default ImgLogement;