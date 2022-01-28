import React, {Fragment, useState} from "react";
import "./Item.css";

import ItemCount from "../ItemComponents/ItemCount/ItemCount";
import ItemDetailContainer from "../ItemComponents/ItemDetailContainer/ItemDetailContainer"

const Item = ({item})=>{
    let product = item
    const [showChild, setShowChild] = useState(false);
    const descriptionToggle = ()=>{
        if(showChild){
            setShowChild(false)
        } else {
            setShowChild(true)
        }
    }
    return(
        <Fragment>
            <div className="itemCard" id={"item"+product.name+product.id} key={product.id}>
                <p>{product.name}</p>
                <button onClick={()=>{descriptionToggle()}}>Ver detalles</button>
                {showChild && <ItemDetailContainer item={product} key={"desc"+product.key}/>}
                <p>Stock: {product.stock}</p>
                <ItemCount stock={product.stock}/>
                <button>Agregar</button>
            </div>
        </Fragment>
    )
}

export default Item