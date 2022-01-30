import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./Item.css";

import ItemCount from "../ItemComponents/ItemCount/ItemCount";
import ItemDetailContainer from "../ItemComponents/ItemDetailContainer/ItemDetailContainer"


const Item = ({item})=>{
    let product = item
    const [showChild, setShowChild] = useState(false);
    const navigate = useNavigate()
    const descriptionToggle = ()=>{
        if(showChild){
            setShowChild(false)
        } else {
            setShowChild(true)
        }
    }
    const goToItem = () =>{
        navigate(`/${item.type}/${item.id}`)
    }
    return(
        <div className="itemCard" id={"item"+product.name+product.id} key={product.id}>
            <p>{product.name}</p>
            <button onClick={()=>{descriptionToggle()}}>Ver detalles</button>
            {showChild && <ItemDetailContainer item={product} key={"desc"+product.key}/>}
            <p>Precio: ${product.price}</p>
            <button onClick={()=>{goToItem()}}>Test</button>
        </div>
    )
}

export default Item