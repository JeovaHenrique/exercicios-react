/* eslint-disable import/no-anonymous-default-export */
import React, { useState }from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [geek, setGeek] = useState(false)
    function TiposPais(name, age, geek) {
        setName(name)
        setAge(age)
        setGeek(geek)
    }
    return (
        <div>
            <div>
                <div>{name}</div>
                <div> {age}</div>
                <div> {geek ? 'Verdadeiro' : 'Falso'}</div>
            </div>
            <IndiretaFilho aoClicar={TiposPais}></IndiretaFilho>
        </div>
    )
}