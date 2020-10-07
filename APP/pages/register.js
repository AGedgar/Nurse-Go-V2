import React from "react"
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/footer/footer";
import { Form } from '@/components/form/Form';
import { Button } from '@/components/form/Button';
import { TextInput } from '@/components/form/TextInput';
import { SubmitButton } from '@/components/form/SubmitButton';
import { SelectInput } from '@/components/form/SelectInput';
import { PasswordInput } from '@/components/form/PasswordInput';
import { useRouter } from 'next/router'

const Register = () =>{

const formRef = React.useRef();

const router = useRouter();

const handleRegistrarseClick = (formData) =>{
    let data = {nombre: formData.name, correo: formData.email, estado: formData.state, ciudad: formData.city, telefono: formData.tel, password: formData.password, tipoUsuario: formData.tipoUsuario }
    fetch('http://localhost:5000/users', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then((response)=>{
          if(response.status == 201){
            router.push('/login')
          }else if(response.status == 400){
            alert("El correo ya se encuentra registrado")
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
                height: 73vh;
                margin-bottom: 40px;
               }
            `}</style>
         <Nav/>
            <div className="form-register">
                <Form ref={formRef} onSubmit={handleRegistrarseClick}>
                    <TextInput name="name" placeholder="Nombre" validations={[{type: "required"}]} margin="0 0 20px 0" width="300px"/>
                    <TextInput name="email" placeholder="Email" validations={[{type: "required"}]} margin="0 0 20px 0" width="300px"/>
                    <TextInput name="state" placeholder="Estado" validations={[{type: "required"}]} margin="0 0 20px 0" width="300px"/>
                    <TextInput name="city" placeholder="Ciudad" validations={[{type: "required"}]} margin="0 0 20px 0" width="300px"/>
                    <TextInput name="tel" placeholder="Telefono" validations={[{type: "required"}]} margin="0 0 20px 0" width="300px"/>
                    <PasswordInput name="password" placeholder="Contraseña" validations={[{type: "required"}]} margin="0 0 20px 0" width="300px"/>
                    <SelectInput name="tipoUsuario" placeholder="Tipo" validations={[{type: "required"}]}  width="300px" margin="0 0 20px 0">
                            <option value="">Selecciona tipo</option>
                            <option value="Paciente">Paciente</option>
                            <option value="Enfermera/o">Enfermera(o)</option>
                    </SelectInput>
                    <SubmitButton width="300px">Registrarse</SubmitButton>
                </Form>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;