import './styles/App.scss'
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './jsx/Accueil';
import About from './jsx/apropos';
import Header from './jsx/Header';
import Main from './jsx/main';
import PropTypes from 'prop-types';
import Footer from './jsx/Footer';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} /> 
      <Route path="*" element={<h1>Erreur 404</h1>} />
    </ Routes>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // `node` signifie tout contenu JSX ou textuel
};

function Layout() {
  return (
    <div>
      <header><Header /></header>
      <main><Main /></main>
      <footer><Footer /></footer>
    </div>
  );
}

export default App
