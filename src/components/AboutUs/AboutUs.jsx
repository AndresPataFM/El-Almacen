import React from "react";
import { useEffect, useState } from "react";
import "./AboutUs.css"

// Img
import family from "./../../img/aboutUs/family.png"
import local from "./../../img/aboutUs/local.png"
import science from "./../../img/aboutUs/science.png"
import sustentable from "./../../img/aboutUs/sustentable.png"
import premium from "./../../img/aboutUs/premium.png"
import trust from "./../../img/aboutUs/trust.png"
//Libraries
import AOS from "aos";
import 'aos/dist/aos.css';

const AboutUs = ()=>{
    const [loading, setLoading] = useState(false)
    const loadingEffect = ()=>{
        AOS.init({
            duration : 2000
        });
        setLoading(true)
    }
    useEffect(() => {
        const load =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(loadingEffect())
            }, 2000)
        });
        load.then()
    }, []);
    return(
        <section className="aboutUsSection">
            <h2 className="aboutUsMainTitle">Sobre Nosotros</h2>
            {loading && <article className="aboutArticle" >
                <div className="holder" >
                    <h3 className="aboutUsTitles">Empresa Familiar</h3>
                    <div className="articleDiv" >
                        <img src={family} className="aboutUsImg" data-aos="fade-right" alt="Familia" />
                        <p className="aboutUsDescription" data-aos="flip-right">Somos una empresa familiar basada en nuestros deseos de cuidar a nuestra familia, ya que al igual que ustedes, consideramos a las mascostas como miembros de nuestra familia. Ponemos todo nuestro esfuerzo en cuidarlos y brindarles el mejor servicio possible.</p>
                    </div>
                </div>
            </article>}
            {loading && <article className="aboutArticle" >
                <div className="holder" >
                    <h3 className="aboutUsTitles">Productos de primera</h3>
                    <div className="articleDiv" >
                        <img src={premium} className="aboutUsImg" data-aos="fade-right" alt="Calidad" />
                        <div>
                            <p className="aboutUsDescription" data-aos="flip-right">Todos los productos en selección son los mismos que utilizamos nosotros para nuestras mascotas.  ¡Nunca venderíamos algo que no utilizariamos!</p>
                            <p className="aboutUsDescription" data-aos="flip-right">Ademas, todos nuestros productos son avalados por veterinarios graduados de la Uba con honores. 100% testeados de maneras humanitarias y con cadenas de producción que no impactan negativamente al medio ambiente.</p>
                        </div>
                    </div>
                </div>
            </article>}
            {loading && <article className="aboutArticle" >
                <div className="holder" >
                    <h3 className="aboutUsTitles">Nuestro producto, nuestra palabra</h3>
                    <div className="articleDiv" >
                        <img src={trust} className="aboutUsImg" data-aos="fade-right" alt="Confianza" />
                        <p className="aboutUsDescription" data-aos="flip-right">Aseguramos devulocion sin preguntas la primera semana de entregado el producto. Confiamos en la calidad de nuestro producto y nuestros medios de envío para garantizar la calidad y satisfacción del cliente</p>
                    </div>
                </div>
            </article>}
            {loading && <article className="aboutArticle" >
                <div className="holder" >
                    <h3 className="aboutUsTitles">Local</h3>
                    <div className="articleDiv" >
                        <img src={local} className="aboutUsImg" data-aos="fade-right" alt="Local" />
                        <p className="aboutUsDescription" data-aos="flip-right">Todos nuestros productos son producidos localmente en argentina y promovemos la economia local de su sector. Si desea contactarse con nosotros con su producto vea el area de contacto.</p>
                    </div>
                </div>
            </article>}
            {loading && <article className="aboutArticle" >
                <div className="holder" >
                    <h3 className="aboutUsTitles">Tecnología</h3>
                    <div className="articleDiv" >
                        <img src={science} className="aboutUsImg" data-aos="fade-right" alt="Tecnología" />
                        <p className="aboutUsDescription" data-aos="flip-right">Todos los productos y servicios ofrecidos por nuestra empresa son de tecnología de punta y de ultima generación. Nos esforzamos por siempre estar al frente de la oleada tecnológica.</p>
                    </div>
                </div>
            </article>}
            {loading && <article className="aboutArticle" >
                <div className="holder" >
                    <h3 className="aboutUsTitles">Sustentabilidad</h3>
                    <div className="articleDiv" >
                        <img src={sustentable} className="aboutUsImg" data-aos="fade-right" alt="Sustentabilidad" />
                        <p className="aboutUsDescription" data-aos="flip-right">Todos nuestros productos estan hechos con métodos 100% sustentables. La única manera de ahcer una empreza a largo plazo es asegurarnos que nosotros duremos a largo plazo.</p>
                    </div>
                </div>
            </article>}
        </section>
    )
}

export default AboutUs