//Bases
import React, {Fragment} from "react";
import "./NavBar.css"
//Componentes
import CartWidget from "./CartWidget";
//Imágenes
import logo from "./../../img/dog-pawprint-in-a-house.svg"


const NavBar = ()=>{
    return(
        <Fragment>
            <header>
                <a href="#">
                    <img src={logo} alt="logo" className="logo"/>
                </a>
                <h1>El Almacén</h1>
                <div className="activeMenu">
                    <a href="#">
                        <CartWidget/>
                    </a>
                    <div className="menuHolder">
                        <button className="menuButton">☰</button>
                        <ul className="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Tienda</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}
export default NavBar