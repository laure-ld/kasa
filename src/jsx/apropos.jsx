import React, { useState } from "react";
import paysage from "../assets/landscapephoto.png";
import "../styles/apropos.scss";
import Button from "./button";
import Paragraphe from "./Paragraphe";

function About() {
    const [openSections, setOpenSections] = useState([]);

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
                <div key={index} className="container">
                    <div className="titre">
                        <h3>{title}</h3>
                        <Button
                            onClick={() => toggleSection(index)}
                            isOpen={openSections.includes(index)}
                        />
                    </div>
                    <Paragraphe index={index} isOpen={openSections.includes(index)} />
                </div>
            ))}
        </section>
    );
}

export default About;
