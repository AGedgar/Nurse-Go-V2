import React from "react";
import { EnfermeraAuthHoc } from '../components/hocs/EnfermeraAuthHoc';
import { useState, useEffect } from "react";
import { UserNav } from "../components/nav/UserNav";
import { Footer } from "../components/footer/footer";
import { Form } from '@/components/form/Form';
import { Button } from '@/components/form/Button';
import { TextInput } from '@/components/form/TextInput';
import { SubmitButton } from '@/components/form/SubmitButton';
import { SelectInput } from '@/components/form/SelectInput';
import { AreaInput } from '@/components/form/AreaInput';

const EnfermeraProfilePage = (props) => {

    return (
        <div>
          <style jsx>{`
                .left-nav{
                    width: 250px;
                    height: 90vh;
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

           `}</style>
           <UserNav data={props}/>
           <div className="left-nav">
                <div className="text-left-nav"><a href="/app-enfermera">Buscar enfermera(o)</a></div>
                <div className="text-left-nav"><a href="/perfil-enfermera">Perfil</a></div>
           </div>
        </div>
    )
}

export default EnfermeraAuthHoc(EnfermeraProfilePage);