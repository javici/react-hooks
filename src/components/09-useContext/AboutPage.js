import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutPage = () => {

    const { user } = useContext(UserContext)
    console.log("AboutPage -> user", user)

    return (
        <>
            <h1>
                AboutPage
            </h1>
            <hr />

            <pre className="container">
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
