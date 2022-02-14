import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./CartItem.css"

const CartItem = ({basketItem, onRemove, setBasketChange, changeQuantity})=>{
    const [remove, setRemove] = useState(true)
    const [quantity, setQuantity] = useState(basketItem.quantity)
    const [cost, setCost] = useState(basketItem.quantity * basketItem.item.price)
    const removing = ()=>{
        onRemove(basketItem)
        setRemove(false)
        setBasketChange(true)
    }
    const changeAmount = ()=>{
        changeQuantity(basketItem.item, quantity)
        setCost(quantity*basketItem.item.price)
        setBasketChange(true)
    }
    return(
        <Fragment>
            {remove && <li><div>
                <button onClick={()=>{removing()}} className="remove" >X</button>
                <span>Item:{basketItem.item.name}</span>
                <label htmlFor={basketItem.item.id} >Cantidad: </label>
                <input type="number" defaultValue={basketItem.quantity} onInput={e => setQuantity(e.target.value)} id={basketItem.item.id}/>
                <button onClick={()=>{changeAmount()}} >Cambiar cantidad</button>
                <span> Por: {cost}</span>
                </div></li>}
        </Fragment>
    )
}

export default CartItem