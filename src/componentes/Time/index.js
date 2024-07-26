import { Colaborador } from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria };

    return (
        //<section className='time' style={{ backgroundColor:props.corSecundaria }}>
        //(props.colaboradores.length > 0) && <section className='time' style={css}> //ou
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} key={colaborador.nome} />
                })}
            </div>
        </section> : ''
    )
}

export { Time }