import React from "react";
import slideL from '../assets/slideL.png';
import slideR from '../assets/slideR.png';
import data from '../appart.json';
import { useState } from "react";

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
        <div>
            <div>
            <button className='buttonL' onClick={handlePrev}>
                    <img 
                        src={slideL}>
                    </img>
                </button>
                <img
                    src={pictures[imgIndex]}
                    alt={`Image ${imgIndex + 1}`}
                    className="carousel-image"
                />
                <button onClick={handleNext}>
                    <img 
                        src={slideR}>
                    </img>
                </button>
            </div> 
        </div>
    )
}


export default ImgLogement;