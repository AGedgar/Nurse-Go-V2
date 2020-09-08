import React from "react"
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/footer";
import { Form } from '@/components/form/Form';
import { Button } from '@/components/form/Button';
import { TextInput } from '@/components/form/TextInput';
import { SubmitButton } from '@/components/form/SubmitButton';
import { SelectInput } from '@/components/form/SelectInput';
import { PasswordInput } from '@/components/form/PasswordInput';

const Register = () =>{

const formRef = React.useRef();

const handleRegistrarseClick = (formData) =>{
    let data = {nombre: formData.name, correo: formData.email, estado: formData.state, ciudad: formData.city, telefono: formData.tel, password: formData.password, tipoUsuario: formData.tipoUsuario }
    fetch('users', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
}

    return(
        <div>
             <style jsx>{`
               .form-register{
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                height: 80.8vh;
                margin-bottom: 40px;
               }
            `}</style>
         <Nav/>
            <div className="form-register">
                <Form ref={formRef} onSubmit={handleRegistrarseClick}>
                    <TextInput name="name" placeholder="Nombre" margin="0 0 20px 0" width="300px"/>
                    <TextInput name="email" placeholder="Email" margin="0 0 20px 0" width="300px"/>
                    <TextInput name="state" placeholder="Estado" margin="0 0 20px 0" width="300px"/>
                    <TextInput name="city" placeholder="Ciudad" margin="0 0 20px 0" width="300px"/>
                    <TextInput name="tel" placeholder="Telefono" margin="0 0 20px 0" width="300px"/>
                    <PasswordInput name="password" placeholder="Contraseña" margin="0 0 20px 0" width="300px"/>
                    <SelectInput name="tipoUsuario" placeholder="Tipo" width="300px" margin="0 0 20px 0">
                            <option value="">Selecciona tipo</option>
                            <option value="User">Paciente</option>
                            <option value="Nurse">Enfermera(o)</option>
                    </SelectInput>
                    <SubmitButton width="300px">Registrarse</SubmitButton>
                </Form>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;