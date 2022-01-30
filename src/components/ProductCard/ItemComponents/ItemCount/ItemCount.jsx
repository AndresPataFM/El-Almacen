import React, {useState, Fragment} from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"

//Libraries
import Swal from 'sweetalert2'


const ItemCount = ({item, addBasket})=>{
    //Estado del contador
    const [initial, setInitial] = useState(1)
    //Estado de los botones
    const [showAddBasket, setShowAddBasket] = useState(true)
    const [showReturn, setShowReturn] = useState(false)
    //resto de las Variables
    let stock = item.stock
    //Aumenta el contador en 1
    const add = (stock, initial)=>{
        if(stock>initial){
            setInitial(initial+1)
        } else if (stock>=initial){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No hay suciciente stock como para cumplir con su pedido',
            })
            setInitial(stock)
        }
    }
    //Reduce el contador en 1
    const substract = (initial)=>{
        if(1<initial){
            setInitial(initial-1)
        } else if (initial<=2){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Mínimo se debe de comprar 1 producto',
            })
            setInitial(1)
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
    const addToCart = (item)=>{
        addBasket(item)
        Swal.fire({
            title: `Felicitaciones`,
            text: `Se ha agregado ${initial} unidad/es de ${item.name} a su canasta`,
            width: 600,
            padding: '3em',
            color: '#8A2BE2',
            backdrop: `
                rgba(138,43,226,0.4)
            `
        })
        buttonToggle()
    }
    return(
        <Fragment>
            <div className="counter">
                <button onClick={()=>{substract(initial)}} className="minusButton">-</button>
                <p>&nbsp;{initial}&nbsp;</p>
                <button onClick={()=>{add(stock, initial)}} className="plusButton">+</button>
            </div>
            {showAddBasket && <button className="addToCartButton" onClick={()=>{addToCart(item)}}>Agregar</button>}
            {showReturn && <Link to={"/"}><button>Comprar más</button></Link>}
        </Fragment>
    )
}

export default ItemCount