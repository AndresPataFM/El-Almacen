import React, {useState, Fragment} from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"

//Libraries
import Swal from 'sweetalert2'


const ItemCount = ({item, addBasket})=>{
    //Estado del contador
    const [count, setCount] = useState(1)
    //Estado de los botones
    const [showAddBasket, setShowAddBasket] = useState(true)
    const [showReturn, setShowReturn] = useState(false)
    //resto de las Variables
    let stock = item.stock
    //Aumenta el contador en 1
    const add = (stock, count)=>{
        if(stock>count){
            setCount(count+1)
        } else if (stock>=count){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No hay suciciente stock como para cumplir con su pedido',
            })
            setCount(stock)
        }
    }
    //Reduce el contador en 1
    const substract = (count)=>{
        if(1<count){
            setCount(count-1)
        } else if (count<=2){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Mínimo se debe de comprar 1 producto',
            })
            setCount(1)
        }
    }
    //Funciones para mostrar/ocultar botones
    const buttonToggle = ()=>{
        if(showAddBasket){
            setShowAddBasket(false)
            setShowReturn(true)
        } else {
            setShowAddBasket(true)
            setShowReturn(false)
        }
    }
    //Funcion que temporalmente emula agregar algo al carro
    const addToCart = (item, quantity)=>{
        addBasket(item, quantity)
        buttonToggle()
    }
    return(
        <Fragment>
            <div className="counter">
                <button onClick={()=>{substract(count)}} className="minusButton">-</button>
                <p>&nbsp;{count}&nbsp;</p>
                <button onClick={()=>{add(stock, count)}} className="plusButton">+</button>
            </div>
            {showAddBasket && <button className="addToCartButton" onClick={()=>{addToCart(item, count)}}>Agregar</button>}
            {showReturn && <div className="buttonContainer">
                <Link to={"/"}><button className="purchaseMore">Comprar más</button></Link>
                <Link to={"/canasta"}><button className="toBasket"> Terminar Compra</button></Link>
            </div>}
        </Fragment>
    )
}

export default ItemCount