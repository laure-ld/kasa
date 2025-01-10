import React from "react";
import Cards from "./Cards";
import '../styles/index.scss';
import data from '../appart.json';

function Main() {
    return (
        <section>
            <div className="Affiche">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                {data.map((item) => (
                    <Cards key={item.id} title={item.title} />
                ))}
            </div>
        </section>
    );
}
export default Main;