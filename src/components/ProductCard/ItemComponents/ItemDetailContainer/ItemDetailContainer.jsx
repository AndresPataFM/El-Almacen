import React, {useState, useEffect} from "react";
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({item})=>{
    const [description, setDescription] = useState([])
    useEffect((item)=>{
        const getDesc =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                description ? resolve(item) : reject("error 404")
            }, 2000)
        });
        getDesc.then((resolve)=>{setDescription(resolve)})
    }, [item]);
    return(
        <ItemDetail item={description}/>
    )
}

export default ItemDetailContainer