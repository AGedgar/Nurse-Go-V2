import React from "react";

const Nav = () =>{
    return(
        <div className="containerNav">
            <style jsx>{`
            .containerNav{
                left: 35%;
                border-color: black;
                background-color: #fdfdfd;
            }
            .nav{
                overflow: hidden; 
                
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin-right: 30px;
                font-size: 16px;
                height: 10vh;
                
                width: 100%;
            }
            
            .nav a{
                text-decoration: none;
                color: rgb(112, 104, 104);
            }
            
            .nav a:hover{
                color: black;
            }
          `}</style>
            <div className="nav">
            <ol><a href="/">Inicio</a></ol>
            <ol><a href="/nosotros">Nosotros</a></ol>
            <ol><a href="/login">Inicia Sesión</a></ol>
            <ol><a href="/register">Registrate</a></ol>
            </div>
        </div>
    )
}


export { Nav };