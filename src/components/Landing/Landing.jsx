import React from "react";
import "./Landing.css"

import ItemListContainer from "../ProductCard/ItemListContainer/ItemListContainer";

const greeting = "¡Bienvenidos a El Almacen, donde nos aseguramos de cuidar a sus mascotas y a usted! "
const siteDesc = "En nuestro humilde local proveemos servicios de petshop y adopción con los estándares más altos del mercado. ¡Si el producto no cumple con los requisitos, recibirá una devolución garantizada!"

const Landing = ({prodList})=>{
    return(
        <section className="mainLanding">
            <p>{greeting}</p>
            <p>{siteDesc}</p>
            <ItemListContainer prodList={prodList}/>
        </section>
    )
}

export default Landing