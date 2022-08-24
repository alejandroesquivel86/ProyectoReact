import {useState, useContext } from 'react'
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import './NavBar.scss';


const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { cartProducts, clear, removeProductToCart, totalProducts } = useContext(CartContext);
    console.log("totalProducts: ", totalProducts) 
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        
        <div className='cart-widget' >   
            {cartProducts.length !== 0 && <p>{totalProducts}</p>}
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
                }}>
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
                                    <DeleteIcon onClick={() => removeProductToCart(product.id)}/>
                                </div>                                    
                            </div>                         
                        )
                    })}
                        <div className='cartTotal'>
                            <p>Total</p>
                            <p>{totalProducts}</p>
                            <Button onClick={() => clear()}>Borrar todo</Button>
                        </div>
            </Menu>            
        </div>

    )
}

export default CartWidget