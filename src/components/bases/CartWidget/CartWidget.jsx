import React from "react";

import "./CartWidget.css"

import shoppingCart from "./../../../img/ShoppingCart.svg"

const CartWidget = ()=>{
    return(
        <img src={shoppingCart} alt="Carrito de compras" className="shoppingCart"/>
    )
}

export default CartWidget