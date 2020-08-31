import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {
    console.log('ye');
    return (
        <button className="btn btn-primary"
            onClick={() => {
                increment(5)
            }}
        >
            Increment
        </button>
    )
})
