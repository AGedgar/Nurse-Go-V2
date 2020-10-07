import React from 'react';
import cookies from 'next-cookies'
const jwt = require('jsonwebtoken');

const PacienteAuthHoc = (Component) => {
    let WrappedComponent = (props) => {
        return(<Component {...props}></Component>);
    }

    WrappedComponent.pageTitle = Component.pageTitle;
    WrappedComponent.getInitialProps = async (context) => {
        let token = cookies(context).token;
        let decoded = jwt.decode(token);
        if(token === undefined){
            context.res.writeHead(302, { 
                Location: '/login'
            });
            context.res.end();
        }else if(decoded.tipoUsuario == "Paciente"){
            let route = {pathname: context.pathname, query: context.query, asPath: context.asPath}
            return {route, cookies: cookies(context)};
        }else{
            context.res.writeHead(302, { 
                Location: '/perfil-enfermera'
            });
            context.res.end();
        }
    }
    
    return WrappedComponent
}

export { PacienteAuthHoc }