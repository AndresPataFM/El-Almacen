import React, {Fragment} from "react";
import {prodList as productList} from "../../data/fakeproductList";

import ItemCard from "../ProductCard/ItemCard";

const greeting = "¡Bienvenidos a El Almacen, donde nos aseguramos de cuidar a sus mascotas y a usted! "
const siteDesc = "En nuestro humilde local proveemos servicios de petshop y adopción con los estándares más altos del mercado. ¡Si el producto no cumple con los requisitos, recibirá una devolución garantizada!"

const ItemListContainer = ({prodList})=>{
    return(
        <Fragment>
            <p>{greeting}</p>
            <p>{siteDesc}</p>
            <div>
                <ItemCard/>
            </div>
        </Fragment>
    )
}

export default ItemListContainer