import React from 'react';
import { useFormContext } from "react-hook-form";
import { usePrevious } from '@/components/hooks/usePrevious';
var _ = require('lodash');

const CheckboxInput = React.forwardRef((props, ref) => {
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

        ref.current.checked = (props.checked != undefined ? props.checked : "");
        
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
            if(ref != null){
                if(context != null){
                    if(!props.disabled == true){
                        context.unregister(props.name);
                        context.register(ref.current, getValidations());
                    }
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
            context.setValue(props.name, (props.checked != undefined ? props.checked : false));
        }else{
            ref.current.value = (props.checked != undefined ? props.checked : false);
        }
    }, [props.checked]);

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
                        message: (e.message != undefined ? e.message : "Required")
                    }
                }
            })
        }
        return validations;
    }

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
    
    const handleChange = (element) => {
        if(props.onChange != null){
            props.onChange(element.target.checked);
        }
        if(context != null){
            context.setValue(props.name, element.target.checked);
        }
    }

    return (
        <div className="checkbox-container" attr-disabled={(props.disabled == true ? 'true' : 'false')} attr-validated={(_.get(context, 'errors.'+props.name, undefined) != undefined && props.disabled != true ? 'false' : 'true')}>
            <style jsx>{`
                .checkbox{
                    display: block;
                    position: relative;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    width: ${(props.width != undefined ? props.width : "100px")};
                    margin: ${(props.margin != undefined ? props.margin: "0")};
                    display: flex;
                    align-items: center;
                }
                .button{
                    min-width: 25px;
                    min-height: 25px;
                    width: 25px;
                    height: 25px;
                    border: 1px solid #DFE2E6;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    margin-right: 15px;
                }
                .checkbox input{
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }
                .button svg{
                    display: none;
                }
                .button:hover input ~ svg{
                    display:block;
                    color: #e4e4e4;
                }

                .button input:checked ~ svg {
                    display:block;
                    color: #F3BD1D;
                }
                .placeholder{
                    font-weight: normal;
                    font-size: 13px;
                    color: #868484;
                }
                .checkbox-container[attr-validated="false"] .validation-error-message{
                    color: #F44336;
                    font-size: 12px;
                    font-weight:bold;
                    margin-top: 2px;
                }
                .checkbox-container[attr-validated="false"] .button{
                    border: 1px solid #F44336;
                }
                .checkbox-container[attr-validated="false"] .placeholder{
                    color: #F44336;
                }
            `}</style>
            <label className="checkbox">
                <div className="button">
                    <input ref={ref} type="checkbox" name={props.name} disabled={props.disabled} onChange={handleChange}/>
                    <span className="checkmark"></span>
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.7271 0.272899C15.3632 -0.0909663 14.7732 -0.0909663 14.4093 0.272899L3.96101 10.7211L1.59071 8.35079C1.22684 7.98688 0.636798 7.98688 0.272933 8.35079C-0.0909776 8.7147 -0.0909776 9.3047 0.272933 9.66861L3.30217 12.6978C3.4841 12.8798 3.72262 12.9708 3.9611 12.9708C4.19958 12.9708 4.43805 12.8798 4.62003 12.6978L15.7271 1.59072C16.091 1.22681 16.091 0.636809 15.7271 0.272899Z"/></svg>
                </div>
                <div className="placeholder">{props.placeholder}</div>
            </label>
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

export { CheckboxInput };