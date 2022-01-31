import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
// Components
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({prodList, addBasket})=>{
    const [description, setDescription] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const currentItem = prodList.filter(x =>x.id===id)[0]
    useEffect(()=>{
        const getDesc =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                description ? resolve(currentItem) : reject("error 404")
            }, 2000)
        });
        getDesc.then((resolve)=>{
            setDescription(resolve)
            setLoading(true)
        })
    }, [currentItem, description]);
    return(
        <section className="itemDetailContainerSection" >
            <h2>Producto</h2>
            <ItemDetail loading={loading} item={description} addBasket={addBasket} key={"detailItem"}/>
        </section>
    )
}

export default ItemDetailContainer