/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import alunos from '../../data/alunos'

export default props => {
    const ListaAluno = alunos.map((aluno) =>{
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nameAluno} nota: {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle:'none'}}>
                {ListaAluno}
            </ul>
        </div>
    )
}