import React from "react";
import data from '../appart.json';
import '../styles/logement.scss';
import Button from "./button";

function InfoLogement() {
    const id = window.localStorage.getItem("selectedId");
    const logement = data.find((item) => item.id == id);

    return (
        <section id="container-info">
            <div className="first-container">
                <div className="primary-info">
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="host">
                <div className="host-identity">
                    <h3>{logement.host.name}</h3>
                    <img src={logement.host.picture} alt={`Portrait de ${logement.host.name}`} />
                </div>
                <p>{logement.rating}</p>
                </div>
            </div>
            <div className="secondary-info">
                <div className="description">
                    <div className="title">
                        <h4>description</h4> 
                        <Button/>   
                    </div>
                    <p>{logement.description}</p>
                </div>
                <div className="equipement">
                    <div className="title">
                        <h4>Équipements</h4>
                        <Button />
                    </div>
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default InfoLogement;