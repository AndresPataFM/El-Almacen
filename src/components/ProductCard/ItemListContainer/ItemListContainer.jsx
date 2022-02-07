import React, { useState, useEffect, useContext } from "react";
import "./ItemListContainer.css";
//Components
import ItemList from "../ItemList/ItemList";
//Context
import { CartContext } from "../../../context/CartContext/CartContext";

const ItemListContainer = ({type})=>{
    const [prodList, setProdList] = useState([])
    const {products} = useContext(CartContext)
    useEffect(()=>{
        const getItems =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                products && products.length ? resolve(products) : reject("error 404")
            }, 2000)
        });
        getItems.then((resolve)=>{setProdList(resolve)})
    }, [products]);
    return(
        <ItemList item={prodList} type={type}/>
    )
}


export default ItemListContainer