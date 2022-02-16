import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../data/firebase";

const Buy = ({basket, basketTotal, buyBasket})=>{
    //Estados para los inputs
    const [buyerName, setBuyerName] = useState("")
    const [buyerPhone, setBuyerPhone] = useState()
    const [buyerEmail, setBuyerEmail] = useState()
    const [orderId, setOrderId] = useState("")
    const [endedPurchase, setEndedPurchase] = useState(false)

    const BuyOrder = ()=>{
        const Buyer = ()=>{
            let tempBuyer = {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail,
            }
            return tempBuyer
        }
        const itemsToBuy = basket.map(item=>{
            return {
                id: item.item.id,
                title: item.item.name,
                price: item.item.price,
                quantity: item.quantity,
            }
        })
        let tempBuyOrder = {
            buyer: Buyer(),
            items: itemsToBuy,
            date: Date().toLocaleString(),
            total: basketTotal,
        }
        return tempBuyOrder
    }
    const order = ()=>{
        let tempOrder = BuyOrder()
        console.log(tempOrder)
        addDoc(collection(db, "orders"), tempOrder).then(doc =>{
            console.log(doc.id)
            setOrderId(doc.id)
        }).catch(err => {
            console.log("Error: ", err)
        })
    }
    const finalizePurchase = (e)=>{
        e.preventDefault()
        order()
        buyBasket()
        setEndedPurchase(true)
    }
    return(
        <div>
            {endedPurchase ? 
            <div>
                <p>Gracias por su compra, su número de orden es: <span>{orderId}</span></p>
            </div>
            :
            <form onSubmit={finalizePurchase}>
                <label htmlFor="" id="buyerName">Nombre</label>
                <input type="text" id="buyerName" onInput={e => setBuyerName(e.target.value)}/>
                <label htmlFor="">Telefono: </label>
                <input type="number" id="buyerPhone" onInput={e => setBuyerPhone(e.target.value)}/>
                <label htmlFor="buyerEmail">Email: </label>
                <input type="email" id="buyerEmail" onInput={e => setBuyerEmail(e.target.value)}/>
                <button type="submit">Comprar</button>
            </form>
            }
        </div>
    )
}

export default Buy