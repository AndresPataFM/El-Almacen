import React, {useState, useEffect} from "react";
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({item})=>{
    const [description, setDescription] = useState([])
    useEffect(()=>{
        const getDesc =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                description ? resolve(item) : reject("error 404")
            }, 2000)
        });
        getDesc.then((resolve)=>{setDescription(resolve)})
    }, []);
    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer