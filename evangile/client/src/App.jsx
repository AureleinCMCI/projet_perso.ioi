import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Hom from './components/hom';
import Nav from './components/nav'; // Assure-toi d'avoir ce composant
import './style/login.css';
function AppContent() {
  const location = useLocation();

  // Afficher la navbar seulement sur /hom
  const showNavbar = location.pathname === '/hom';

  return (
    <>
      {showNavbar && <Nav />}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/hom" element={<Hom />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
