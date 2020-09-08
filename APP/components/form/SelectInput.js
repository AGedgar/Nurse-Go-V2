import React from 'react';
import { useFormContext } from "react-hook-form";
import { usePrevious } from '@/components/hooks/usePrevious';
var _ = require('lodash');

const SelectInput = React.forwardRef((props, ref) => {
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

    return (
        <div className="select" attr-disabled={(props.disabled ? "true" : "false")} attr-validated={(_.get(context, 'errors.'+props.name, undefined) != undefined && props.disabled != true ? 'false' : 'true')}>
            <style jsx>{`
                .select{
                    position: relative;
                    width:  ${(props.width != undefined ? props.width : "200px")};
                    margin: ${(props.margin != undefined ? props.margin : "0")};
                }
                .label{
                    font-size: 12px;
                    font-weight: bold;
                    color: #858383;
                    position: absolute;
                    left: 12px;
                    top: 5px;
                    text-transform: uppercase;
                    pointer-events:none;
                }
                .select[attr-validated="false"] select{
                    border: 1px solid #F44336;
                }
                .select[attr-validated="false"] label{
                    color: #F44336;
                }
                .select[attr-validated="false"] .validation-error-message{
                    color: #F44336;
                    font-size: 12px;
                    font-weight:bold;
                    margin-top: 2px;
                }
                .arrow{
                    position: absolute;
                    right: 10px;
                    top: 16px;
                    pointer-events: none;
                }
                select{
                    width: 100%;
                    -webkit-appearance: none;
                    border: 0px;
                    background-color: #fff;
                    font-weight: normal;
                    font-size: 13px;
                    color: #858383;
                    background-color: #fff;
                    padding-top: 18px;
                    padding-bottom: 4px;
                    padding-left: 10px;
                    padding-right: 20px;
                    border: 1px solid #d4d8dc;
                    border-radius: 5px;
                }
                .select[attr-disabled="true"] .label{
                    color: #d0d0d0;
                }
                .select[attr-disabled="true"] select{
                    color: #d0d0d0;
                }
            `}</style>
            <label className="label" htmlFor={"select-input-"+props.name}>{props.placeholder}</label>
            <label className="arrow" htmlFor={"select-input-"+props.name}><img src="/images/vectors/select-arrow.svg"></img></label>
            <select ref={ref} name={props.name} id={"select-input-"+props.name} disabled={(props.disabled == true ? true : false)} readOnly={(props.readOnly == true ? true : false)} onChange={handleChange}>
                {props.children}
            </select>
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

export { SelectInput }