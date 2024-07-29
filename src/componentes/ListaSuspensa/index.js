import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={event => props.onChange(event.target.value)}>
                <option value=""></option>
                {
                    //props.lista.map(item => <option key={item.nome}>{item.nome}</option>)
                    props.lista.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export { ListaSuspensa }