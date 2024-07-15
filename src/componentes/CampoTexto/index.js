//import { useState } from 'react'
import './CampoTexto.css'


const CampoTexto = (props) =>{
    const placeholderModificado = `${props.placeholder}...`
    //let value = '';               
    //const [value, setValue] = useState('') //valor inicial ''

    const onChange = (event) =>{
        //setValue(event.target.value);
        //console.log(value);
        //Buscar duma forma menos local
        props.onChange(event.target.value);

    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.value} required={props.obrigatorio} onChange={onChange} placeholder={placeholderModificado} />
        </div>
    )
}


export {CampoTexto};
