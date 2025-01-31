import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Accueil from './components/Accueil';
import Footer from './components/Footer';
import Error from './components/Error';
import Logement from './components/Logement';
import PropTypes from 'prop-types';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      <Route path="/Accueil" element={<Layout><Accueil /></Layout>} />
      <Route path="/About" element={<Layout><About /></Layout>} /> 
      <Route path="/Logement/:id" element={<Layout><Logement /></Layout>} /> 
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
