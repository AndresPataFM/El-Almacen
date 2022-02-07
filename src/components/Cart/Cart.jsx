import React, { useContext } from "react";
import "./Cart.css"
//Componentes
import CartItemContainer from "./CartItemContainer/CartItemContainer";


const Cart = ()=>{
    return(
        <section className="cartSection" >
            <h2>Canasta</h2>
            <CartItemContainer/>
        </section>
    )
}

export default Cart