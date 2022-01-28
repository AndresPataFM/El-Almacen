import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/bases/NavBar';
import Landing from './components/Landing/Landing';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/bases/Footer';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Landing/>}/>
          <Route path="/nosotros" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
