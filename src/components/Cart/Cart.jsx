import React from "react";
import "./Cart.css"
//Componentes
import CartItemContainer from "./CartItemContainer/CartItemContainer";

const Cart = ({basket, onRemove, onBuy})=>{
    return(
        <section className="cartSection" >
            <h2>Canasta</h2>
            <CartItemContainer basket={basket} onRemove={onRemove} onBuy={onBuy} />
        </section>
    )
}

export default Cart