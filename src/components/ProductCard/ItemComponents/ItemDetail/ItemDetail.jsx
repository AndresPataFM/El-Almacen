import React from "react";
import "./ItemDetail.css"
// Components
import ItemCount from "../ItemCount/ItemCount";
// Img
import fallback from "./../../../../img/products/fallback.png"



const ItemDetail = ({item, basket, addBasket, removeBasket})=>{
    let img
    try{
        img = require(`./../../../../img/products/${item.name+item.id}.png`)
    } catch {
        img =  fallback
    }
    return(
        <div key={"Desc"+item.id}>
            <h3 className="descName">{item.name}</h3>
            <img src={img} alt={item.name} />
            <p><span className="tag">Tipo: </span>{item.type}</p>
            <p><span className="tag">Descripción: </span>{item.description}.</p>
            <p><span className="tag">Precio: </span>${item.price}</p>
            <ItemCount item={item} addBasket={addBasket}/>
        </div>
    )
}

export default ItemDetail