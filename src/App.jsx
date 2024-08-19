// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ani1 from './pages/Ani1';
import Ani2 from './pages/Ani2';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ani1" element={<Ani1 />} />
        <Route path="/ani2" element={<Ani2 />} />
      </Routes>
    </Router>
  );
}

export default App;
