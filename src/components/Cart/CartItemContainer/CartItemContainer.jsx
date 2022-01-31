import React, { useState, useEffect } from 'react';
//Components
import CartItem from "../CartItem/CartItem";

const CartItemContainer = ({basket, removeBasket, buyBasket})=>{
    const [basketTotal, setBasketTotal] = useState(0)
    const [basketState, setBasketState] = useState(false)
    useEffect(()=>{
        const getTotal =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                //Se fija si la canasta esta vacia
                const checkBasket = ()=>{
                    const exist = basket.length
                    if(exist>0){
                        setBasketState(true)
                    }}
                    checkBasket()
                    //calcula el total de la canasta
                    const calculateTotal = ()=>{
                        let total = 0
                        basket.forEach(x => {
                            let itemTotal = x.item.price * x.quantity
                            total += itemTotal
                        });
                        console.log(total)
                        setBasketTotal(total)
                    }
                basketState ? resolve(calculateTotal()) : reject("basket is empty")
            }, 2000)
        });
        getTotal.then()
    }, [basketState, basket]);
    return(
        <div>
            <ul>
                {basket.map(x => <CartItem basketItem={x} removeBasket={removeBasket} key={"basketItem"+x.item.id}/>)}
                <li>Por un total de: ${basketTotal}</li>
            </ul>
            <button onClick={()=>{buyBasket(basket, basketTotal)}}>Comprar</button>
        </div>
        )
}

export default CartItemContainer