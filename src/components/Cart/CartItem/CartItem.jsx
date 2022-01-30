import React from "react";

const CartItem = ({basketItem, removeBasket})=>{
    const cost = basketItem.quantity * basketItem.item.price
    return(
        <li><button onClick={()=>{removeBasket(basketItem)}} >X</button>{basketItem.item.name + " - Cantidad: " + basketItem.quantity + " por " + cost}</li>
    )
}

export default CartItem