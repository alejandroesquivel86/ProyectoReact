import './NavBar.scss';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return(
        <div className="navbar-primary">
            <img src="/assets/CrossFit.jpg" alt="logo"/>
            <ul>
                <Link to="/" ><li><button>Home</button></li></Link>
                <Link to="/zapatilla" ><li><button>Zapatillas</button></li></Link>
                <Link to="/accesorio" ><li><button>Accesorios</button></li></Link>                
                {/* <Link to="/contacto" ><li><button>Contacto</button></li></Link> */}
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar