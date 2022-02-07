import React from "react";
import { useState } from "react/cjs/react.development";
import "./ItemDetail.css"
// Components
import ItemCount from "../ItemCount/ItemCount";

// Img
import fallback from "./../../../../img/products/fallback.png"



const ItemDetail = ({item, loading})=>{
    //Estado del contador
    const [count, setCount] = useState(1)
    //Contexto
    let img
    try{
        img = require(`./../../../../img/products/${item.name+item.id}.png`)
    } catch {
        img =  fallback
    }
    return(
        <div key={"Desc"+item.id} className="itemDetail" >
            <h3 className="descName">{item.name}</h3>
            <img src={img} alt={item.name} />
            <p><span className="tag">Tipo: </span>{item.type}</p>
            <p><span className="tag">Descripción: </span>{item.description}.</p>
            <p><span className="tag">Precio: </span>${item.price}</p>
            <p><span className="tag">Stock: </span>{item.stock}</p>
            {loading && <ItemCount item={item} count={count} setCount={setCount} />}
        </div>
    )
}

export default ItemDetail