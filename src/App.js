import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import './App.css';
import Footer from './components/bases/Footer/Footer';
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ProductCard/ItemComponents/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Category/Category';
//Context
import { CartProvider } from './context/CartContext/CartContext';
import NavSetup from './layout/NavSetup';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavSetup/>
        <Routes>
          <Route path="/" exact element={<Landing />}/>
          <Route path="/canasta" element={<Cart />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/category/:type" element={<Category  />}/>
          <Route path="/nosotros" element={<AboutUs/>}/>
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
