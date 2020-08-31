import { useState } from 'react';

export const useForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const inputName = (name) => {
        console.log("inputName -> name", name)
        setFormState({
            ...formState,
            name
        })
    }

    const inputEmail = (email) => {
        setFormState({
            ...formState,
            email
        })
    }

    const inputPassword = (password) => {
        setFormState({
            ...formState,
            password
        })
    }

    return {
        formState,
        inputName,
        inputEmail,
        inputPassword
    }
}
