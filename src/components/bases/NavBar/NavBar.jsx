//Bases
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
//Componentes
import CartWidget from "../CartWidget/CartWidget";
//Imágenes
import logo from "./../../../img/dog-pawprint-in-a-house.svg"


const NavBar = ({categories})=>{
    return(
        <header>
            <Link to={"/"}>
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <h1>El Almacén</h1>
            <div className="activeMenu">
                <Link to={'/canasta'}><CartWidget/></Link>
                <div className="menuHolder">
                    <ul className="menu">
                        {categories.map(x => <li key={x.link+x.name}><Link to={x.link} >{x.name}</Link></li>)}
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default NavBar