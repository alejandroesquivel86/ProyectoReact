import {useState, useContext} from 'react'
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import './NavBar.scss';



const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { cartProducts } = useContext(CartContext);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-widget' >            
            <ShoppingCartIconOutlined 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                        {console.log("cartProducts: ", cartProducts)}
                        {cartProducts.map((product) => {
                            return(
                            
                            <div className='item-cart-product' key={product.id}>
                                    <img src={`/assets/${product.image}`} alt="" />
                                    <div className='cart-product__details'>
                                        <p>{product.title}</p>                                        
                                    </div>
                                    <div className='cart-product__details'>
                                        <p>{product.price}</p>
                                    </div>
                                    <div className='cart-product__action'>
                                        <DeleteIcon />
                                    </div>
                                    <button>Borrar todo</button>
                            </div>                                
                            )
                        })}
            </Menu>
        </div>
    )
}

export default CartWidget