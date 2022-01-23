/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    const {aoClicar} = props
    return (
        <div>
            <div><strong>Filho</strong></div>
            <button onClick={e => aoClicar('João', 53, true)}> Enviar Dados 
            </button>
        </div>
    )
}