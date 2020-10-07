import React from 'react';
import Router from "next/router";
import cookies from 'next-cookies'
import { Form } from '../components/form/Form';
import { TextInput } from '../components/form/TextInput';
import { PasswordInput } from '../components/form/PasswordInput';
import { SubmitButton } from '../components/form/SubmitButton';
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/footer";
import { Api } from '../functions/Api';
const jwt = require('jsonwebtoken');

const Login = (props) => {
    const [ showWrongCredentialsAlert, setShowWrongCredentialsAlert ] = React.useState(false);

    const handleLoginFormSubmit = (formData) => {
        setShowWrongCredentialsAlert(false);
        let data = { correo: formData.correo, password: formData.password };
        fetch('http://localhost:5000/login', {
            method: 'POST', 
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then((response) => {
            if(response.status == 200){
                Api.get(`login?correo=${formData.correo}`).then((response) =>{
                    let data = response.json;
                    console.log(data)
                    document.cookie = `token=${data.token}; path=/`;
                    document.cookie = `nombre=${data.nombre}; path=/`;
                    if(data.tipoUsuario == "Paciente"){
                        Router.push({pathname: `/perfil-paciente/${data.id}`});
                    }else{
                        Router.push({pathname: `/perfil-enfermera/${data.id}`});
                    }
                })
                // fetch(`http://localhost:5000/login${'?correo='+formData.correo}`)
                // .then(response => response.json())
                // .then(data => {
                //     document.cookie = `token=${data.token}; path=/`;
                //     document.cookie = `nombre=${data.nombre}; path=/`;
                //     if(data.tipoUsuario == "Paciente"){
                //         Router.push({pathname: '/perfil-paciente'});
                //     }else{
                //         Router.push({pathname: '/perfil-enfermera'});
                //     }
                // });

            }else{
                setShowWrongCredentialsAlert(true);
            }
        })
    }

    return(
        <div className="page-container">
            <style jsx>{`
                .page-container{
                    display:flex;
                    justify-content: center;
                    height: 100%;
                    min-height: 100vh;
                }
                .login-section, .img-section{
                    width:100%;
                }
                .header{
                    width: 100%;
                    box-sizing: border-box;
                    display:flex;
                    background-color: #fff;
                    padding: 20px 40px 0px 40px;
                    margin-bottom: 35px;
                }
                .logo{
                    height: 90px;
                    display: flex;
                    align-items: center;
                }
                .logo img{
                    height: 100%;
                }
                .website-link{
                    flex: 1;
                    display:flex;
                    justify-content:flex-end;
                    margin-top: 15px;
                }
                .website-link a{
                    font-size: 15px;
                    color:#686565;
                    text-decoration:none;
                    font-weight: 400;
                }
                .website-link a:hover{
                    text-decoration:underline;
                }
                .titles{
                    display:flex;
                    justify-content: center;
                    width: 100%;
                    flex-wrap: wrap;
                }
                .title-1{
                    width: 100%;
                    color: #686565;
                    font-weight: bold;
                    font-size: 22px;
                    text-align: center;
                }
                .title-2{
                    width: 100%;
                    color: #686565;
                    font-weight: 300;
                    font-size: 18px;
                    text-align: center;
                }
                .title-3{
                    width: 100%;
                    color: #686565;
                    font-weight: 400;
                    font-size: 14px;
                    text-align: center;
                    margin-top: 20px;
                }
                .form-container{
                    min-width: 250px;
                    width: 400px;
                    margin: 45px auto;
                    padding: 0px 20px;
                    box-sizing:border-box;
                }
                .login-img{
                    background: url(images/login-img.jpg) no-repeat center;
                    width: 100%;
                    height: 100%;
                    min-height: 100vh;
                    background-size: cover;
                }
                .wrong-credentials-alert{
                    margin-bottom: 20px;
                    text-align: center;
                    margin-top: 10px;
                    color: #F44336;
                    font-size: 14px;
                    font-weight: 500;
                }
                .hide{
                    display:none;
                }
                @media (max-width: 800px) {
                    .login-section{
                        width:100%;
                    }
                    .img-section{
                        width:0%;
                    }
                }
            `}</style>
            <div className="login-section">
            <Nav/>
                <div className="header">
                    
                </div>
                <div className="titles">
                    <div className="title-1">NURSE GO</div>
                    <div className="title-2"></div>
                    <div className="title-3">INTRODUCE CORREO Y CONTRASEÑA</div>
                </div>
                <div className="form-container">
                    {(() => {
                        if(showWrongCredentialsAlert){
                            return (
                                <div className="wrong-credentials-alert">Correo o contraseña incorrectos</div>
                            )
                        }
                    })()}
                    <Form onSubmit={handleLoginFormSubmit}>
                        <TextInput name="correo" placeholder="Correo" width="100%" margin="0 0 20px 0" validations={[{type: "required"}]}/>
                        <PasswordInput name="password" placeholder="Contaseña" width="100%"  margin="0 0 20px 0" validations={[{type: "required"}]}/>
                        <SubmitButton width="100%">Login</SubmitButton>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    let token = cookies(context).token;
    let decoded = jwt.decode(token);
    if(token !== undefined){
        if(decoded.tipoUsuario == 'Paciente'){
            context.res.writeHead(302, {
                Location: `/perfil-paciente/${decoded.id}/`
            });
            context.res.end();
        }else{
            context.res.writeHead(302, {
                Location: '/perfil-enfermera'
            });
            context.res.end();
        }
    }
    return {
        props: {}
    };
}

export default Login;