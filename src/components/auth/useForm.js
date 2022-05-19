import { useState } from 'react';

const useForm = validate => {

    const[values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    });
    
    const handleChange = e => {
        setValues({
            ...values, [e.target.name]:e.target.value
        });
        console.log(e.target.value);
    };

    const [errors, setErrors] = useState({});
    
    const handleClientError = e => {
        // e.preventDefault();
        setErrors(validate(values));
    };

    // return {handleChange, values, errors};
    return {handleChange, values, handleClientError, errors};
};

export default useForm;