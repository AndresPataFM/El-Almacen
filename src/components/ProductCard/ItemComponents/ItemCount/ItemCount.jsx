import React, {useState, Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"
//Context
import { CartContext } from "../../../../context/CartContext/CartContext";

//Libraries
import Swal from 'sweetalert2'


const ItemCount = ({item, count, setCount})=>{
    //Estado de los botones
    const [showonAdd, setShowonAdd] = useState(true)
    const [showReturn, setShowReturn] = useState(false)
    //Context
    const {onAdd} = useContext(CartContext)
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
        if(showonAdd){
            setShowonAdd(false)
            setShowReturn(true)
        } else {
            setShowonAdd(true)
            setShowReturn(false)
        }
    }
    //Funcion que temporalmente emula agregar algo al carro
    const addToCart = (item, quantity)=>{
        onAdd(item, quantity)
        buttonToggle()
    }
    return(
        <Fragment>
            {showonAdd && <div>
                <div className="counter">
                    <button onClick={()=>{substract(count)}} className="minusButton">-</button>
                    <p>&nbsp;{count}&nbsp;</p>
                    <button onClick={()=>{add(stock, count)}} className="plusButton">+</button>
                </div>
                <button className="addToCartButton" onClick={()=>{addToCart(item, count)}}>Agregar</button>
            </div>}
            {showReturn && <div className="buttonContainer">
                <Link to={"/"}><button className="purchaseMore">Comprar más</button></Link>
                <Link to={"/canasta"}><button className="toBasket"> Terminar Compra</button></Link>
            </div>}
        </Fragment>
    )
}

export default ItemCount