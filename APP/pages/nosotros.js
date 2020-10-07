import React from 'react';
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/footer";

const Nosotros  = () => {
    return (
        <div className="mainContainer">
             <style jsx>{`
                 *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .mainContainer {
                    width: 100%;
                }
                .imgNosotros{
                    background-image: url(images/imgNosotros.jpeg);
                    width: 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    height: 43vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .container {
                    padding-top: 50px;
                    width: 70%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin: 0 auto;
                    margin-bottom: 50px;
                    align-items: center;
                }
                    .imgNosotros h1{
                        font-size: 50px;
                        color:white;
                        
                        
                    }
                    .mainNosotros{
                        padding-top: 35px;
                    }
                    .mainNosotros p {
                        font-size: 18px;
                        letter-spacing: 0.02px;
                        line-height: 23px;
                        text-align: center;
                    }
                   
            `}</style>
            <Nav/>
            <div className="imgNosotros">
                
            <h1>NOSOTROS</h1>
            </div>
            <div className="container">
            <h1>Acerca de Nurse Go</h1>
                <div className="mainNosotros">
                    <p>Somos una empresa formada en 2020 por un grupo de ingenieros cuyo proposito es poner la tecnología y 
                    los servicios de enfermería a tu alcance.
                    En la actualidad muchos contratos de servicios se están llevando acabo mediante Intenet. Gracias a la expanción del Internet en todo el mundo la comunicación se ha heho mas fácil.
                    Por lo tanto al ver la oportunidad de mejorar un servicio médico se forma <span>Nurse Go</span>. <br/>
                    <span>Nurse Go</span> Pone a tu disposición la opotunidad de formar parte de la red de enfermeros calificados y certificados que brindando a nuestros clientes un servicio de calidad.
                    </p>
                </div>
            </div>
        <Footer/>
    </div>
    )
}

export default Nosotros;