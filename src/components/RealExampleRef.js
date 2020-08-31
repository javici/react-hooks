import React, { useState } from 'react'
import { MultipleCustomHooks } from './MultipleCustomHooks.js'
export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <hr />

            <button
                className="btn btn-primary mt-5"
                onClick={() => setShow(!show)}
            >
                Show/Hide
            </button>
        </>
    )
}
