import './NavBar.scss';
import CartWidget from './CartWidget';


const NavBar = () => {
    return(
        <div className="navbar-primary">
            <img src="/assets/CrossFit.jpg" alt="logo"/>
            <ul>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar