import * as React from 'react';
import './ItemProduct.scss';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { useState } from 'react';



const ItemProduct = ({data}) => {
    const {title, image, price, stock,id} = data
    const [quantitySelected, setQuantitySelected] = useState(1);


    return(
        <Link to={`/producto/${id}`}>
        <div className="item-product">
            <img id="imgProducto" src={`./assets/${image}`} alt="" />
                <p>{title}</p>
                <span>$ {price}</span>    
                {console.log("quantitySelected: ", quantitySelected)}            
                <ItemCount initial={1} stock={stock} setQuantitySelected={setQuantitySelected} productData={data} />
                <span>stock: {stock}</span>
        </div>
        </Link>
    )
}

export default ItemProduct
