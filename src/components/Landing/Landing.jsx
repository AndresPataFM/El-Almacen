import React, {Fragment} from "react";
import "./Landing.css"

import ItemListContainer from "./ItemListContainer";

const Landing = ()=>{
    return(
        <Fragment>
            <section className="mainLanding">
                <ItemListContainer/>
            </section>
        </Fragment>
    )
}

export default Landing