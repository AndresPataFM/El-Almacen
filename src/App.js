import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import './App.css';
import NavBar from './components/bases/NavBar/NavBar';
import Footer from './components/bases/Footer/Footer';
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import AboutUs from './components/AboutUs/AboutUs';
import Adoption from './components/Adoption/Adoption';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ProductCard/ItemComponents/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Landing/>}/>
          <Route path="/canasta" element={<Cart/>}/>
          <Route path="/:type/:id" element={<ItemDetailContainer/>}/>
          <Route path="/nosotros" element={<AboutUs/>}/>
          <Route path="/adopcion" element={<Adoption/>}/>
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
