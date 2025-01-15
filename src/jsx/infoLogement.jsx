import React from "react";
import data from '../appart.json';
import '../styles/logement.scss'

function InfoLogement() {
    const id = window.localStorage.getItem("selectedId");

    return (
        <section>
            <div>
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
                    if (item.id == id) {
                        return <h3 key={item.id} id={item.id}>
                                {item.tags}
                                </h3>;   
                    }
                })}
            </div>
            <div>
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
            <div>
            <h1>description</h1>
            {data.map((item) => {
                        if (item.id == id) {
                            return <h3 key={item.id} id={item.id}>
                                    {item.description}
                                    </h3>;   
                        }
                })}
            </div>
            <div>
            <h1>Équipements</h1>
            {data.map((item) => {
                        if (item.id == id) {
                            return <h3 key={item.id} id={item.id}>
                                    {item.equipments}
                                    </h3>;   
                        }
                })}
            </div>
        </section>
    )
}

export default InfoLogement;