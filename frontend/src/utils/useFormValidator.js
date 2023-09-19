import { useCallback, useState } from 'react';

function useFormValidator() {
    const[values, setValues] = useState({});
    const[errors, setErrors] = useState({});
    const[hideInput, setHideInput] = useState({});
    const[isValid, setIsValid] = useState(false);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        const validationMessage = e.target.validationMessage;
        const valid = e.target.validity.valid;
        const form = e.target.form;
        
        setValues((oldValues) => {
            return {...oldValues, [name]: value};
        });

        setErrors((oldErrors) => {
            return {...oldErrors, [name]: validationMessage};
        });

        setHideInput((oldValid) => {
            return {...oldValid, [name]: valid};
        });

        setIsValid(form.checkValidity());

    }

    function resetValidation(data = {}) {
        setValues(data);
        setErrors({});
        setHideInput({});
        setIsValid(false);
    }

    const setValue = useCallback((name, value) => {
        setValues((oldValues) => {
            return {...oldValues, [name]: value} 
        });
    }, []);

    return {values, errors, hideInput, isValid, handleChange, resetValidation, setValue};
}

export default useFormValidator;