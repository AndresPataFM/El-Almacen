import React from "react";

//Componentes
import CartItemContainer from "./CartItemContainer/CartItemContainer";

const Cart = ({basket, removeBasket, buyBasket})=>{
    console.log(basket)
    return(
        <section>
            <h2>Canasta</h2>
            <p>Actualmente hay problemas con el servidor por lo que no se puede acceder a esta funcionalidad.</p>
            <CartItemContainer basket={basket} removeBasket={removeBasket} buyBasket={buyBasket} />
        </section>
    )
}

export default Cart