//Bases
import React, {Fragment} from "react";
import "./NavBar.css"
//Imágenes
import logo from "./../img/dog-pawprint-in-a-house.svg"
import shoppingCart from "./../img/ShoppingCart.svg"

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
                        <img src={shoppingCart} alt="Carrito de compras" className="shoppingCart"/>
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