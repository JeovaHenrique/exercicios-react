/* eslint-disable import/no-anonymous-default-export */
import React from 'react'


export default (props) => {
    const {min, max} = props
    const Alea = parseInt(Math.random()*(max-min + 1)) + min
    return(
        <div>
            <h2>Valor Aleatório</h2>
            <strong>Valor maximo: </strong> {max} <br />
            <strong>Valor minimo: </strong> {min} <br />
            <strong>Numero Aleatorio: </strong> {Alea}
        </div>
    )
}
