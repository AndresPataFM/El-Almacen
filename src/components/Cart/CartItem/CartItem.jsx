import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./CartItem.css"

const CartItem = ({basketItem, onRemove, changeQuantity})=>{
    const [remove, setRemove] = useState(true)
    const [quantity, setQuantity] = useState(basketItem.quantity)
    const [cost, setCost] = useState(basketItem.quantity * basketItem.item.price)
    const removing = ()=>{
        onRemove(basketItem)
        setRemove(false)
    }
    const changeAmount = ()=>{
        changeQuantity(basketItem.item, quantity)
        setCost(quantity*basketItem.item.price)
    }
    return(
        <Fragment>
            {remove && <li className="cartItem"><div>
                <button onClick={()=>{removing()}} className="remove" >X</button>
                <span><b>Item: </b><i>{basketItem.item.name}</i></span>
                <span><b> | </b></span>
                <label htmlFor={basketItem.item.id} >Cantidad: </label>
                <input type="number" defaultValue={basketItem.quantity} onInput={e => setQuantity(e.target.value)} id={basketItem.item.id}/>
                <button onClick={()=>{changeAmount()}} ><b>⭮</b></button>
                <span><b> | </b></span>
                <span> Por: <b>${cost}</b></span>
                </div></li>}
        </Fragment>
    )
}

export default CartItem