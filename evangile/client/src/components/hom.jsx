import React from 'react';
import cielVideo from '../image_video/ciel.mp4'; // adapte le chemin si besoin
import '../style/hom.css';// on crée ce fichier pour le style

function Hom() {
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
        <h1>Bienvenue sur la page Home !</h1>
      </div>
    </div>
  );
}

export default Hom;
