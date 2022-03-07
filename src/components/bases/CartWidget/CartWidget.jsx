import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./../../../context/CartContext/CartContext";

import shoppingCart from "./../../../img/ShoppingCart.svg"
import "./CartWidget.css"

const CartWidget = ()=>{
    const {basketLength} = useContext(CartContext)
    const [empty, setEmpty] = useState(false)
    useEffect(()=>{
        const isEmpty=()=>{
            if(basketLength !== 0){
                setEmpty(true)
            } else {
                setEmpty(false)
            }
        }
        isEmpty()
    },[basketLength])
    return(
        <div>
            {empty && <div>
                <img src={shoppingCart} alt="Carrito de compras" className="shoppingCart"/>
                <span className="widgetCounter">{basketLength}</span>
            </div>}
        </div>
    )
}

export default CartWidget