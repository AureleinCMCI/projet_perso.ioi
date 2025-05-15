import React, { useState, useEffect } from 'react';
import Moi from './moi';
import cielVideo from '../image_video/207007_small.mp4';
import '../style/hom.css';

function Hom() {
  const text = "bonjon je m'apelle Aurélien";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Gestion du scroll fluide
  const handleScroll = () => {
    const section = document.getElementById('presentation');
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  useEffect(() => {
    let timeout;
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, 120);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, 80);
    } else if (index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <div className="home-container">
      <video autoPlay loop muted className="bg-video">
        <source src={cielVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      <div className="intro">
        <div className="hello">Bonjour,</div>
        <h1 className="scroll-text">{displayedText}</h1>
        <div className="who-creates">Création moderne et responsive pour web</div>
      </div>

      {/* Icône de souris modifiée pour le scroll fluide */}
    </div>
  );
}

export default Hom;
