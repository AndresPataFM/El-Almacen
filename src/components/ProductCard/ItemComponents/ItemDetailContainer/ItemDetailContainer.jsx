import React, {useState, useEffect} from "react";
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({item})=>{
    const [description, setDescription] = useState([])
    let product = item
    useEffect(()=>{
        const getDesc =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                description ? resolve(product) : reject("error 404")
            }, 2000)
        });
        getDesc.then((resolve)=>{setDescription(resolve)})
    }, []);
    return(
        <ItemDetail item={description}/>
    )
}

export default ItemDetailContainer