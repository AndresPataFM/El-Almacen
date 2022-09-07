import React, { useState, useEffect, useContext } from 'react';
//Components
import CartItem from "../CartItem/CartItem";
import Buy from '../Buy/Buy';
//Context
import { CartContext } from '../../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';

import "./CartItemContainer.css"

const CartItemContainer = ()=>{
    const [loading, setLoading] = useState(false)
    const [emptyBasket, setEmptyBasket] = useState(false)
    //Context
    const {basket, basketLength, onRemove, onBuy, changeQuantity, basketTotal} = useContext(CartContext)
    const buyBasket = ()=>{
        onBuy(basket, basketTotal)
    }
    useEffect(()=>{
        const checkEmpty =  new Promise(()=>{
            setTimeout(()=>{
                if(basketLength === 0){
                    setEmptyBasket(false)
                    setLoading(false)
                } else {
                    setEmptyBasket(true)
                    setLoading(true)
                }
            }, 2000)
        });
        checkEmpty.then()
    }, [basketLength]);
    return(
        <div>
            {emptyBasket ? <div>
                {loading && <div>
                    <ul>
                        {basket.map(x => <CartItem basketItem={x} onRemove={onRemove} changeQuantity={changeQuantity} key={"basketItem"+x.item.id}/>)}
                    </ul>
                    <div>
                        <p><b>Por un total de: <i>${basketTotal}</i></b></p>
                    </div>
                </div>}
            </div> : <div className='emptyBasket'>
                <p>Su canasta esta vacia, para poder agregar objetos a su canasta por favor por aca:</p>
                <Link to={"/"}><button className='shopButton'>Tienda</button></Link>
            </div> }
            <Buy basket={basket} basketTotal={basketTotal} buyBasket={buyBasket} />
        </div>
        )
}

export default CartItemContainer