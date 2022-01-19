/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Tabela from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {
    const tabelaProdutos = Tabela.map((Tabela, i)=>{
        return (
            // eslint-disable-next-line eqeqeq
            <tr key={Tabela.id} className={ i % 2 == 0 ? 'Par' : ''}>
                <td>{Tabela.produto}</td>
                <td>R$ {Tabela.valor.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    })
    return (
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaProdutos}   
                </tbody>
            </table>
        </div>
    )
}

