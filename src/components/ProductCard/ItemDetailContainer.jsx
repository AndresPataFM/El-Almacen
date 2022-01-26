import React, {Fragment, useState} from "react";
import "./ItemDetailContainer.css"
import fallback from "./../../img/products/fallback.png"


const ItemDetailContainer = ({item})=>{
    let img
    try{
        img = require(`./../../img/products/${item.name+item.code}.png`)
    } catch {
        img =  fallback
    }
    // const img = require(`./../../img/products/${item.name+item.code}.png`)
    return(
        <Fragment>
            <div key={"Desc"+item.code}>
                <img src={img} alt={item.name} />
                <p><span className="tag">Tipo: </span>{item.type}</p>
                <p><span className="tag">Descripción: </span>{item.description}.</p>
                <p><span className="tag">Precio: </span>${item.price}</p>
            </div>
        </Fragment>
    )
}

export default ItemDetailContainer