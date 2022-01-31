import React, { useState, useEffect } from 'react';
//Components
import CartItem from "../CartItem/CartItem";

const CartItemContainer = ({basket, removeBasket, buyBasket})=>{
    const [tempBasket, setTempBasket] = useState([])
    const [basketTotal, setBasketTotal] = useState(0)
    const [basketChange, setBasketChange] = useState(true)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        const getTotal =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const calcuclateChange = ()=>{
                    setTempBasket(basket)
                    setBasketChange(false)
                } 
                const calculateTotal = ()=>{
                    let total = 0
                    tempBasket.forEach(x => {
                        let itemTotal = x.item.price * x.quantity
                        total += itemTotal
                    });
                    setBasketTotal(total)
                    setLoading(true)
                }
                basketChange ? resolve(calcuclateChange()) : reject(calculateTotal())
            }, 2000)
        });
        getTotal.then()
    }, [basketChange, basket, tempBasket]);
    return(
        <div>
            {loading && <div>
                <ul>
                    {tempBasket.map(x => <CartItem setBasketChange={setBasketChange} basketItem={x} removeBasket={removeBasket} key={"basketItem"+x.item.id}/>)}
                </ul>
                <div>
                    <p>Por un total de: ${basketTotal}</p>
                    <button onClick={()=>{buyBasket(basket, basketTotal)}}>Comprar</button>
                </div>
            </div>}
        </div>
        )
}

export default CartItemContainer