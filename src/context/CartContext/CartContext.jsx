import React, { createContext, useState } from "react";
//Libraries
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    //Canasta
    const [basket, setBasket] = useState([])
    //Estado de tamaño de items totales de la canasta
    const [basketLength, setBasketLength] = useState(0)
    //Estado del precio total de la canasta
    const [basketTotal, setBasketTotal] = useState(0)
    //Funcion que calcula la cantidad de items total en la canasta
    const onBasketChange = ()=>{
        let tempCount = 0
        basket.forEach(x => tempCount+=x.quantity)
        setBasketLength(tempCount)
    }
    //Funcion que calcula el precio total de la canasta
    const getTotal = ()=>{
        let tempTotal = 0
        basket.forEach(x => {
            tempTotal += x.item.price * x.quantity
        })
        setBasketTotal(tempTotal)
    }
    //Funcion que agrega productos a la canasta
    const onAdd = (item, quantity, products)=>{
        const exist = products.find(x => x.id === item.id)
        const alreadyBasket = basket.find(x =>x.item.id === item.id)
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
        onBasketChange()
        getTotal()
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
        Swal.fire(
            'Gracias por comprar',
            `Ha comprado ${basketCount} productos distintos por un total de $${total}`,
            'success'
        )
        setBasket([])
        setBasketLength(0)
        setBasketTotal(0)
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
        onBasketChange()
        getTotal()
        }
    }
    //Funcion que permite cambiar la cantidad de un item en la canasta
    const changeQuantity = (item, quantity)=>{
        const changedQuantity = Number(quantity)
        if(changedQuantity<1){
            Swal.fire(
                'Error',
                'Se necesita comprar al menos 1 objeto.',
                'error'
            )
        } else if(item.stock<changedQuantity){
            Swal.fire(
                'Error',
                'No hay suficiente stock como para cumplir con el pedido.',
                'error'
            )
        } else if (changedQuantity>1 && changedQuantity<item.stock){
            let tempBasket = basket
            tempBasket.forEach((x)=>{
                if(x.item.id === item.id){
                    x.quantity = changedQuantity
                }
            })
            setBasket(tempBasket)
            onBasketChange()
            getTotal()
        }
    }
    return(
        <CartContext.Provider value={{basket, basketLength, basketTotal, onAdd, onRemove, onBuy, changeQuantity}}>
            {children}
        </CartContext.Provider>
    )
}