import React from "react";
import { PacienteAuthHoc } from '../components/hocs/PacienteAuthHoc';
import { useState, useEffect } from "react";
import { UserNav } from "../components/nav/UserNav";
import { Footer } from "../components/footer/footer";
import { Form } from '@/components/form/Form';
import { Button } from '@/components/form/Button';
import { TextInput } from '@/components/form/TextInput';
import { SubmitButton } from '@/components/form/SubmitButton';
import { SelectInput } from '@/components/form/SelectInput';
import { AreaInput } from '@/components/form/AreaInput';

const PacientProfilePage = (props) => {

    return (
        <div>
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
                <Form>
                    <TextInput name="nombre" placeholder="NOMBRE"/>
                </Form>
            </div>
           </div>
        </div>
    )
}

export default PacienteAuthHoc(PacientProfilePage);