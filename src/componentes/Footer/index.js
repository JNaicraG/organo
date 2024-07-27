import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='icons'>
                <a href="facebook.com" target="_blank">
                    <img src='/imagens/fb.png' alt='' />
                </a>
                <a href="facebook.com" target="_blank">
                    <img src='/imagens/tw.png' alt='' />
                </a>
                <a href="facebook.com" target="_blank">
                    <img src='/imagens/ig.png' alt='' />
                </a>
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