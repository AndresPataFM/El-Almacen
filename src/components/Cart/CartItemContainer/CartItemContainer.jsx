import React, { useState, useEffect, useContext } from 'react';
import { Fragment } from 'react/cjs/react.development';
//Components
import CartItem from "../CartItem/CartItem";
//Context
import { CartContext } from '../../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';

const CartItemContainer = ()=>{
    const [basketTotal, setBasketTotal] = useState(0)
    const [basketChange, setBasketChange] = useState(true)
    const [loading, setLoading] = useState(false)
    const [emptyBasket, setEmptyBasket] = useState(false)
    //Context
    const {basket, basketLength, onRemove, onBuy, changeQuantity} = useContext(CartContext)
    const buyBasket = ()=>{
        onBuy(basket, basketTotal)
        setBasketChange(true)
    }
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
                        {basket.map(x => <CartItem setBasketChange={setBasketChange} basketItem={x} onRemove={onRemove} changeQuantity={changeQuantity} key={"basketItem"+x.item.id}/>)}
                    </ul>
                    {!basketChange ? <div>
                        <p>Por un total de: ${basketTotal}</p>
                        <button onClick={()=>{buyBasket()}}>Comprar</button>
                    </div> : <p>Loading...</p> }
                </div>}
            </div> : <div>
                <p>Su canasta esta vacia, para poder agregar objetos a su canasta por favor por aca:</p>
                <Link to={"/"}><button >Tienda</button></Link>
            </div> }
        </Fragment>
        )
}

export default CartItemContainer