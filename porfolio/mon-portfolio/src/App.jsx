import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hom from './component/hom';
import Nav from './component/nav';
import Moi from './component/moi';
import ProjectsGrid from './component/ProjectsGrid.jsx';
import Skill from './component/skill.jsx';
import Footer from './component/footer.jsx';

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname === '/';

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
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/projet_perso.io"> {/* Ajout du basename */}
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
