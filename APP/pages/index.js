import React from "react"
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/footer";

const Landing = () => {
    return (
        <div>
        <style jsx>{`
                *{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  
                  }
                  .landing{
                    background-image: url(images/landImage.jpeg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    height: 90vh;
                  }
                  
                  .landInfo{
                    position: absolute;
                    left: 20%;
                    z-index: 2;
                    margin-top: 8%;
                    font-size: 50px;
                    color: #342c2c;
                  }
                  
                  .imgLandInfo{
                    position: absolute;
                    left: 5%;
                    z-index: 2;
                    margin-top: 11%;
                  }
                  
                  .sections-center{
                    text-align: center;
                    font-size: 30px;
                    margin-top: 40px;
                  }
                  
                  .sections-imgInfo{
                    display: flex;  
                    justify-content: center;
                    justify-content: space-evenly;
                    text-align: center;
                    font-size: 20px;
                    margin-top: 40px;
                  }
        `}</style>
        <Nav/>
        <div className="landing">
            <div className="imgLandInfo">
                <img src='images/imgLandInfo.png' alt="movil" width="200px" />
            </div>
            <div className="landInfo">
                <p>LO MEJOR PARA <br />PACIENTES</p>
                <p>LO MEJOR PARA <br />ENFERMERA(O)S</p>
            </div>
        </div>
        <section className="sections-center">
                Somos una compañia formada por profesionales<br/> de la salud y tecnología que constantemente estamos buscando<br/> maneras de improvisar el sistema de salud.
         </section>
         <section className="sections-imgInfo">
                <p>
                    La plataforma Nurse Go es la solucion <br/> para la creciente demanda del sistema de salud.<br/><br/>
                    La selección de enfermera(o)s es un desafío, ya que se debe investigar<br/> al personal de salud que mas accesible sea para nosotros y eso es algo que consume<br/> tiempo. Nuestra plataforma ayuda a que el proceso de contratación de un servicio <br/> médico sea mas rápido y con los costos que se adapten a ti.
            </p>
                <img src="images/section1Landing.png" alt="" height="250px" />
            </section>

            <section className="sections-imgInfo">
                <img src="images/section2Landing.png" alt="" height="250px" />
                <p>
                    Contratar un servicio de enfermeria nunca había sido tan fácil!<br /> <br />
                    Estamos encontrando mejores maneras para que nuestros profesionistas<br /> maximicen la experiencia del paciente. La plataforma<br />  Nurse Go apunta a reducir el tiempo de contratación de un servicio de enfermería<br />  y tener un catalogo de precios que pueda favorecer al paciente.
             </p>
            </section>
            <Footer/>
        </div>

    )
}

export default Landing;