import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hom from './component/hom';
import Nav from './component/nav';
import Moi from './component/moi'; // <-- Ajoute cette ligne
import ProjectsGrid from './component/ProjectsGrid.jsx';
import Skill from './component/skill.jsx'
import Footer from './component/footer.jsx'
function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname === '/'; // Affiche la navbar sur "/"

  return (
    <>
      {showNavbar && <Nav />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hom />
              <Moi />
              <ProjectsGrid />
              <Skill />
              <Footer />
            </>
          }
        />
        {/* Ajoute ici d'autres routes si besoin */}
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
