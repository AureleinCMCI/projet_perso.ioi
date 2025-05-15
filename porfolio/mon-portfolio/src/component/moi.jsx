import React from 'react';
import '../style/moi.css';

function Moi() {
  const scrollToSection = () => {
    const section = document.getElementById('presentation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="moi-section-full">
      <div className="presentation-full">
        <div className="avatar-container-full">
          <img
            src="https://i.pravatar.cc/180?img=3"
            alt="Mon avatar"
            className="avatar-full"
          />
        </div>
        
        {/* Première icône (au-dessus du contenu) */}
        <div className="mouse-scroll-container">
          <div
            className="mouse-icon"
            onClick={scrollToSection}
            style={{ cursor: 'pointer' }}
            aria-label="Descendre à la présentation"
            tabIndex={0}
            role="button"
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') scrollToSection()
            }}
          >
            <div className="wheel"></div>
          </div>
        </div>

        <div className="presentation-content-full" id="presentation">
          <h2>Qui suis-je ?</h2>
          <p>
            Bonjour, je suis un jeune développeur web en apprentissage, étudiant à Holberton School.
            Depuis le début de ma formation, j'ai eu l'opportunité de réaliser de nombreux projets.
            Je conçois et réalise des sites web, du cahier des charges à la mise en ligne.
            Je développe principalement en <span className="highlight">Python</span> et j'ai également découvert <span className="highlight">React/JS</span>.
            Actuellement, je travaille à la création d'applications mobiles.
          </p>

          {/* Deuxième icône (sous le texte) */}
          <div className="mouse-scroll-bottom">
            <div
              className="mouse-icon"
              onClick={scrollToSection}
              style={{ cursor: 'pointer' }}
              aria-label="Continuer la navigation"
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') scrollToSection()
              }}
            >
              <div className="wheel"></div>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
    
  );
}

export default Moi;
