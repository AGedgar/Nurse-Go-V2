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

const AppPacientePage = (props) => {

    return (
        <div>
            <style jsx>{`
            .form-requisitos{
                display: flex;
                justify-content: space-around;
                font-size: 16px;
                height: 76.90vh;
            }
            
          `}</style>
            <UserNav data={props}/>
            <div className="form-requisitos">
                <Form>
                <h3>Buscar enfermera(o)</h3>
                <SelectInput name="enfermedad" placeholder="Enfermedad" validations={[{type: "required"}]} margin="0 0 20px 0" width="300px">
                    <option value="">Selecciona una opción</option>
                    <option value="COVID">COVID</option>
                    <option value="DENGUE">DENGUE</option>
                </SelectInput>
                <SelectInput name="horario" placeholder="Horario" validations={[{type: "required"}]} margin="0 0 20px 0"  width="300px">
                    <option value="">Selecciona una opción</option>
                    <option value="8-14">8:00 A 14:00 PM</option>
                    <option value="16-20">16:00 PM A 20:00 PM</option>
                </SelectInput>
                <AreaInput name="descripcion" placeholder="Descripción sobre el tratamiento" validations={[{type: "required"}]} margin="0 0 20px 0" width="500px"/>
                <SubmitButton>Buscar enfermera(o)</SubmitButton>
                </Form>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119445.50389888891!2d-103.47402158050247!3d20.682919304175375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae61a9704c13%3A0xafd8a5d47ed002ac!2sZapopan%2C%20Jal.!5e0!3m2!1ses!2smx!4v1599704671396!5m2!1ses!2smx" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            <Footer/>   
        </div>
    )
}

export default PacienteAuthHoc(AppPacientePage);