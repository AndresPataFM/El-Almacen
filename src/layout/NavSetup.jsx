import React from "react"
import NavBar from "../components/bases/NavBar/NavBar"

const NavSetup = ()=>{
    const categories = [{name:"Home" ,link:"/" }, {name:"Nosotros" ,link:"/nosotros" }, {name:"Contacto" ,link:"/contacto"}]
    return(
        <div style={{width: "100%", height: "150px"}}>
            <NavBar categories={categories} />
        </div>
    )
}
export default NavSetup