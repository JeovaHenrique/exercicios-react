import React, { Component } from 'react'
import './Contador.css'

import PassoForm from './PassoForm'
import Display from './Display'
import Botoes from './Botoes'


export default class contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = ()=> {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = ()=> {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contator</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm Passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>               
            </div>
        )
    }
}