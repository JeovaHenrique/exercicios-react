/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './App.css'
import First from './components/basic/First'
import Props from './components/basic/Props'
import Fragment from './components/basic/Fragment'
import NumberRandom from './components/basic/NumberRandom'
import Card from './components/Layout/Card'


export default () => 
    <div className='App'>
        <h1>Fundamentos de React</h1>
        <div className='Cards'>
            <Card title='#04 - Random Challenge' color='#080'>
                <NumberRandom min = {10} max= {100}/>
            </Card>
            <Card title='#03 - Fragment' color='#ffff00'>
                <Fragment />
            </Card>
            <Card title='#02 - Random Challenge' color='#00ff80'>
                <Props titulo='Situação do aluno' aluno='Pedro' nota={9.3}/>
            </Card>
            <Card title='#01 - First' color='#0080ff'>
                <First/>
            </Card>
        </div>
    </div>