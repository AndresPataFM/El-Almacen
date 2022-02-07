import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./../../../context/CartContext/CartContext";

import shoppingCart from "./../../../img/ShoppingCart.svg"
import "./CartWidget.css"

const CartWidget = ()=>{
    const {basketLength} = useContext(CartContext)
    return(
        <div>
            <img src={shoppingCart} alt="Carrito de compras" className="shoppingCart"/>
            <span>{basketLength}</span>
        </div>
    )
}

export default CartWidget