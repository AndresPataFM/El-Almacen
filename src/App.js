import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/bases/NavBar';
import Landing from './components/Landing/Landing';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/El-Almacen" exact element={<Landing/>}/>
          <Route path="/El-Almacen/nosotros" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
