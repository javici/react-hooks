import React, { useState, useMemo } from 'react'
import { useCounter } from '../hooks/useCounter';
import { heavyProcess } from '../helpers/heavyProcess';

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);
    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter])

    return (
        <>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{heavyProcessMemo}</p>
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <hr />

            <button className="btn btn-primary" onClick={() => setShow(!show)}>Show/Hide {
                JSON.stringify(show)
            }</button>
        </>
    )
}
