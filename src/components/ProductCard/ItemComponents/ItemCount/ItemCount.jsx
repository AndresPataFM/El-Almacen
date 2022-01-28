import React, {useState} from "react";
import "./ItemCount.css"


const ItemCount = ({stock})=>{
    const [initial, setInitial] = useState(1)
    const add = (stock, initial)=>{
        if(stock>initial){
            setInitial(initial+1)
        } else if (stock>=initial){
            alert("No hay suciciente stock como para cumplir con su pedido")
        }
    }
    const substract = (initial)=>{
        if(1<initial){
            setInitial(initial-1)
        } else if (initial<=2){
            alert("Mínimo se debe de comprar 1 producto")
        }
    }
    return(
        <div className="counter">
            <button onClick={()=>{substract(initial)}} className="minusButton">-</button>
            <p>&nbsp;{initial}&nbsp;</p>
            <button onClick={()=>{add(stock, initial)}} className="plusButton">+</button>
        </div>
    )
}

export default ItemCount