import React from "react";
import "./Contact.css"

const Contact = ()=>{
    return(
        <section className="contactSection">
            <h2>Contacto</h2>
            <div>
                <p><b>Email:</b> apfm21@Gmail.com .</p>
                <p><b>Telefono:</b> 4545-5454 .</p>
                <p><b>Local:</b> Avenida Siempre Viva 123, Springfield, USA.</p>
                <p><b>Github:</b> <a href="https://github.com/AndresPataFM" target="_blank" rel="noreferrer">Link</a>.</p>
                <p><b>Linkedin:</b> <a href="https://www.linkedin.com/in/andr%C3%A9s-pata-fraile-de-manterola-b50ba9191/" target="_blank" rel="noreferrer">Link</a>.</p>
            </div>
        </section>
    )
}

export default Contact