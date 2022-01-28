import React, {Fragment} from "react";
import Item from "../Item/Item"
import "./ItemList.css";




const greeting = "¡Bienvenidos a El Almacen, donde nos aseguramos de cuidar a sus mascotas y a usted! "
const siteDesc = "En nuestro humilde local proveemos servicios de petshop y adopción con los estándares más altos del mercado. ¡Si el producto no cumple con los requisitos, recibirá una devolución garantizada!"

const ItemList = ({item})=>{
    const products = item
    return(
        <Fragment>
            <h3>Productos</h3>
            <div className="cardContainer" id="cardContainer">
                {products.map(x => <Item item={x} key={"item"+x.name+x.id}/>)}
            </div>
        </Fragment>
    )
}


export default ItemList