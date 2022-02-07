import React, { createContext, useState } from "react";
import prodList from "./../../data/fakeProductList"
//Libraries
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    //Productos
    const [products, setProducts] = useState(prodList)
    //Canasta
    const [basket, setBasket] = useState([])
    //Estado de tamaño de la canasta
    const [basketLength, setBasketLength] = useState(0)
    //Funcion que agrega productos a la canasta
    const onAdd = (item, quantity)=>{
        const exist = products.find(x => x === item)
        const alreadyBasket = basket.find(x =>x.item === item)
        if(alreadyBasket){
        Swal.fire(
            'Ese producto ya se encuentra en su canasta',
            'Para modificarlo vaya a su canasta por favor',
            'error'
        )
        } else if(exist){
        let tempBasket = basket
        tempBasket.push({item: item, quantity: quantity})
        setBasket(tempBasket)
        setBasketLength(basket.length)
        Swal.fire({
            title: `Felicitaciones`,
            text: `Se ha agregado ${quantity} unidad/es de ${item.name} a su canasta.`,
            width: 600,
            padding: '3em',
            color: '#8A2BE2',
            backdrop: `
                rgba(138,43,226,0.4)
            `
        })
        }
    }
    const onBuy = (bskt, total)=>{
        let basketCount = bskt.length
        if(basketCount<1){
        Swal.fire(
            'Error',
            'Necesita agregar productos a su canasta para comprar.',
            'error'
        )
        } else {
        let tempProducts = products
        tempProducts.forEach(x=>{
            bskt.forEach(y=>{
            if(y.item.code === x.code){
                x.stock-=y.quantity
            }
            })
        })
        Swal.fire(
            'Gracias por comprar',
            `Ha comprado ${basketCount} productos distintos por un total de $${total}`,
            'success'
        )
        setBasket([])
        setBasketLength(0)
        setProducts(tempProducts)
        }
    }
    //Funcion que remueve productos de la canasta
    const onRemove = (basketItem)=>{
        const alreadyBasket = basket.find(x =>x === basketItem)
        if(alreadyBasket){
        let index = basket.indexOf(basketItem)
        let tempBasket = basket
        tempBasket.splice(index, 1)
        setBasket(tempBasket)
        setBasketLength(basket.length)
        }
    }
    return(
        <CartContext.Provider value={{basket, basketLength ,products, onAdd, onRemove, onBuy}}>
            {children}
        </CartContext.Provider>
    )
}