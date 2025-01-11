import React from "react";
import Cards from "./Cards";
import '../styles/index.scss';
import data from '../appart.json';
import Affiche from '../assets/Affiche.png';

function Accueil() {
    return (
        <section>
            <div className="Affiche">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={Affiche} alt="photo d'une falaise en bord de mer" />
            </div>
            <div className="gallery">
                    {data.slice(0, 6).map((item) => (
                        <Cards key={item.id} title={item.title} />
                    ))}
            </div>
        </section>
    );
}
export default Accueil;