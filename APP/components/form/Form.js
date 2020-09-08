import React from 'react';
import { FormProvider, useForm } from "react-hook-form";

let Form = React.forwardRef((props, ref) => {
    const formMethods = useForm({mode: (props.mode != undefined ? props.mode : 'onChange')});
    
    React.useImperativeHandle(ref, () => ({
        reset: formMethods.reset,
        clearErrors: formMethods.clearErrors,
        setValue: formMethods.setValue,
        getValues: formMethods.getValues,
        trigger: formMethods.trigger,
        errors: formMethods.errors
    }));

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={ formMethods.handleSubmit((props.onSubmit != undefined ? props.onSubmit : ()=>{})) }>
                {props.children}
            </form>
        </FormProvider>
    );
});

export { Form };