import React from "react";
import data from '../appart.json';

function InfoLogement() {
    const id = window.localStorage.getItem("selectedId");

    return (
        <section>
            <div>
                {data.map((item) => {
                    if (item.id == id) {
                        return <h3 key={item.id} id={item.id}>
                                {item.title}
                                </h3>;   
                    }
                })}
                {data.map((item) => {
                    if (item.id == id) {
                        return <h3 key={item.id} id={item.id}>
                                {item.location}
                                </h3>;   
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
                            return <h3 key={item.id} id={item.id}>
                                    {item.host.picture}
                                    </h3>;   
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
        </section>
    )
}

export default InfoLogement;