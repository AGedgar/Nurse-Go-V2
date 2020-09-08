import React from 'react';
import { useFormContext } from "react-hook-form";
import { usePrevious } from '@/components/hooks/usePrevious';
var _ = require('lodash');

const AreaInput = React.forwardRef((props, ref) => {
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

                if(e.type == "email"){
                    validations.validate.email = (value) => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || value.length < 1) ||  (e.message != undefined ? e.message : "Must be a valid email")
                }

                if(e.type == "zipCode"){
                    validations.validate.email = (value) => (/^[A-Za-za-z0-9][A-Za-z0-9\- ]{0,10}[A-Za-z0-9]$/.test(value) || value.length < 1) ||  (e.message != undefined ? e.message : "Must be a valid zip code")
                }

                if(e.type == "decimal"){

                }

                if(e.type == "latitude"){
                    
                }

                if(e.type == "longitude"){
                    
                }

                if(e.type == "bitcoin"){
                    
                }

                if(e.type == "currency"){
                    validations.validate.currency = (value) => (/^[+]?([0-9]{1,18})([.][0-9]{1,2})?$/.test(value)) ||  (e.message != undefined ? e.message : "Must be a positive number with maximum two decimals")
                    if(e.min != undefined){
                        validations.validate.currencyMin = (value) => parseFloat(parseFloat(value).toFixed(2)) >= parseFloat(parseFloat(e.min).toFixed(2)) ||  (e.minMesssage != undefined ? e.minMesssage : "Must be greater than "+parseFloat(parseFloat(e.min).toFixed(2)));
                    }
                    if(e.max != undefined){
                        validations.validate.currencyMax = (value) =>  parseFloat(parseFloat(value).toFixed(2)) <= parseFloat(parseFloat(e.max).toFixed(2)) || (e.maxMesssage != undefined ? e.maxMesssage : "Must be less than "+parseFloat(parseFloat(e.max).toFixed(2)));
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
                .input .textarea{
                    border: 1px solid #DFE2E6;
                    border-radius: 5px;
                    box-sizing: border-box;
                    overflow: hidden;
                }
                .input textarea{
                    height: ${(props.height != undefined ? "calc("+props.height+" - 23px)" : "60px")};
                    background-color: #fff;
                    box-sizing: border-box;
                    width: 100%;
                    font-size: 13px;
                    margin-top: 18px;
                    padding: 0px 10px 4px 10px;
                    color: #858383;
                    font-weight: 400;
                    border: 0px;
                    transition: all .15s ease;
                    resize: none;
                    font-family: 'Roboto',sans-serif;
                }
                .input[attr-validated="false"] .textarea{
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
                .input textarea:focus{
                    outline:0; 
                }
                .input textarea:focus + .label, .input textarea:not(:placeholder-shown) + .label{
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
            <div className="textarea">
                <textarea ref={ref} name={props.name} id={"area-input-"+props.name} placeholder=" " disabled={(props.disabled == true ? true : false)} readOnly={(props.readOnly == true ? true : false)} onChange={handleChange}></textarea>
                <label className="label" htmlFor={"area-input-"+props.name}>{props.placeholder}</label>
            </div>
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

export { AreaInput };