import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import hom from './components/hom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/hom" element={<hom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
