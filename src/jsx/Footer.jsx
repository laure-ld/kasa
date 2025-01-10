import React from "react";
import '../styles/Footer.scss';
import footer from '../assets/footer.png';

function Footer() {
    return (
        <div className="footer">
            <img src={footer}></img>
        </div>
    )
}

export default Footer