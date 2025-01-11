import React from 'react';
import paysage from '../assets/paysage.png';
import '../styles/apropos.scss';
import vite from '../assets/vite.png';

function About() {
    return (
        <section>
            <div className="Affiche">
                <img src={paysage} alt="photo d'une falaise en bord de mer" />
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <h3>Fiabilité<button ><img className='button' src={vite}></img></button></h3>
                            <p>Les annonces postées sur Kasa garatissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                        </li>
                        <li>
                            <h3>Respect<button ><img className='button' src={vite}></img></button></h3>
                            <p>La bienveillance fait partie des valeurs fondtrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.</p>
                        </li>
                        <li>
                            <h3>Service<button ><img className='button' src={vite}></img></button></h3>
                            <p>La qualité du service est au coeur  de notre engagement chez Kasa. Nous veillerons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</p>
                        </li>
                        <li>
                            <h3>Sécurité<button ><img className='button' src={vite}></img></button></h3>
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifieer que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default About;