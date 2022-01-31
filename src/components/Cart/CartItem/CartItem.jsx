import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

const CartItem = ({basketItem, removeBasket})=>{
    const [remove, setRemove] = useState(true)
    const cost = basketItem.quantity * basketItem.item.price
    const removing = ()=>{
        removeBasket(basketItem)
        setRemove(false)
    }
    return(
        <Fragment>
            {remove && <li><button onClick={()=>{removing()}} >X</button>{basketItem.item.name + " - Cantidad: " + basketItem.quantity + " por " + cost}</li>}
        </Fragment>
    )
}

export default CartItem