import React from 'react';
import { useFormContext } from "react-hook-form";
import { usePrevious } from '@/components/hooks/usePrevious';
var _ = require('lodash');

const PasswordInput = React.forwardRef((props, ref) => {
    let context = useFormContext();
    let prevValidations = usePrevious(props.validations);

    if(ref == null){
        ref = React.useRef();
    }

    React.useEffect(()=>{
        if(context != null){
            if(!props.disabled == true){
                context.register(ref.current, getValidations());
            }
        }

        ref.current.value = (props.value != undefined ? props.value : "");
        
        return () => {
            if(context != null){
                context.unregister(props.name);
            }
        }
    }, []);

    React.useEffect(() => {
        if(context != null){
            if(!props.disabled == true){
                context.register(ref.current, getValidations());
            }
        }
    }, [context.register]);

    React.useEffect(() => {
        if(ref != null){
            if(context != null){
                if(!props.disabled == true){
                    context.register(ref.current, getValidations());
                }
            }
        }

        return () => {
            if(context != null){
                context.unregister(props.name);
            }
        }
    }, [props.name, ref.current]);

    React.useEffect(() => {
        if(!_.isEqual(props.validations, prevValidations)){
            if(context != null){
                if(!props.disabled == true){
                    context.unregister(props.name);
                    context.register(ref.current, getValidations());
                }
            }
        }
    }, [props.validations]);

    React.useEffect(() => {
        if(ref == null){
            ref = React.useRef();
        }
    }, [ref]);

    React.useEffect(() => {
        if(context != null){
            context.setValue(props.name, (props.value != undefined ? props.value : ""));
        }else{
            ref.current.value = (props.value != undefined ? props.value : "");
        }
    }, [props.value]);

    React.useEffect(() => {
        if(context != null){
            if(!props.disabled == true){
                context.register(ref.current, getValidations());
            }
        }

        ref.current.value = (props.value != undefined ? props.value : "");
        
        return () => {
            if(context != null){
                context.unregister(props.name);
            }
        }
    }, [props.disabled]);

    const getValidations = () => {
        let validations = {};
        if(props.validations != undefined){
            props.validations.forEach((e, i) => {
                if(validations.validate == undefined){
                    validations.validate = {};
                }

                if(e.type == "required"){
                    validations.required = {
                        value: true,
                        message:  (e.message != undefined ? e.message : "Required")
                    }
                }

                if(e.type == "minLenght"){
                    validations.minLength = {
                        value: e.length,
                        message:  (e.message != undefined ? e.message : "Minimum "+e.length+" characters")
                    }
                }

                if(e.type == "maxLenght"){
                    validations.maxLength = {
                        value: e.length,
                        message:  (e.message != undefined ? e.message : "Minimum "+e.length+" characters")
                    }
                }
            })
        }
        return validations;
    }

    const handleChange = (element) => {
        if(props.onChange != null){
            props.onChange(element.target.value);
        }
        if(context != null){
            context.setValue(props.name, element.target.value);
        }
    }

    return(
        <div className="input" attr-disabled={(props.disabled == true ? 'true' : 'false')} attr-validated={(_.get(context, 'errors.'+props.name, undefined) != undefined && props.disabled != true ? 'false' : 'true')}>
            <style jsx>{`
                .input{
                    position: relative;
                    width: ${(props.width != undefined ? props.width : "200px")};
                    margin: ${(props.margin != undefined ? props.margin : "0")};
                }
                .input input{
                    box-sizing: border-box;
                    width: 100%;
                    font-size: 13px;
                    padding-top: 18px;
                    padding-bottom: 4px;
                    padding-left: 10px;
                    color: #858383;
                    background-color: #fff;
                    font-weight: 400;
                    border: 1px solid #d4d8dc;
                    border-radius: 5px;
                    transition: all .15s ease;
                }
                .input[attr-validated="false"] input{
                    border: 1px solid #F44336;
                }
                .input[attr-validated="false"] label{
                    color: #F44336;
                }
                .input[attr-validated="false"] .validation-error-message{
                    color: #F44336;
                    font-size: 12px;
                    font-weight:bold;
                    margin-top: 2px;
                }
                .input input:focus{
                    outline:0; 
                }
                .input input:focus + .label, .input input:not(:placeholder-shown) + .label{
                    font-size: 12px;
                    font-weight: bold;
                    position: absolute;
                    left: 12px;
                    top: 5px;
                    transition: all .15s ease
                }
                .label{
                    font-size: 12px;
                    color: #858383;
                    position: absolute;
                    left: 12px;
                    top: 14px;
                    cursor: text;
                    text-transform: uppercase;
                }
                .input[attr-disabled="true"] .label{
                    color: #d0d0d0;
                }
                .input[attr-disabled="true"] input{
                    color: #d0d0d0;
                }
            `}</style>

            <input type="password" ref={ref} name={props.name} id={"pasword-input-"+props.name} placeholder=" " disabled={(props.disabled == true ? true : false)} readOnly={(props.readOnly == true ? true : false)} onChange={handleChange}/>
            <label className="label" htmlFor={"password-input-"+props.name}>{props.placeholder}</label>
            {(() =>{
                if(context != null){
                    if(_.get(context, 'errors.'+props.name, undefined) != undefined && props.disabled != true){
                        return (<div className={`validation-error-message`}>{_.get(context, 'errors.'+props.name, undefined).message}</div>);
                    }
                }
            })()}
        </div>
    )
});

export { PasswordInput };