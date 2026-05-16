import CartaoReceita from "../CartaoReceita"
import { v4 as uuidv4 } from "uuid";
import receitasJson from "../../json/receitas.json"
import { useState } from "react";

const Corpo = () => {
    const [receitas, setReceitas] = useState(receitasJson.receitas)

    const apagaReceita = (id: number) =>{
        setReceitas(receitas.filter(receita => receita.id!=id))
    }
    return (<main>
        {receitas.map(receita=> <CartaoReceita
        key={uuidv4()}
        id={receita.id}
        nome={receita.nome}
        imagem={receita.imagem}
        ingredientes={receita.ingredientes}
        instrucoes={receita.instrucoes}
        aoApagar={apagaReceita}
        />)}
    </main>
    )
}

export default Corpo