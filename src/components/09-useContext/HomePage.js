import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomePage = () => {

    const { user } = useContext(UserContext)
    console.log("HomePage -> user", user)

    return (
        <>
            <h1>
                HomePage
            </h1>
            <hr />

            <pre className="container">
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
