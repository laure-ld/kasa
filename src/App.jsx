import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import About from './jsx/apropos';
import Header from './jsx/Header';
import Accueil from './jsx/Accueil';
import PropTypes from 'prop-types';
import Footer from './jsx/Footer';
import Error from './jsx/Error';
import Logement from './jsx/logement';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      <Route path="/accueil" element={<Layout><Accueil /></Layout>} />
      <Route path="/apropos" element={<Layout><About /></Layout>} /> 
      <Route path="/logement" element={<Layout><Logement /></Layout>} /> 
      <Route path="*" element={<Layout><Error /></Layout>} />
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
  children: PropTypes.node.isRequired,
};

export default App
