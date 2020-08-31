import React from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const SimpleFormWithCustomHook = () => {

    const { formState: form, inputName, inputEmail, inputPassword } = useForm();
    const { name, email, password } = form;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="false"
                    value={name}
                    onChange={(e) => inputName(e.target.value)}
                >
                </input>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete="false"
                    value={email}
                    onChange={(e) => inputEmail(e.target.value)}
                >
                </input>
            </div>

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Your password"
                    autoComplete="false"
                    value={password}
                    onChange={(e) => inputPassword(e.target.value)}
                >
                </input>
            </div>

            {(name === '123') && <Message />}


            <button type="submit" className="btn btn-primary">SAVE</button>
        </form>
    )
}
