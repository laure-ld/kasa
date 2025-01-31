import React, {useEffect} from "react";
import ImgLogement from "./PictureLogement";
import InfoLogement from "./HousingInformation";
import data from "../appart.json";
import { useParams, useNavigate } from "react-router-dom";

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = data.find((item) => String(item.id) === String(id));

    useEffect(() => {
        if (!logement) {
            console.warn("ID invalide, redirection vers /error");
            navigate("/error");
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    return (
        <div className="logement">
            <ImgLogement />
            <InfoLogement />
        </div>
    )
}

export default Logement