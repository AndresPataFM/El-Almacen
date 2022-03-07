import React from "react"
import { Fragment } from "react/cjs/react.development"
import NavBar from "../components/bases/NavBar/NavBar"

const NavSetup = ()=>{
    const categories = [{name:"Home" ,link:"/" }, {name:"Nosotros" ,link:"/nosotros" }, {name:"Contacto" ,link:"/contacto"}]
    return(
        <Fragment >
            <NavBar categories={categories} />
        </Fragment>
    )
}
export default NavSetup