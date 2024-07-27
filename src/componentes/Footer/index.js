import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='icons'>
                <img src='/imagens/fb.png' alt='' />
                <img src='/imagens/tw.png' alt='' />
                <img src='/imagens/ig.png' alt='' />
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='' />
            </div>
            <div className='creditos'>
                <h5>Desenvolvido por Nicolas (seguindo Alura).</h5>
            </div>
        </footer>
    )
}

export { Footer };