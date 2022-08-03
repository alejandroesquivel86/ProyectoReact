import * as React from 'react'
import './ItemProduct.scss'
import ItemCount from './ItemCount'



const ItemProduct = ({data}) => {
    const {title, image, price, stock} = data
    
    const onAdd = (contador) => {
        alert(`Agregaste ${contador} productos`);
      };

    return(
        <div className="item-product">
            <img id="imgProducto" src={`./assets/${image}`} alt="" />
                <p>{title}</p>
                <span>$ {price}</span>
                <ItemCount onAdd={onAdd} initial={1} stock={stock}/>
                <span>stock: {stock}</span>
        </div>
    )
}

export default ItemProduct
