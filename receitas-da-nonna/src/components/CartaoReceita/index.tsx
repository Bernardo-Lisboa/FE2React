import type { MouseEventHandler } from "react"

interface CartaoReceitaProps {
    nome: String
    ingredientes: {
        nome: string
        quantidade: number
        medida: string
    }[]
    instrucoes: string[]
    aoApagar: (id: number) => void
    id: number
}

const CartaoReceita = ( {nome, ingredientes, instrucoes, aoApagar, id}: CartaoReceitaProps ) => {
    return (
        <div className="card mb-3">
            <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{ nome }</h4>
                    <h5 className="card-title">Ingredientes: </h5>
                    <ul>{ingredientes.map(ingrediente => <li>{ingrediente.nome} ({ingrediente.quantidade}-{ingrediente.medida})</li>)}</ul>
                    <p className="card-text"></p>
                    <h5 className="card-title">Instruções:</h5>
                    <ol>{ instrucoes.map(instrucao => <li>{instrucao}</li>) }</ol>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => aoApagar(id)}>Excluir</button>
        </div>
    )
}

export default CartaoReceita