import React from "react";
import { PacienteAuthHoc } from '@/components/hocs/PacienteAuthHoc';
import { Api } from '@/functions/Api';
import { useState, useEffect } from "react";
import { UserNav } from "@/components/nav/UserNav";
import { Footer } from "@/components/footer/footer";
import { Form } from '@/components/form/Form';
import { Button } from '@/components/form/Button';
import { TextInput } from '@/components/form/TextInput';
import { SubmitButton } from '@/components/form/SubmitButton';
import { SelectInput } from '@/components/form/SelectInput';
import { AreaInput } from '@/components/form/AreaInput';
import { TextView } from '@/components/form/TextView';
import { FormGroup } from '@/components/form/FormGroup';
import { FormGroupRow } from '@/components/form/FormGroupRow';
import { FormFooter } from '@/components/form/FormFooter';
import { PageLoaderLayout } from '@/components/layout/PageLoaderLayout';
import { update } from "lodash";
const jwt = require('jsonwebtoken');

const PacientProfilePage = (props) => {

    const formRef = React.useRef();

    const [ loadingPage, setLoadingPage ] = React.useState(false);

    React.useEffect(() =>{
        let token = props.cookies.token;
        let decoded = jwt.decode(token);
        Api.get(`users/${decoded.id}`).then((response) =>{
            if(response.status == 200){
                let data = response.json.user
                formRef.current.reset({nombre: data.nombre, apellidos: data.apellidos, estado: data.estado, ciudad: data.ciudad, telefono: data.telefono, correo: data.correo})
            }
        })
        
        },[]);

        const handleClickEdit = (formData) =>{
            setLoadingPage(true)
            let data = {nombre: formData.nombre, apellidos: formData.apellidos, correo: formData.correo, estado: formData.estado, ciudad: formData.ciudad, telefono: formData.telefono }
            let token = props.cookies.token;
            let decoded = jwt.decode(token);
            Api.put(`users/${decoded.id}`,data).then((response) =>{
                setLoadingPage(false)
            })           
        }


    return (
        <PageLoaderLayout loading={ loadingPage }>
          <style jsx>{`
                .profile-container{
                    display: flex;
                }

                .left-nav{
                    width: 250px;
                    height: 92vh;
                    background: #3d1152;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                .left-nav > .text-left-nav{
                    margin-bottom: 20px;
                }

                .left-nav > .text-left-nav > a{
                    color: #fff;
                    text-decoration: none;
                }

                .left-nav > .text-left-nav > a:hover{
                    color: #000;
                    text-decoration: none;
                }

                .right-container{
                    display: flex;
                    margin: 0 auto 0 auto;
                    flex: 1;
                }

           `}</style>
           <UserNav data={props}/>
           <div className="profile-container">
            <div className="left-nav">
                    <div className="text-left-nav"><a href="/app-paciente">Buscar enfermera(o)</a></div>
                    <div className="text-left-nav"><a href="/perfil-paciente">Perfil</a></div>
            </div>
            <div className="right-container">
                <Form ref={formRef} onSubmit={handleClickEdit}>
                    <FormGroupRow>
                         <TextInput name='nombre' placeholder='Nombre' validations={[{type: "required"}]} width="70%" margin="20px 0 20px 20px"/>
                         <TextInput name='apellidos' placeholder='Apellidos' validations={[{type: "required"}]} width="70%" margin="20px 0 20px 20px"/>
                    </FormGroupRow>
                    <FormGroupRow>
                         <TextInput name='estado' placeholder='ESTADO' validations={[{type: "required"}]} width="70%" margin="20px 0 20px 20px"/>
                         <TextInput name='ciudad' placeholder='CIUDAD' validations={[{type: "required"}]} width="70%" margin="20px 0 20px 20px"/>
                    </FormGroupRow>
                    <FormGroupRow>
                         <TextInput name='correo' placeholder='correo' validations={[{type: "required"}]} width="70%" margin="20px 0 20px 20px"/>
                         <TextInput name='telefono' placeholder='telefono' validations={[{type: "required"}]} width="50%" margin="20px 0 20px 20px"/>
                    </FormGroupRow>
                    <FormFooter>
                        <SubmitButton margin="0 20px 0 0" style="purple">Editar</SubmitButton>
                </FormFooter>
                </Form> 
            </div>
           </div>
        </PageLoaderLayout>
    )
}

export default PacienteAuthHoc(PacientProfilePage);