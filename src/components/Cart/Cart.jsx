import React from "react";
import "./Cart.css"
//Componentes
import CartItemContainer from "./CartItemContainer/CartItemContainer";

const Cart = ({basket, removeBasket, buyBasket})=>{
    return(
        <section className="cartSection" >
            <h2>Canasta</h2>
            <CartItemContainer basket={basket} removeBasket={removeBasket} buyBasket={buyBasket} />
        </section>
    )
}

export default Cart