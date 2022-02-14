import React, { useState, useEffect, useContext } from 'react';
import { Fragment } from 'react/cjs/react.development';
//Components
import CartItem from "../CartItem/CartItem";
//Context
import { CartContext } from '../../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';

const CartItemContainer = ()=>{
    const [loading, setLoading] = useState(true)
    const [emptyBasket, setEmptyBasket] = useState(false)
    //Context
    const {basket, basketLength, onRemove, onBuy, changeQuantity, basketTotal} = useContext(CartContext)
    const buyBasket = ()=>{
        onBuy(basket, basketTotal)
    }
    useEffect(()=>{
        const getTotal =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(basketLength === 0){
                    setEmptyBasket(false)
                } else {
                    setEmptyBasket(true)
                }
            }, 2000)
        });
        getTotal.then()
    }, [basketLength]);
    return(
        <Fragment>
            {emptyBasket ? <div>
                {loading && <div>
                    <ul>
                        {basket.map(x => <CartItem basketItem={x} onRemove={onRemove} changeQuantity={changeQuantity} key={"basketItem"+x.item.id}/>)}
                    </ul>
                    <div>
                        <p>Por un total de: ${basketTotal}</p>
                        <button onClick={()=>{buyBasket()}}>Comprar</button>
                    </div>
                </div>}
            </div> : <div>
                <p>Su canasta esta vacia, para poder agregar objetos a su canasta por favor por aca:</p>
                <Link to={"/"}><button >Tienda</button></Link>
            </div> }
        </Fragment>
        )
}

export default CartItemContainer