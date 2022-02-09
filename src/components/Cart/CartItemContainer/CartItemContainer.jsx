import React, { useState, useEffect, useContext } from 'react';
import { Fragment } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
//Components
import CartItem from "../CartItem/CartItem";
//Context
import { CartContext } from '../../../context/CartContext/CartContext';

const CartItemContainer = ()=>{
    const [basketTotal, setBasketTotal] = useState(0)
    const [basketChange, setBasketChange] = useState(true)
    const [loading, setLoading] = useState(false)
    const [emptyBasket, setEmptyBasket] = useState(false)
    //Navigate
    let navigate = useNavigate()
    //Context
    const {basket, basketLength, onRemove, onBuy} = useContext(CartContext)
    useEffect(()=>{
        const getTotal =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const calcuclateChange = ()=>{
                    setBasketChange(false)
                } 
                const calculateTotal = ()=>{
                    let total = 0
                    basket.forEach(x => {
                        let itemTotal = x.item.price * x.quantity
                        total += itemTotal
                    });
                    setBasketTotal(total)
                    setLoading(true)
                }
                basketChange ? resolve(calcuclateChange()) : reject(calculateTotal())
            }, 2000)
        });
        if(basketLength === 0){
            setEmptyBasket(false)
        } else {
            setEmptyBasket(true)
        }
        getTotal.then()
    }, [basketChange, basket, basketLength]);
    return(
        <Fragment>
            {emptyBasket ? <div>
                {loading && <div>
                    <ul>
                        {basket.map(x => <CartItem setBasketChange={setBasketChange} basketItem={x} onRemove={onRemove} key={"basketItem"+x.item.id}/>)}
                    </ul>
                    {!basketChange ? <div>
                        <p>Por un total de: ${basketTotal}</p>
                        <button onClick={()=>{onBuy(basket, basketTotal); setBasketChange(true)}}>Comprar</button>
                    </div> : <p>Loading...</p> }
                </div>}
            </div> : <div>
                <p>Su canasta esta vacia, para poder agregar objetos a su canasta por favor por aca:</p>
                <button onClick={()=>{navigate(`/`)}}>Tienda</button>
            </div> }
        </Fragment>
        )
}

export default CartItemContainer