import React, {Fragment} from "react";
import "./ItemCard.css";

import ItemCount from "./ItemCount";

const ItemCard = ({item})=>{
    let product = item
    return(
        <Fragment>
            <button>Ver detalles(en progreso)</button>
            <p>{product.name}</p>
            <p>{product.code}</p>
            <p>{product.type}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <ItemCount stock={product.stock}/>
        </Fragment>
    )
}

export default ItemCard