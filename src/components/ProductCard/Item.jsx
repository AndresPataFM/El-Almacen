import React, {Fragment, useState} from "react";
import "./Item.css";

import ItemCount from "./ItemComponents/ItemCount";
import ItemDetailContainer from "./ItemComponents/ItemDetailContainer"

const Item = ({item})=>{
    let product = item
    const [showChild, setShowChild] = useState(false);
    const [description, setDescription] = useState([])
    const loadingDesc =  function(){
        const fakeLoadingDesc =  new Promise(function(resolve) {
                setTimeout(function(){
                    resolve(setDescription(product))
                }, 2000);
            });
        return fakeLoadingDesc
    }
    const descriptionToggle = ()=>{
        if(showChild){
            setShowChild(false)
        } else {
            setShowChild(true)
        }
    }
    const descButton = ()=>{
        descriptionToggle(true)
        loadingDesc().then()
    }
    return(
        <Fragment>
            <div className="itemCard" id={"item"+product.name+product.id} key={product.id}>
                <p>{product.name}</p>
                <button onClick={()=>{descButton(true)}}>Ver detalles</button>
                {showChild && <ItemDetailContainer item={description} key={"desc"+product.key}/>}
                <p>Stock: {product.stock}</p>
                <ItemCount stock={product.stock}/>
                <button>Agregar</button>
            </div>
        </Fragment>
    )
}

export default Item