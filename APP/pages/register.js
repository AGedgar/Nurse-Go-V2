import React from "react"
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/footer";

const Register = () =>{
    return(
        <div>
         <Nav/>
           <form action="">
            <style jsx>{`
                form{
                    display: flex;
                    justify-content: space-evenly;
                    /* margin-left: 50px; */
                    align-items: center;
                }
                
                .form-container{
                    /* margin-top: 30px; */
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    font-size: 25px;
                    height: 86vh;
                    justify-content: space-evenly;
                }
                
                input{
                    width: 400px;
                    font-size: 20px;
                }        
                `}</style>
                <div className="form-container">
                <label htmlFor="name">Nombre(s):</label>
                <input type="text" name="name" id=""/>

                <label htmlFor="state">Estado:</label>
                <input type="text" name="state" id=""/>
                <label htmlFor="city">Ciudad:</label>
                <input type="text" name="city"/>
                <label htmlFor="addres">Dirección:</label>
                <input type="text" name="address" id=""/>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id=""/>
                <label htmlFor="tel">Telefono:</label>
                <input type="text" name="tel" id=""/>
                <label htmlFor="type">Registrarse como:</label>    
                <select name="type" id="">
                    <option value="User">Paciente</option>
                    <option value="Nurse">Enfermera(o)</option>
                </select>
                </div>
                <div>
                    <img src="images/register.jpg" alt=""/>
                </div>
                <button>Hola</button>
            </form>
            <Footer/>
     </div>
    )
}

export default Register;