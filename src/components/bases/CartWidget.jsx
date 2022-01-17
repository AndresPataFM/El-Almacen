import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import "./CartWidget.css"

import shoppingCart from "./../../img/ShoppingCart.svg"

const CartWidget = ()=>{
    return(
        <Fragment>
            <img src={shoppingCart} alt="Carrito de compras" className="shoppingCart"/>
        </Fragment>
    )
}

export default CartWidget