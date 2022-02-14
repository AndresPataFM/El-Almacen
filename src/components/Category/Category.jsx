import React, { useEffect, useState } from "react";
import "./../Landing/Landing.css"

import ItemList from "../ProductCard/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../data/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Category = ()=>{
    const [categoryList, setCategoryList] = useState([])
    const { type } = useParams()
    useEffect(()=>{
    //Se declara funcion asincrona para poder usar una await
        const getFromFirebase = async () => {
            let tempCategoryList = []
            //trae copia de la referencia de la base de datos
            //Query trae la tabla items
            const queryTable = collection(db, "items")
            const queryCollection = query(queryTable, where("type", "==", `${type}`))
            /* Para buscar solo 1 objeto, es necesario importar query y where de "firebase/firestore"
            const queryOneObject = query(queryTable, where("id", "==", "001"))
            */
            //getDocs trae la documentacion del query, getDoc trae solo 1, hay que importarlos desde "firebase/firestore"
            // hay que importar doc
            // const docRef = doc(db, "tabla", "key")
            // const snapshop
            const snapshot = await getDocs(queryCollection)
            //Los datos de la colleccion los obtengo con ".data()", para recorrerlo hay que usar forEach, porque el objeto de firebase no se puede recorrer con map
            snapshot.forEach(doc =>{
                tempCategoryList.push(doc.data())
                console.log(doc.data())
            })
            setCategoryList(tempCategoryList)
        }
        getFromFirebase()
    }, [type])
    // let tempProducts = []
    // const categoryBuilder = (x)=>{
    //     if(x.type === type){
    //         tempProducts.push(x)
    //     }
    // }
    // prodList.map(x => categoryBuilder(x))
    return(
        <section className="mainLanding">
            <ItemList item={categoryList} type={type}/>
        </section>
    )
}

export default Category