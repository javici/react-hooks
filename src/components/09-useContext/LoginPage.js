import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginPage = () => {

    const { setUser } = useContext(UserContext);

    const user = {
        id: new Date().getTime(),
        name: 'Filipino',
        email: 'filipino@gmail.com'
    }


    return (
        <>
            <h1>
                LoginPage
            </h1>
            <button
                onClick={() => setUser(user)}
                className="btn btn-primary"
            >
                setUser
            </button>
        </>
    )
}
