import React, {Fragment} from "react";
import "./ItemCard.css";

import ItemCount from "./ItemCount";
import fakeproductList from "../../data/fakeproductList.js"

const ItemCard = ()=>{
    let product = fakeproductList[0]
    return(
        <Fragment>
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