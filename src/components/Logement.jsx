import React from "react";
import ImgLogement from "./PictureLogement";
import InfoLogement from "./HousingInformation";

function Logement() {
    return (
        <div className="logement">
            <ImgLogement />
            <InfoLogement />
        </div>
    )
}

export default Logement