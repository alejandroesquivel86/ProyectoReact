import './NavBar.scss';

const NavBar = () => {
    return(
        <div className="navbar-primary">
            <img src="/assets/logo.png" alt="logo"/>
            <ul>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </div>
    )
}

export default NavBar