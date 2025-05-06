import React, { useState, useEffect } from 'react';
import cielVideo from '../image_video/ciel.mp4'; // adapte le chemin si besoin
import '../style/hom.css'; // on crée ce fichier pour le style

function Hom() {
  // Animation lettre par lettre
  const text = "Bienvenue sur la page Home !";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
      <video
        autoPlay
        loop
        muted
        className="bg-video"
      >
        <source src={cielVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <div className="content">
        {/* Ton contenu habituel ici */}
        <div className="scroll-text">{displayedText}</div>
      </div>
    </div>
  );
}

export default Hom;
