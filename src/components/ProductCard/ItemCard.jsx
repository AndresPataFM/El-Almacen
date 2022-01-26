import React, {Fragment, useState} from "react";
import "./ItemCard.css";

import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer"

const ItemCard = ({item})=>{
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
            <div className="itemCard" id={"item"+product.name+product.code} key={product.code}>
                <p>{product.name}</p>
                <button onClick={()=>{descButton(true)}}>Ver detalles</button>
                {showChild && <ItemDetailContainer item={description}/>}
                <p>Stock: {product.stock}</p>
                <ItemCount stock={product.stock}/>
            </div>
        </Fragment>
    )
}

export default ItemCard