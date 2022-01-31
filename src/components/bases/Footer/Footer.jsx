import React from "react";
import "./Footer.css"

//Imagenes
import linkedin from "./../../../img/multimedia/linkedin.svg"
import github from "./../../../img/multimedia/github.svg"

const Footer = ()=>{
    return(
            <footer>
                <div>
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-pata-fraile-de-manterola-b50ba9191/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" /></a>
                    <a href="https://github.com/AndresPataFM" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
                </div>
                <p>El Almacen © 2022 Copyright</p>
            </footer>
    )
}

export default Footer