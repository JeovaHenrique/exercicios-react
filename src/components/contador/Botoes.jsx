/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    const {setInc,setDec} = props
    return (
        <div>
            <button onClick={setInc}>+</button>
            <button onClick={setDec}>-</button>
        </div>
    )
}