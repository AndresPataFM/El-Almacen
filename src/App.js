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
import Category from './components/Category/Category';
//Libraries
import Swal from 'sweetalert2';


//Lista de productos
const prodList = [
  {name:"Antipulgas Gato", id:"001", type:"Medicinal", price:"450", stock:"32", description:"Antipulgas felino Frontline Plus",},
  {name:"Antipulgas Perro", id:"002", type:"Medicinal", price:"450", stock:"28", description:"Antipulgas Canino Frontline Plus",},
  {name:"Antiparasitario", id:"003", type:"Medicinal", price:"370", stock:"15", description:"Antiparasitario interno Oral Paraqueños",},
  {name:"Alimento Gato Joven", id:"004", type:"Medicinal", price:"4530", stock:"18", description:"Alimento para gatos Kitten de Royal Canin",},
  {name:"Alimento Gato Adulto", id:"005", type:"Alimento", price:"3900", stock:"27", description:"Alimento para gatos adultos Royal Canin Active Life",},
  {name:"Alimento Gato Edad Avanzada", id:"006", type:"Alimento", price:"4620", stock:"15", description:"Alimento para gatos de edad avanzada Royal Canin Mature Consult Stage 1",},
  {name:"Alimento Perro Joven", id:"007", type:"Alimento", price:"4450", stock:"22", description:"Alimento para perros jóvenes de tamaño mediano Royal Canin Puppy Medium.",},
  {name:"Alimento Perro Adulto", id:"008", type:"Alimento", price:"3780", stock:"24", description:"Alimento para perros adultos de tamaño mediano Royal Canin Adult Medium.",},
  {name:"Alimento Perro Edad Avanzada", id:"009", type:"Alimento", price:"4370", stock:"11", description:"Alimento para perros de edad avanzada de tamaño mediano Royal Canin Adgeing",},
  {name:"Juguete de Ratón", id:"010", type:"Juguete", price:"170", stock:"10", description:"Un juguete de ratón de plastico y tela hipoalergénicos",},
  {name:"Hueso Comestible", id:"011", type:"Alimento", price:"450", stock:"7", description:"12(Doce) unidades de huesos comestibles de cuero para perros",},
  {name:"Pelota", id:"012", type:"Juguete", price:"210", stock:"9", description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)",},
]

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
      Swal.fire({
        title: `Felicitaciones`,
        text: `Se ha agregado ${quantity} unidad/es de ${item.name} a su canasta.`,
        width: 600,
        padding: '3em',
        color: '#8A2BE2',
        backdrop: `
            rgba(138,43,226,0.4)
        `
    })
    }
  }
  const buyBasket = (bskt, total)=>{
    let basketCount = bskt.length
    if(basketCount<1){
      Swal.fire(
        'Error',
        'Necesita agregar productos a su canasta para comprar.',
        'error'
      )
    } else {
      let tempProducts = products
      tempProducts.forEach(x=>{
        bskt.forEach(y=>{
          if(y.item.code === x.code){
            x.stock-=y.quantity
          }
        })
      })
      Swal.fire(
        'Gracias por comprar',
        `Ha comprado ${basketCount} productos distintos por un total de $${total}`,
        'success'
      )
      setBasket([])
      setProducts(tempProducts)
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
        <NavBar size={basket.length}/>
        <Routes>
          <Route path="/" exact element={<Landing prodList={products}/>}/>
          <Route path="/canasta" element={<Cart basket={basket} removeBasket={removeBasket} buyBasket={buyBasket}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer prodList={products} addBasket={addBasket}/>}/>
          <Route path="/category/:type" element={<Category prodList={products} addBasket={addBasket}/>}/>
          <Route path="/nosotros" element={<AboutUs/>}/>
          <Route path="/adopcion" element={<Adoption/>}/>
          <Route path="/contacto" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
