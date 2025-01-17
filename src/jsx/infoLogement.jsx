import React from "react";
import data from '../appart.json';
import '../styles/logement.scss';
import Button from "./button";

function InfoLogement() {
    const id = window.localStorage.getItem("selectedId");

    return (
        <section id="container-info">
            <div className="first-container">
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
                    <div className="host-identity">
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
                    </div>
                    {data.map((item) => {
                            if (item.id == id) {
                                return <p key={item.id} id={item.id}>
                                        {item.rating}
                                        </p>;   
                            }
                    })}
                </div>
            </div>
            <div className="secondary-info">
                <div className="description">
                <h4>description</h4>
                <Button  className='effect'/>
                {data.map((item) => {
                            if (item.id == id) {
                                return <span key={item.id} id={item.id} >
                                        {item.description}
                                        </span>;   
                            }
                    })}
                </div>
                <div className="equipement">
                <h4>Équipements</h4>
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
            </div>
        </section>
    )
}

export default InfoLogement;