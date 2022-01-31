import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({prodList, type})=>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getItems =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                prodList && prodList.length ? resolve(prodList) : reject("error 404")
            }, 2000)
        });
        getItems.then((resolve)=>{setProducts(resolve)})
    }, [prodList]);
    return(
        <ItemList item={products} type={type}/>
    )
}


export default ItemListContainer