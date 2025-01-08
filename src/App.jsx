import './styles/App.css'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/">A propos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/" element={<h1>A propos</h1>} />
        <Route path="/" element={<h1>Erreur 404</h1>} />
      </Routes>
    </div>
    </>
  )
}

export default App
