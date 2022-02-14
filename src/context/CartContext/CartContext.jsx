import React, { createContext, useState } from "react";
//Libraries
import Swal from 'sweetalert2';

// const prodList = [
//     {name:"Antipulgas Gato", id:"001", type:"Medicinal", price:"450", stock:"32", description:"Antipulgas felino Frontline Plus",},
//     {name:"Antipulgas Perro", id:"002", type:"Medicinal", price:"450", stock:"28", description:"Antipulgas Canino Frontline Plus",},
//     {name:"Antiparasitario", id:"003", type:"Medicinal", price:"370", stock:"15", description:"Antiparasitario interno Oral Paraqueños",},
//     {name:"Alimento Gato Joven", id:"004", type:"Medicinal", price:"4530", stock:"18", description:"Alimento para gatos Kitten de Royal Canin",},
//     {name:"Alimento Gato Adulto", id:"005", type:"Alimento", price:"3900", stock:"27", description:"Alimento para gatos adultos Royal Canin Active Life",},
//     {name:"Alimento Gato Edad Avanzada", id:"006", type:"Alimento", price:"4620", stock:"15", description:"Alimento para gatos de edad avanzada Royal Canin Mature Consult Stage 1",},
//     {name:"Alimento Perro Joven", id:"007", type:"Alimento", price:"4450", stock:"22", description:"Alimento para perros jóvenes de tamaño mediano Royal Canin Puppy Medium.",},
//     {name:"Alimento Perro Adulto", id:"008", type:"Alimento", price:"3780", stock:"24", description:"Alimento para perros adultos de tamaño mediano Royal Canin Adult Medium.",},
//     {name:"Alimento Perro Edad Avanzada", id:"009", type:"Alimento", price:"4370", stock:"11", description:"Alimento para perros de edad avanzada de tamaño mediano Royal Canin Adgeing",},
//     {name:"Juguete de Ratón", id:"010", type:"Juguete", price:"170", stock:"10", description:"Un juguete de ratón de plastico y tela hipoalergénicos",},
//     {name:"Hueso Comestible", id:"011", type:"Alimento", price:"450", stock:"7", description:"12(Doce) unidades de huesos comestibles de cuero para perros",},
//     {name:"Pelota", id:"012", type:"Juguete", price:"210", stock:"9", description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)",},
// ]

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    //Productos
    // const [products, setProducts] = useState(prodList)
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
            console.log(x.item.price)
            console.log(x.quantity)
            tempTotal += x.item.price * x.quantity
        })
        console.log(tempTotal)
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
        // let tempProducts = products
        // tempProducts.forEach(x=>{
        //     bskt.forEach(y=>{
        //     if(y.item.code === x.code){
        //         x.stock-=y.quantity
        //     }
        //     })
        // })
        Swal.fire(
            'Gracias por comprar',
            `Ha comprado ${basketCount} productos distintos por un total de $${total}`,
            'success'
        )
        setBasket([])
        setBasketLength(0)
        setBasketTotal(0)
        // setProducts(tempProducts)
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