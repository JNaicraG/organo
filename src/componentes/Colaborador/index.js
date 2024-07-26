import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={imagem} alt={"Perfil do Colaborador " + nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export { Colaborador }

//const Colaborador = (props) => {
//    return (
//        <div className="colaborador">
//            <div className="cabecalho">
//                <img src="https://github.com/JNaicraG.png" alt="Perfil do Colaborador" />
//            </div>
//            <div className="rodape">
//                <h4>{props.nome}</h4>
//                <h5>{props.cargo}</h5>
//            </div>
//        </div>
//    )
//}