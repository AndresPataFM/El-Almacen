import React from "react";
import "./Landing.css"

import ItemListContainer from "../ProductCard/ItemListContainer/ItemListContainer";

const Landing = ({prodList})=>{
    return(
        <section className="mainLanding">
            <ItemListContainer prodList={prodList}/>
        </section>
    )
}

export default Landing