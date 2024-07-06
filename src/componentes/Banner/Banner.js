import './Banner.css'

export const Banner = () => {
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"></img>
        </header>
    )
}

/*
    Invés de função também poderia ser criada uma classe (mas não é o recomendado):
    https://pt-br.react.dev/reference/react/Component#defining-a-class-component
    Note that Hooks (functions starting with use, like useState) are not supported inside class components.

        class BoasVindas extends React.Component {
        render() {
            return <h1>Olá, {this.props.nome}</h1>;
        }
    }
    
    ou

    import { Component } from 'react';

    class Greeting extends Component {
        render() {
            return <h1>Hello, {this.props.name}!</h1>;
        }   
    }
*/