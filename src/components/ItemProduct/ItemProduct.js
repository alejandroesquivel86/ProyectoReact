import './ItemProduct.scss'
import ItemCount from './ItemCount'
import * as React from 'react';
import Button from '@mui/material/Button';

const ItemProduct = ({data}) => {
    const {title, image, price, stock} = data
    return(
        <div className="item-product">
            <img id="imgProducto" src={`./assets/${image}`} alt="" />
                <p>{title}</p>
                <span>$ {price}</span>
                <ItemCount stock={stock} initial={1} />
                <Button variant="contained">Agregar</Button>                
                <span>stock: {stock}</span>
        </div>
    )
}

export default ItemProduct
