import React, {useEffect} from "react";
import Cards from "./Cards";
import '../styles/index.scss';
import data from '../appart.json';
import Affiche from '../assets/landscapephoto2.png';
import { useNavigate } from "react-router";


function Accueil() {
    const id = window.localStorage.getItem("selectedId");
    const navigate = useNavigate();
    const logement = data.find((item) => item.id === id);

    useEffect(() => {
        if (id && !logement) {
            console.warn("ID invalide, redirection vers /error");
            navigate("/error");
        }
    }, [id, logement, navigate]);
    
    return (
        <section>
            <div className="Affiche">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={Affiche} alt="photo d'une falaise en bord de mer" />
            </div>
            <div className="gallery">
                    {data.slice(0, 6).map((item) => (
                        <Cards key={item.id} id={item.id} title={item.title} />
                    ))}
            </div>
        </section>
    );
}
export default Accueil;