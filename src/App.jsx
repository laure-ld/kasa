import './styles/App.scss'
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import About from './jsx/apropos';
import Header from './jsx/Header';
import Accueil from './jsx/Accueil';
import PropTypes from 'prop-types';
import Footer from './jsx/Footer';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Accueil /></Layout>} />
      <Route path="/accueil" element={<Layout><Accueil /></Layout>} />
      <Route path="/apropos" element={<Layout><About /></Layout>} /> 
      <Route path="*" element={<h1>Erreur 404</h1>} />
    </ Routes>
  )
}

function Layout({children}) {
  return (
    <div>
      <header><Header /></header>
      <main>{children}</main>
      <footer><Footer /></footer>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired, // `node` signifie tout contenu JSX ou textuel
};

export default App
