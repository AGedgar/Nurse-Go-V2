import React from "react"
import { Nav } from "../components/nav/Nav";
// import { Footer } from "../components/footer/footer";

const Login = () => {
    return (
       <div>
         <Nav/>
         <div className="loggin">
            <style jsx>{`
                .loggin {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    height: 80.8vh;
                    margin-bottom: 40px;
                }
                
                .loggin > input{
                    margin-top: 20px;
                    border: 1px solid black;
                    border-radius: 10px;
                    font-size: 23px;
                }
                
                .loggin > button{
                    margin-top: 20px;
                    width: 400px;
                    height: 35px;
                    border: 1px solid black;
                    border-radius: 10px;
                    font-size: 20px;
                }
            `}</style>
            <h1>Inicia Sesión</h1>
            <input type="text" name="user" id="" placeholder="Usuario"/>
            <input type="text" name="pass" id="" placeholder="Contraseña"/>
            <button>Entrar</button>
        </div>
        {/* <Footer/> */}
    </div>
    )
}


export default Login;