import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Item.css";
//Img
import fallback from "./../../../img/products/fallback.png"

const Item = ({item})=>{
    let product = item
    let img
    const navigate = useNavigate()
    const goToItem = () =>{
        navigate(`/item/${item.id}`)
    }
    try{
        img = require(`./../../../img/products/${item.name+item.id}.png`)
    } catch {
        img =  fallback
    }
    return(
        <div className="itemCard" id={"item"+product.name+product.id} key={product.id}>
            <p>{product.name}</p>
            <img src={img} alt={product.name} />
            <p>Precio: ${product.price}</p>
            <button onClick={()=>{goToItem()}}>Detalles</button>
        </div>
    )
}

export default Item