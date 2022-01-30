import React, { useState } from 'react';
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
//Data
import prodList from "./data/fakeProductList"
//Libraries
import Swal from 'sweetalert2';

function App() {
  //Productos
  const [products, setProducts] = useState(prodList)
  //Canasta
  const [basket, setBasket] = useState([])
  //Funcion que agrega productos a la canasta
  const addBasket = (item, quantity)=>{
    const exist = products.find(x => x === item)
    const alreadyBasket = basket.find(x =>x.item === item)
    if(alreadyBasket){
      Swal.fire(
        'Ese producto ya se encuentra en su canasta',
        'Para modificarlo vaya a su canasta por favor',
        'error'
      )
    } else if(exist){
      let tempBasket = basket
      tempBasket.push({item: item, quantity: quantity})
      setBasket(tempBasket)
    }
  }
  //Funcion que remueve productos de la canasta
  const removeBasket = (basketItem)=>{
    const alreadyBasket = basket.find(x =>x === basketItem)
    if(alreadyBasket){
      let index = basket.indexOf(basketItem)
      let tempBasket = basket
      tempBasket.splice(index, 1)
      setBasket(tempBasket)
    }
  }
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Landing prodList={products}/>}/>
          <Route path="/canasta" element={<Cart basket={basket} removeBasket={removeBasket}/>}/>
          <Route path="/:type/:id" element={<ItemDetailContainer prodList={products} addBasket={addBasket}/>}/>
          <Route path="/nosotros" element={<AboutUs/>}/>
          <Route path="/adopcion" element={<Adoption/>}/>
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
