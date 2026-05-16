import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import Estrela from "./Estrela"

const Avaliacao = () => {

    const numEstrelas = 5
    const estrelas = [...Array(numEstrelas)]
    const [avaliacao, setAvaliacao] = useState(0)

    return(
        <div>
            {estrelas.map((_, i) => (
                <Estrela
                    key={uuidv4()}
                    selecionado={avaliacao > i}
                    aoSelecionar={() => {setAvaliacao(i+1)}}
                />
            ))}
        </div>
    )
}

export default Avaliacao

