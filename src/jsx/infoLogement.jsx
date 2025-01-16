import React from "react";
import data from '../appart.json';
import '../styles/logement.scss';

function InfoLogement() {
    const id = window.localStorage.getItem("selectedId");

    return (
        <section id="Container-info">
            <div className="primary-info">
                {data.map((item) => {
                    if (item.id == id) {
                        return <h1 key={item.id} id={item.id}>
                                {item.title}
                                </h1>;   
                    }
                })}
                {data.map((item) => {
                    if (item.id == id) {
                        return <h2 key={item.id} id={item.id}>
                                {item.location}
                                </h2>;   
                    }
                })}
                {data.map((item) => {
                    if (item.id === id) {
                        return (
                        <div key={item.id} id={item.id} className="tags">
                            {item.tags.map((tag, index) => (
                            <span key={index}>
                                {tag}
                            </span>
                            ))}
                        </div>
                        );
                    }
                    return null;
                    })}
            </div>
            <div className="host">
                {data.map((item) => {
                        if (item.id == id) {
                            return <h3 key={item.id} id={item.id}>
                                    {item.host.name}
                                    </h3>;   
                        }
                })}
                {data.map((item) => {
                        if (item.id == id) {
                            return <img key={item.id} id={item.id}
                                    src={item.host.picture}/>
                        }
                })}
                {data.map((item) => {
                        if (item.id == id) {
                            return <h3 key={item.id} id={item.id}>
                                    {item.rating}
                                    </h3>;   
                        }
                })}
            </div>
            <div className="description">
            <h1>description</h1>
            {data.map((item) => {
                        if (item.id == id) {
                            return <h3 key={item.id} id={item.id}>
                                    {item.description}
                                    </h3>;   
                        }
                })}
            </div>
            <div className="équipement">
            <h1>Équipements</h1>
            {data.map((item) => {
                    if (item.id === id) {
                        return (
                        <div key={item.id} id={item.id}>
                            {item.equipments.map((equipments, index) => (
                            <span key={index}>
                                {equipments}
                            </span>
                            ))}
                        </div>
                        );
                    }
                    return null;
                    })}
            </div>
        </section>
    )
}

export default InfoLogement;