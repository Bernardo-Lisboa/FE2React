import { FaStar } from "react-icons/fa";

interface EstrelaProps {
    selecionado: boolean
    aoSelecionar: () => void
}

const Estrela = ( {selecionado = false, aoSelecionar}: EstrelaProps ) => {
    return (
        <FaStar color={selecionado ? "gold" : "gray"} size={30} onClick={aoSelecionar} style={{cursor: "pointer"}}/>
    )
}

export default Estrela