import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomerHooks = () => {

    const { state: counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with custom hook: {counter}</h1>

            <button className="btn" onClick={() => increment(2)}>+1</button>
            <button className="btn" onClick={reset}>reset</button>
            <button className="btn" onClick={() => decrement(2)}>-1</button>
        </>
    )
}
