import * as React from 'react';
import Button from '@mui/material/Button';
import './ItemProductDetail.scss';
import StarIcon from '@mui/icons-material/Star';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemProductDetail = ({data}) => {
    
    const [quantitySelected, setQuantitySelected] = useState(0);
    const {title, image, price, stock, detailTitle, detailDescription, categoria} = data;

    return(
    <>
        <div className="itemProductDetail">            
            <div className='imgContainer'>
                <img id="imgProductoDetail" src={`../assets/${image}`} alt="" />
            </div>
            <div className='sideBar'>
                <div className='detail'>
                    <div className='categoria'>
                        <span>{categoria}</span>
                        <div className='stars'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <h1>{title}</h1>
                    <span className='price'>$ {price}</span>            
                    <span className='stock'>stock: {stock}</span>                    
                    { quantitySelected > 0 ? <Link to='/cart' ><Button className="btnAdd" variant="contained"> TERMINAR COMPRA</Button></Link>
                    :<ItemCount initial={1} stock={stock} setQuantitySelected={setQuantitySelected}/>
                    }
                </div>
                <div className='ditailDescription'>
                    <h1>{detailTitle}</h1>
                    <h3>{detailDescription}</h3>
                </div>   
            </div>
        </div>     
    </>
    )
}

export default ItemProductDetail