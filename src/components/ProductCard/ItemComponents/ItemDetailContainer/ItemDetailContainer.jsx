import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
// Components
import ItemDetail from "../ItemDetail/ItemDetail";
//Data
import { db } from "../../../../data/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    useEffect(()=>{
        const getFromFirebase   = async () => {
            const queryTable = collection(db, "items")
            const queryCollection = query(queryTable, where("id", "==", `${id}`))
            // const snapshop
            const snapshot = await getDocs(queryCollection)
            //Los datos de la colleccion los obtengo con ".data()", para recorrerlo hay que usar forEach, porque el objeto de firebase no se puede recorrer con map
            snapshot.forEach(doc =>{
                setItem(doc.data())
            })
            setLoading(true)
            }
        getFromFirebase()
    }, [id]);
    return(
        <section className="itemDetailContainerSection" >
            <h2>Producto</h2>
            <ItemDetail loading={loading} item={item} key={"detailItem"}/>
        </section>
    )
}

export default ItemDetailContainer