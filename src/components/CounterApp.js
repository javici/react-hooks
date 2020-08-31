import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50
    })

    const { counter1, counter2 } = state;

    return (
        <>
            <h4>Counter 1: {counter1}</h4>
            <h4>Counter 2: {counter2}</h4>

            <button
                className="btn btn-primary"
                onClick={
                    () => {
                        setState({
                            ...state,
                            counter1: counter1 + 1
                        })
                    }

                }
            >+1</button>

        </>
    )
}
