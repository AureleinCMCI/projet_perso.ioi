// src/components/Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css'; // On va mettre le style ici

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Bouton hamburger pour ouvrir/fermer le menu */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        &#9776;
      </button>
      <nav className={`side-nav ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          &times;
        </button>
        <Link to="/hom" onClick={() => setOpen(false)}>Accueil</Link>
        <Link to="/about" onClick={() => setOpen(false)}>À propos</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        {/* Ajoute d'autres liens ici */}
      </nav>
      {/* Overlay pour fermer le menu en cliquant à côté */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </div>
  );
}

export default Nav;
