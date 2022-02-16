import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
//Components
import ItemList from "../ItemList/ItemList";
//Data
import { db } from "../../../data/firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({type})=>{
    const [prodList, setProdList] = useState([])
    // useEffect(()=>{
    //     const getItems =  new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             products && products.length ? resolve(products) : reject("error 404")
    //         }, 2000)
    //     });
    //     getItems.then((resolve)=>{setProdList(resolve)})
    // }, [products]);
    useEffect(()=>{
        //Se declara funcion asincrona para poder usar una await
        const getFromFirebase   = async () => {
            let tempProdList = []
            //trae copia de la referencia de la base de datos
            //Query trae la tabla items
            const queryTable = collection(db, "items")
            /* Para buscar solo 1 objeto, es necesario importar query y where de "firebase/firestore"
            const queryOneObject = query(queryTable, where("id", "==", "001"))
            */
            //getDocs trae la documentacion del query, getDoc trae solo 1, hay que importarlos desde "firebase/firestore"
            // hay que importar doc
            // const docRef = doc(db, "tabla", "key")
            // const snapshop
            const snapshot = await getDocs(queryTable)
            //Los datos de la colleccion los obtengo con ".data()", para recorrerlo hay que usar forEach, porque el objeto de firebase no se puede recorrer con map
            snapshot.forEach(doc =>{
                tempProdList.push(doc.data())
            })
            setProdList(tempProdList)
        }
        getFromFirebase()
    }, [])
    return(
        <ItemList item={prodList} type={type}/>
    )
}


export default ItemListContainer