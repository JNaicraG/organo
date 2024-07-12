import './CampoTexto.css'


const CampoTexto = (props) =>{
    const placeholderModificado = `${props.placeholder}...`
    let value = '';

    const aoDigitar = (event) =>{
        value = event.target.value;
        console.log(value);
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} onChange={aoDigitar} placeholder={placeholderModificado} />
        </div>
    )
}


export {CampoTexto};
