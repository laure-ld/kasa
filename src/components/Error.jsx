import React from "react";
import '../styles/error.scss';

function Error() {
    return (
      <div className="error">
        <h4>404</h4>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <a  className="return" href="/accueil">Retourner sur la page d&apos;accueil</a>
      </div>
    );
  }

export default Error;