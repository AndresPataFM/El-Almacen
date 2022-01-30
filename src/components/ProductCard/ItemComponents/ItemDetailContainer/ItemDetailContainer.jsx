import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
// Components
import ItemDetail from "../ItemDetail/ItemDetail";

// Data
import fakeproductList from "./../../../../data/fakeproductList"


const ItemDetailContainer = ()=>{
    const [description, setDescription] = useState([])
    const {type, id} = useParams()
    const products = fakeproductList
    const currentItem = products.filter(x =>x.id===id)[0]
    useEffect(()=>{
        const getDesc =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                description ? resolve(currentItem) : reject("error 404")
            }, 2000)
        });
        getDesc.then((resolve)=>{setDescription(resolve)})
    }, [currentItem, description]);
    return(
        <>
            <ItemDetail item={description}/>
            <p>{type}</p>
            <p>{id}</p>
        </>
    )
}

export default ItemDetailContainer