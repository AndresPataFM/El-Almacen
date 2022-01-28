import React from "react";
import "./Landing.css"

import ItemListContainer from "../ProductCard/ItemListContainer/ItemListContainer";

const Landing = ()=>{
    return(
        <section className="mainLanding">
            <ItemListContainer/>
        </section>
    )
}

export default Landing