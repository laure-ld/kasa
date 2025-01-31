import React, {useState} from "react";
import data from '../appart.json';
import '../styles/logement.scss';
import Button from "./ButtonCollapse";
import RatingStars from "./Rating";
import { useParams } from "react-router-dom";

function InfoLogement() {
    const { id } = useParams();
    const logement = data.find((item) => item.id == id);
    
    const [openSections, setOpenSections] = useState({
        description: false,
        equipement: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };
    
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
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt={`Portrait de ${logement.host.name}`} />
                </div>
                <RatingStars rating={logement.rating} />
                </div>
            </div>
            <div className="secondary-info">
                <div className="description">
                    <div className="title">
                        <h4>description</h4>
                        <Button
                            onClick={() => toggleSection("description")}
                            isOpen={openSections.description}
                        />
                    </div>
                    <p className={`collapse ${openSections.description ? "open" : ""}`}>
                        {logement.description}
                    </p> 
            </div>
                <div className="equipement">
                    <div className="title">
                        <h4>Équipements</h4>
                        <Button
                            onClick={() => toggleSection("equipement")}
                            isOpen={openSections.equipement}
                        />
                    </div>
                        <ul className={`collapse ${openSections.equipement ? "open" : ""}`}>
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