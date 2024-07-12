import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {
                    props.lista.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export { ListaSuspensa }