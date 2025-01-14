import paysage from '../assets/paysage.png';
import '../styles/apropos.scss';
import Button from './button';
import React from "react";
import Paragraphe from './Paragraphe';
import { useState } from 'react';

function About() {
    const [openSections, setOpenSections] = useState([false, false, false, false]);

    const toggleSection = (index) => {
        if (openSections.includes(index)) {
            setOpenSections(openSections.filter((i) => i !== index));
        } else {
            setOpenSections([...openSections, index]);
        }
    };

    return (
        <section>
            <div className="Affiche">
                <img src={paysage} alt="photo d'une falaise en bord de mer" />
            </div>
            {["Fiabilité", "Respect", "Service", "Sécurité"].map((title, index) => (
                <div key={index} className='container'>
                    <div className='titre'>
                        <h3>{title}</h3>
                        <Button className='effect' onClick={() => toggleSection(index)} isOpen={openSections[index]} />
                    </div>
                    <Paragraphe isOpen={openSections.includes(index)} />
                </div>
            ))}
        </section>
    );
}


export default About;