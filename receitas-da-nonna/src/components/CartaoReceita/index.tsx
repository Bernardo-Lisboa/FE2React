import Avaliacao from "../Avaliacao"
import { FaTrash } from "react-icons/fa";

interface CartaoReceitaProps {
    nome: string
    ingredientes: {
        nome: string
        quantidade: number
        medida: string
    }[]
    instrucoes: string[]
    imagem: string
    aoApagar: (id: number) => void
    id: number
}

const CartaoReceita = ( {nome, ingredientes, instrucoes, imagem, aoApagar, id}: CartaoReceitaProps ) => {
    return (
        <div className="card mb-3 col-6 shadow">
            <div className="card-img-top">
                <img src={imagem} className="card-img" alt={nome}></img>
            </div>
            <div className="card-body">
                
            </div>
                <div className="card-body">
                    <h4 className="card-header">{ nome }</h4>
                    <h5 className="card-title fw-bold">Ingredientes: </h5>
                    <ul className="card-body">{ingredientes.map(ingrediente => <li>{ingrediente.nome} ({ingrediente.quantidade}-{ingrediente.medida})</li>)}</ul>
                    <p className="card-text"></p>
                    <h5 className="card-title fw-bold">Instruções:</h5>
                    <ol>{ instrucoes.map(instrucao => <li>{instrucao}</li>) }</ol>
                </div>
                <div className="card-footer" style={{display: "flex", justifyContent: "space-between"}}>
                    <Avaliacao/>
                    <FaTrash size={20} color="red" onClick={() => aoApagar(id)} style={{cursor: "pointer"}}/>
                </div>
        </div>
    )
}

export default CartaoReceita