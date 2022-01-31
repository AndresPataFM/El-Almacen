import React from "react";
import "./../Landing/Landing.css"

import ItemListContainer from "../ProductCard/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Category = ({prodList})=>{
    const { type } = useParams()
    let tempProducts = []
    const categoryBuilder = (x)=>{
        if(x.type === type){
            tempProducts.push(x)
        }
    }
    prodList.map(x => categoryBuilder(x))
    return(
        <section className="mainLanding">
            <ItemListContainer prodList={tempProducts} type={type}/>
        </section>
    )
}

export default Category