/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input 
                id='passoInput'
                type="number" 
                value={props.Passo} 
                onChange={e => props.setPasso(+e.target.value)}
            />  
        </div>
    )
}