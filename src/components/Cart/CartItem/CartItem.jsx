import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./CartItem.css"

const CartItem = ({basketItem, removeBasket, setBasketChange})=>{
    const [remove, setRemove] = useState(true)
    const cost = basketItem.quantity * basketItem.item.price
    const removing = ()=>{
        removeBasket(basketItem)
        setRemove(false)
        setBasketChange(true)
    }
    return(
        <Fragment>
            {remove && <li><button onClick={()=>{removing()}} className="remove" >X</button>{basketItem.item.name + " - Cantidad: " + basketItem.quantity + " por " + cost}</li>}
        </Fragment>
    )
}

export default CartItem