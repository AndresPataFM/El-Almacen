//Bases
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
//Componentes
import CartWidget from "../CartWidget/CartWidget";
//Imágenes
import logo from "./../../../img/dog-pawprint-in-a-house.svg"


const NavBar = ({size})=>{
    return(
        <header>
            <Link to={"/"}>
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <h1>El Almacén</h1>
            <div className="activeMenu">
                <div>
                    <Link to={'/canasta'}><CartWidget/></Link>
                    <span>{size}</span>
                </div>
                <div className="menuHolder">
                    <button className="menuButton">☰</button>
                    <ul className="menu">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/nosotros"}>Nosotros</Link></li>
                        <li><Link to={"/contacto"}>Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default NavBar