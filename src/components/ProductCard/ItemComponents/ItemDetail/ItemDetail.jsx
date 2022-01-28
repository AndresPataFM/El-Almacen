import React from "react";
import "./ItemDetail.css"
import fallback from "./../../../../img/products/fallback.png"


const ItemDetail = ({item})=>{
    let img
    try{
        img = require(`./../../../../img/products/${item.name+item.id}.png`)
    } catch {
        img =  fallback
    }
    return(
        <div key={"Desc"+item.id}>
            <img src={img} alt={item.name} />
            <p><span className="tag">Tipo: </span>{item.type}</p>
            <p><span className="tag">Descripción: </span>{item.description}.</p>
            <p><span className="tag">Precio: </span>${item.price}</p>
        </div>
    )
}

export default ItemDetail