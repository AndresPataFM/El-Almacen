import React, {Fragment, useState} from "react";
import prodList from "../../data/fakeproductList";
import "./ItemListContainer.css";

import ItemCard from "../ProductCard/ItemCard";

const greeting = "¡Bienvenidos a El Almacen, donde nos aseguramos de cuidar a sus mascotas y a usted! "
const siteDesc = "En nuestro humilde local proveemos servicios de petshop y adopción con los estándares más altos del mercado. ¡Si el producto no cumple con los requisitos, recibirá una devolución garantizada!"

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const loading =  function(){
        const fakeLoading =  new Promise(function(resolve) {
                setTimeout(function(){
                    resolve(setProducts(prodList))
                }, 2000);
            });
        return fakeLoading
    }
    loading().then()
    return(
        <Fragment>
            <p>{greeting}</p>
            <p>{siteDesc}</p>
            <div className="cardContainer" id="cardContainer">
                {products.map(x => <ItemCard item={x} />)}
            </div>
            
        </Fragment>
    )
}

//prodList.map(x => <ItemCard item={x} />)


export default ItemListContainer