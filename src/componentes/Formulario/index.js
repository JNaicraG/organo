import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { ListaSuspensa } from '../ListaSuspensa';
import { useState } from 'react'
import './Formulario.css'

const Formulario = (props) => {
    //const times = [
    //    'Back-End',
    //    'Front-End',
    //    'Data-Science',
    //    'DevOps',
    //    'UX e Design',
    //    'Mobile',
    //    'Inovação e Gestão'
    //];
    const [nome, setNome] = useState('') //valor inicial ''
    const [cargo, setCargo] = useState('Instrutor') //valor inicial ''
    const [imagem, setImagem] = useState('http...') //valor inicial ''
    const [time, setTime] = useState(props.times[0]) //valor inicial ''

    const onSubmit = (event) => {
        console.log('Form submetido');
        event.preventDefault(); //Eventos html: https://developer.mozilla.org/en-US/docs/Web/Events -- mas em cammel case no React: onclick vira onClick
        props.onSubmit({ //Novo colaborador obj
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={nome}
                    onChange={value => setNome(value)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    value={cargo}
                    onChange={value => setCargo(value)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite sua imagem"
                    value={imagem}
                    onChange={value => setImagem(value)} //onChange como função no componente
                />
                <ListaSuspensa
                    value={time}
                    required={true}
                    label="Time"
                    lista={props.times}
                    onChange={value => setTime(value)} //onChange em lambda no componente
                />
                <Botao>
                    Criar Cards
                </Botao>
            </form>
        </section>
    )
}

export { Formulario };