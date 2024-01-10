import Logo from "../imagen/GiordanoBruno_logo.jpg";

const Header = () => {
    return (
        <header className="navbar navbar-expand-sm border border-black-subtle navbar-dark">
            <div className="container-fluid"> 
                <a className="navbar-brand align-middle" href="#"><img className="logo" src={Logo} alt="Giordando Bruno"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/multimedia.html">Multimedia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/noticias.html">Noticias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/frasescitas.html">Frases </a> </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/contacto.html">Contacto </a> </li>
                    </ul>
                </div>
        </div>
    </header>
    )
}

export default Header;