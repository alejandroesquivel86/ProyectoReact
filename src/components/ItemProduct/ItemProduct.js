import * as React from 'react';
import './ItemProduct.scss';
// import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemProduct = ({data}) => {
    const {title, image, price, stock,id} = data
    const [quantitySelected, setQuantitySelected] = useState(1);


    return(
        <Link to={`/producto/${id}`}>
        <div className="item-product">
            <img id="imgProducto" src={`./assets/${image}`} alt="" />
                <p>{title}</p>
                <span>$ {price}</span>                         
                <Stack direction="row" spacing={1}>      
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </Stack>
                <span>stock: {stock}</span>
        </div>
        </Link>
    )
}

export default ItemProduct
