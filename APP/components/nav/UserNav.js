import React from "react";

const UserNav = (props) =>{

 const  handleDeleteCookie = () =>{
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    document.cookie = 'nombre=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    }
    
    return(
        <div className="containerNav">
            <style jsx global>{`
                html, body{
                    background-color: #f3edf5;
                }
            `}</style>
            <style jsx>{`
            .containerNav{
                left: 35%;
                border-color: black;
                background-color: #3d1152;
            }
            .nav{
                overflow: hidden; 
                
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-right: 30px;
                font-size: 16px;
                height: 8vh;
            }
            
            .nav a{
                text-decoration: none;
                color: #fff;
            }

            
            .nav ol{
                text-decoration: none;
                color: #fff;
            }
            
            .nav a:hover{
                color: black;
            }
          `}</style>
            <div className="nav">
            <ol>Bienvenido {props.data.cookies.nombre} </ol>
            {/* <ol><a href={props.data.cookies.tipoUsuario == "Paciente" ? "/app-paciente" : "app-enfermera"}>Servicios</a></ol> */}
            <ol><a onClick={handleDeleteCookie} href="/" >Salir</a></ol>
            </div>
        </div>
    )

}

export {UserNav};