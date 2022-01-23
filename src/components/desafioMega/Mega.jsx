/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'


export default props => {

    function gerarNumeroAleatorio(min, max, array) {
        const aletorio = parseInt(Math.random()*(max + 1 - min))+min
        return(
            array.includes(aletorio) ? gerarNumeroAleatorio(min, max,array) :
            aletorio
            )
    }
        
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroAleatorio(1,60,nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1,n2) => n1-n2)
    
        return numeros
    }

    
    const [qtde,setQtde] = useState(props.qtde || 6)
    const numerosiniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosiniciais)
    return (
        <div>
            <h1>Mega</h1>
            <h3>{numeros.join(' | ')}</h3>
            <div>
                <label>Qtde de Números: </label>
                <input 
                    min='5'
                    max='10'
                    type="number" 
                    value={qtde}
                    onChange={e => setQtde(+e.target.value)}
                />
            </div>
            <button onClick={e => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}
