/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './App.css'

import FamilyMember from './components/basic/FamilyMember'
import Family from './components/basic/Family'
import First from './components/basic/First'
import Props from './components/basic/Props'
import Fragment from './components/basic/Fragment'
import NumberRandom from './components/basic/NumberRandom'
import Card from './components/Layout/Card'
import ListadeAlunos from './components/repeticao/ListadeAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import Indiretapai from './components/Communication/IndiretaPai'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/desafioMega/Mega'


export default () => 
    <div className='App'>
        <h1>Fundamentos de React</h1>
        <div className='Cards'>
            <Card title='#11 - Mega' color='#0080ff'>
                <Mega qtde={8}></Mega>
            </Card>
            <Card title='#10 - Contador' color='#0f0f0'>
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card title='#09 - Controlados e nao controlados' color='#0000ff'>
                <Input></Input>
            </Card>
            <Card title='#08 - Indiretas' color='#bf00ff'>
                <Indiretapai></Indiretapai>
            </Card>
            <Card title='#07 - Tabela Produtos' color='#ff8000'>
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card title='#06 - Lista Alunos' color='#bf00ff'>
                <ListadeAlunos></ListadeAlunos>
            </Card>
            <Card title='#05 - Family' color='#0000ff'>
                <Family surname='Linhares'>
                    <FamilyMember firstName = 'Jeová'/>
                    <FamilyMember firstName = 'Izabel'/>
                    <FamilyMember firstName = 'Ian'/>
                </Family>
            </Card>
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